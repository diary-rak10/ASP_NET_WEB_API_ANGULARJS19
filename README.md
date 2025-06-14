Bien sûr ! Voici un **README.md** très détaillé et professionnel pour ton mini-projet ASP.NET Core + Angular :

---

````markdown
# 📦 CRUD Application - ASP.NET Core & Angular

Ce projet est une petite application web **fullstack** qui permet la **gestion de produits** à l’aide de :
- **Backend** : ASP.NET Core Web API
- **Frontend** : Angular 19
- **Base de données** : PostgreSQL avec Entity Framework Core

> 🔧 Ce projet est conçu à des fins d’apprentissage et de mise en pratique des opérations CRUD complètes dans un environnement moderne fullstack.

---

## ✨ Fonctionnalités

- 🔍 **Lister** les produits
- ➕ **Ajouter** un produit
- ✏️ **Modifier** un produit
- 🗑️ **Supprimer** un produit
- 🌐 Communication API REST entre Angular & ASP.NET Core
- 💾 Persistance des données avec PostgreSQL
- 🎨 Interface moderne avec design tendance 2025

---

## 📁 Structure du projet

```bash
├── CrudAngularASP/               # Projet ASP.NET Core (backend)
│   ├── Controllers/
│   ├── Models/
│   ├── Repositories/
│   ├── Services/
│   ├── Data/                     # DbContext + Migrations EF
│   └── appsettings.json          # Configuration de la DB
│
└── ClientApp/                    # Projet Angular (frontend)
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── product-list/
    │   │   │   ├── add-product/
    │   │   │   └── home/
    │   │   ├── services/
    │   │   └── app-routing.module.ts
    │   └── styles.css
    └── angular.json
````

---

## ⚙️ Prérequis

### Backend (ASP.NET Core)

* [.NET SDK 8.0+](https://dotnet.microsoft.com/en-us/download)
* PostgreSQL (installé localement ou distant)
* dotnet-ef (Entity Framework Core CLI tool) :

```bash
dotnet tool install --global dotnet-ef
```

### Frontend (Angular)

* [Node.js 18+](https://nodejs.org/)
* Angular CLI :

```bash
npm install -g @angular/cli
```

---

## 🚀 Lancer le projet

### 1️⃣ Configuration de la base de données

Assure-toi que PostgreSQL est installé et accessible. Dans `CrudAngularASP/appsettings.json` :

```json
"ConnectionStrings": {
  "DefaultConnection": "Host=localhost;Port=5432;Database=ProductDb;Username=postgres;Password=your_password"
}
```

### 2️⃣ Appliquer les migrations EF Core

```bash
cd CrudAngularASP
dotnet ef migrations add InitialCreate
dotnet ef database update
```

### 3️⃣ Lancer le serveur ASP.NET Core

```bash
dotnet run
```

L’API sera accessible à l’adresse : `https://localhost:5001` ou `http://localhost:5046`

### 4️⃣ Lancer le projet Angular

```bash
cd ClientApp
npm install
ng serve
```

Le frontend est accessible à : `http://localhost:4200`

---

## 🔄 Exemple de flux API

### POST /api/products

```json
{
  "name": "Ordinateur Portable",
  "price": 799.99
}
```

### GET /api/products

Renvoie la liste des produits.

---

## 🖌️ Design UI (2025)

* Glassmorphism sur les formulaires
* Transitions CSS fluides
* Interface responsive (mobile/desktop)
* Polices modernes via Google Fonts (Poppins)

---

## 📸 Aperçu

> (Ajoute ici une capture d’écran de la page d’accueil ou du formulaire)

---

## 🧠 Auteur

**RAKOTONIRINA Diariniaina Nomenjanahary**
Développeur Web Fullstack – Étudiant à l’Université de Fianarantsoa
📧 [diariniainarakoto0405@gmail.com](mailto:diariniainarakoto0405@gmail.com)

---

## 📄 Licence

Ce projet est à but pédagogique. Vous pouvez le réutiliser ou le modifier librement.

```

---

Souhaites-tu que je t’envoie aussi :
- le fichier `appsettings.json` configuré ?
- les captures d’écran à insérer ?
- le README en version `.md` téléchargeable ?  

Dis-moi ce que tu veux améliorer ou compléter !
```
