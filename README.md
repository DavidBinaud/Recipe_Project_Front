# Recipe_Project_front

**Auteurs** : David Binaud - Clément Delafontaine
Licence APIDAE - IUT Montpellier Sète

Ce projet propose aux utilisateurs de créer un compte afin d'accéder à une liste de recettes écrites par la communauté. Chacun peut créer et proposer ses recettes.

## Front

[Recipe_Project_Front](https://github.com/DavidBinaud/Recipe_Project_Front)

Est le module frontend développé avec Vue.js 2

### Installation (linux macOS)

- Cloner le module. Assurez-vous que les fichiers package.json sont présents à la racine du projet et dans un terminal lancez la commande suivante :

```shell
npm install
```

- Créer un fichier conf.json à la racine et coller l'url où est hébergée l'api

```json
{
  "api_recipe_url": "https://node-recipe-project.herokuapp.com"
}
```

# ATTENDUS

- [x] impossibilité de naviguer hors des pages login et création de compte si pas loggé
- [x] page de login
- [x] page d'inscription
- [x] home listant toutes les recettes avec pagination
- [x] redirection vers chaque recette au clic
- [x] données utilisées et bindées dans VueX
- [x] déployé sur netlify
- [x] gestion du JWT
