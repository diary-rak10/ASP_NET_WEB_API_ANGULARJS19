import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  product: Product = { id: 0, name: '', description: '', price: 0 };

  constructor(
    private ps: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.ps.getById(+id).subscribe(p => this.product = p);
    }
  }

  save() {
    const action = this.product.id === 0 ? 'créé' : 'modifié';
    const swalConfig = {
      title: this.product.id === 0 ? 'Confirmation' : 'Mise à jour',
      text: `Voulez-vous ${this.product.id === 0 ? 'créer' : 'modifier'} ce produit ?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#10B981',
      cancelButtonColor: '#EF4444',
      confirmButtonText: 'Oui, procéder !',
      cancelButtonText: 'Annuler',
      customClass: {
        popup: 'rounded-lg shadow-lg',
        confirmButton: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded',
        cancelButton: 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'
      }
    };

    Swal.fire(swalConfig as any).then((result) => {
      if (result.isConfirmed) {
        if (this.product.id === 0) {
          this.ps.create(this.product).subscribe({
            next: () => {
              Swal.fire({
                title: 'Succès !',
                text: `Le produit a été ${action} avec succès.`,
                icon: 'success',
                confirmButtonColor: '#10B981',
                customClass: { confirmButton: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded' }
              }).then(() => this.router.navigate(['/']));
            },
            error: (err) => {
              Swal.fire({
                title: 'Erreur !',
                text: 'Une erreur est survenue lors de la création.',
                icon: 'error',
                confirmButtonColor: '#EF4444',
                customClass: { confirmButton: 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded' }
              });
            }
          });
        } else {
          this.ps.update(this.product).subscribe({
            next: () => {
              Swal.fire({
                title: 'Succès !',
                text: `Le produit a été ${action} avec succès.`,
                icon: 'success',
                confirmButtonColor: '#10B981',
                customClass: { confirmButton: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded' }
              }).then(() => this.router.navigate(['/']));
            },
            error: (err) => {
              Swal.fire({
                title: 'Erreur !',
                text: 'Une erreur est survenue lors de la modification.',
                icon: 'error',
                confirmButtonColor: '#EF4444',
                customClass: { confirmButton: 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded' }
              });
            }
          });
        }
      }
    });
  }
}
