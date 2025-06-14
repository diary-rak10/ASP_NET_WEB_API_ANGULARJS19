import { Component, OnInit, ViewChild } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'actions'];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ps: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadProducts() {
    this.ps.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  deleteProduct(id: number) {
    const product = this.dataSource.data.find(p => p.id === id);
    if (product) {
      Swal.fire({
        title: 'Confirmation',
        text: `Voulez-vous supprimer "${product.name}" ?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#EF4444',
        cancelButtonColor: '#10B981',
        confirmButtonText: 'Oui, supprimer !',
        cancelButtonText: 'Annuler',
        customClass: {
          popup: 'rounded-lg shadow-lg',
          confirmButton: 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded',
          cancelButton: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.ps.delete(id).subscribe({
            next: () => {
              Swal.fire({
                title: 'Supprimé !',
                text: 'Le produit a été supprimé avec succès.',
                icon: 'success',
                confirmButtonColor: '#10B981',
                customClass: { confirmButton: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded' }
              }).then(() => this.loadProducts());
            },
            error: (err) => {
              Swal.fire({
                title: 'Erreur !',
                text: 'Une erreur est survenue lors de la suppression.',
                icon: 'error',
                confirmButtonColor: '#EF4444',
                customClass: { confirmButton: 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded' }
              });
            }
          });
        }
      });
    }
  }
}
