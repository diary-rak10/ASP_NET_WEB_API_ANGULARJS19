# 🧩 Projet CRUD Produits - ASP.NET Core & Angular

> **Application Web FullStack** permettant la gestion de produits à l'aide d'une API REST développée avec **ASP.NET Core** et un front-end dynamique construit avec **Angular**.

---

## 🚀 Technologies utilisées

| Frontend       | Backend        | Base de données | ORM                   | Outils               |
|----------------|----------------|------------------|------------------------|-----------------------|
| Angular 17     | ASP.NET Core 8 | PostgreSQL       | Entity Framework Core | .NET CLI, Angular CLI |

---

## 🎯 Fonctionnalités principales

- ✅ Création de produit  
- ✏️ Modification de produit  
- ❌ Suppression de produit  
- 📋 Affichage de la liste des produits  
- 🔁 Communication Front <-> API REST  
- 🎨 Interface moderne et responsive  

---

## ⚙️ Installation & Exécution

### 🔧 1. Configuration du Backend (.NET)

1. Configurer la base de données dans `appsettings.json` :
```json
"ConnectionStrings": {
  "DefaultConnection": "Host=localhost;Port=5432;Database=ProductDb;Username=postgres;Password=your_password"
}
```

2. Appliquer les migrations :
```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

3. Démarrer l'API :
```bash
dotnet run
```

> Accès API : `http://localhost:5046/api/products`

---

### 💻 2. Configuration du Frontend (Angular)

1. Aller dans le dossier Angular :
```bash
cd ClientApp
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer Angular :
```bash
ng serve
```

> Accès Frontend : `http://localhost:4200`

---

## 🗂️ Structure du projet

```
├── CrudAngularASP/
│   ├── Controllers/
│   ├── Models/
│   ├── Repositories/
│   ├── Services/
│   └── Program.cs
├── ClientApp/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   └── services/
│   │   └── index.html
```

---

## 👨‍💻 Auteur du projet

- **Nom :** RAKOTONIRINA Diariniaina Nomenjanahary  
- **Université :** Université de Fianarantsoa  
- **École :** EMIT (École de Management et d’Innovation Technologique)  
- **Niveau :** 2e année de Licence - Développement Intranet & Internet  
- **Email :** diariniainarakoto0405@gmail.com  
- **Téléphone :** 038 239 6920

---

## 📝 Remarques

- Ce projet est un exemple de base de la structure CRUD en Angular + ASP.NET Core.
- Possibilité d'étendre avec authentification, pagination, recherche dynamique, etc.
- UI conçue pour s’aligner avec les standards UI/UX 2025.

---

## ✅ Objectif pédagogique

- Apprendre à connecter Angular avec une API ASP.NET Core
- Comprendre le fonctionnement d’Entity Framework Core
- Appliquer la séparation des couches (Controller, Service, Repository)
- Réaliser une application web propre et responsive

---

## 📸 Capture d’écran (à ajouter)

```
![Aperçu de l'application](./screenshot.png)
```

---

