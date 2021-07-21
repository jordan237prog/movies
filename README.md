#   Project Movie Univers

![image](https://user-images.githubusercontent.com/58524740/126494965-da744953-a8e2-4b3c-9220-8b083a96dd39.png)

# Voici les étapes que j'ai suivies

1. Choix des outils à utiliser

2. Creation du design

3. implementation( Create React App et Code )

    - initialiser le projet avec create react app en local
    - initialiser git et git flow en local
    - créer un repo git sur GitHub pour tous les push et intégration continue
    - faire le premier push sur la branche master
    - créer un feature/nomdefonctionnalité pour chaque fonctionnalité ou tâche 
    - lorsque la fonctionnalité est prête, fusionnez-la avec la branche develop, testez, puis fusionnez-la avec la branche principale(master)

# j'utilise  GitHub Actions pour Testes le poject avec des Version differentes de NodeJs (Important)

![github Action ](https://user-images.githubusercontent.com/58524740/126493485-3f27477d-9af5-4374-9c77-14eb10cc2241.png)

#   Apres le test valider, nous pouvons merge la brache

![Merge apres le test de github action](https://user-images.githubusercontent.com/58524740/126493534-5416b1ad-ee7e-4aba-a9ad-4c8aac277669.png)


#   En cas d'echec je reçois un mail puis je vérifier le code

![image](https://user-images.githubusercontent.com/58524740/126494226-4cc40f46-79bb-46ec-a030-a01226f3aa38.png)


# Installation du projet en local

1. git clone https://github.com/jordan237prog/movies.git

2. cd /dansleproject  

3. yarn

4. yarn start

# react-interview(TAF)

1. Lister les films dans des cartes avec: le titre en gras, la catégorie et une jauge type Youtube indiquant le ratio likes/dislikes. Les cartes doivent être côtes à côtes et responsive. Càd que lorsque la fenêtre se réduit, les cartes sautent à la ligne suivante.

2. Ajouter un bouton dans les cartes permettant de supprimer celle-ci

3. Ajouter un bouton toggle like/dislike

4. Ajouter un filtre par catégorie (de type multiselect) en supposant qu'on ne les connaisse pas à l'avance (il faut donc les récupérer dynamiquement depuis les films). Si tous les films d'une catégorie sont supprimés, celle-ci ne doit plus appraître.

5. Ajouter un système de pagination avec les fonctionnalités suivantes: 
    * Boutons précédent/suivant
    * Choix du nombre d'élements affichés par page (4, 8 ou 12).

Prennez des initiatives, il y a des points bonus si

* C'est jolie
* Vous utilisez correctement REDUX 
* Il y a une attention aux détails

/!\ La suppression du comportement asynchrone dans `movies.js` entraînera une annulation du test.
