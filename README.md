

---

````markdown
# 🛠️ Application CRUD Produits - ASP.NET Core & Angular

Ce projet est une application web **fullstack moderne** développée avec :
- **Back-end** : ASP.NET Core Web API (C#)
- **Front-end** : Angular 17
- **Base de données** : PostgreSQL avec Entity Framework Core

Il s’agit d’un mini-projet de type CRUD permettant de gérer une liste de produits, avec un design responsive, fluide et adapté aux tendances 2025.

---

## 🧰 Technologies utilisées

| Côté | Outils/Technologies |
|------|---------------------|
| 🔧 Backend | ASP.NET Core 8, Entity Framework Core, C# |
| 🌐 Frontend | Angular 17+, TypeScript, HTML5, SCSS/CSS |
| 🗄️ Base de données | PostgreSQL |
| 🧪 Outils | dotnet-ef, Angular CLI, Visual Studio Code / Rider |

---

## ✨ Fonctionnalités

- 📦 Création de produit
- 📝 Modification d’un produit
- ❌ Suppression d’un produit
- 🔍 Affichage de tous les produits
- 🔄 Connexion API Angular ↔ ASP.NET Core
- 🎨 Interface utilisateur moderne et réactive

---

## 🖼️ Aperçu de l’interface

> (Ajoutez ici une capture d’écran, ou utilisez `Ctrl + Shift + S` pour en faire une depuis le navigateur)

- Interface responsive
- Design tendance avec **Glassmorphism**, animations CSS, et **Google Fonts modernes**
- Expérience utilisateur fluide

---

## 🔧 Installation et configuration

### 1. 📁 Cloner le dépôt

```bash
git clone https://github.com/votre-utilisateur/nom-du-projet.git
cd nom-du-projet
````

---

### 2. ⚙️ Configuration du backend (ASP.NET Core)

#### a. Paramétrer la chaîne de connexion dans `appsettings.json`

```json
"ConnectionStrings": {
  "DefaultConnection": "Host=localhost;Port=5432;Database=ProductDb;Username=postgres;Password=your_password"
}
```

> Remplace `your_password` par ton mot de passe PostgreSQL.

#### b. Appliquer les migrations Entity Framework

```bash
cd CrudAngularASP
dotnet tool restore
dotnet ef database update
```

#### c. Lancer le serveur backend

```bash
dotnet run
```

* Par défaut, l’API est accessible sur : `http://localhost:5046/api/products`

---

### 3. 💻 Configuration du frontend (Angular)

```bash
cd ClientApp
npm install
ng serve
```

* Application disponible sur : `http://localhost:4200`

---

## 📁 Arborescence du projet

```
📦 Projet CRUD Produits
├── CrudAngularASP/              → Backend ASP.NET Core
│   ├── Controllers/
│   ├── Models/
│   ├── Repositories/
│   ├── Services/
│   ├── Data/                    → DbContext & Migrations EF
│   └── appsettings.json
│
└── ClientApp/                   → Frontend Angular
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── home/
    │   │   │   ├── product-list/
    │   │   │   └── product-form/
    │   │   ├── services/
    │   │   └── app.module.ts
    └── angular.json
```

---

## 🔄 Exemple d’appel API

### ➕ POST `/api/products`

```json
{
  "name": "Clavier mécanique RGB",
  "price": 89.99
}
```

### 📄 GET `/api/products`

Retourne tous les produits.

---

## 📖 Auteur du projet

👤 **RAKOTONIRINA Diariniaina Nomenjanahary**
Étudiant en 2e année de Licence à l’EMIT – Université de Fianarantsoa
📍 Lot AKM IV 98 bis, Alakamisy Fenoarivo
📧 [diariniainarakoto0405@gmail.com](mailto:diariniainarakoto0405@gmail.com)
📞 038 23 969 20

---

## 📜 Licence

Ce projet est à but **pédagogique**. Vous pouvez le modifier et l’adapter librement.

---


---

```

---


```
