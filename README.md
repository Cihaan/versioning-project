# versioning-project
## Collaborateurs
@Cihaan
@Gyomzz
@Pehlow
@PChl0e

## Workflow
Nous nous sommes inspirés du Feature-Branch-Workflow pour notre projet.
Celui-ci consiste à avoir une branche par fonctionnalité, fix, ou modification. Toutes les nouvelles modifications, se voit directement merge dans la branche develop, où elle est relue et testée par un pair avant d'être merge dans la branche master si celle-ci est valide. Dans le cas contraire, des commentaires sont ajoutés au Pull Request et le développeur à l'issue de la demande se doit de faire des modification avant une nouvelle vérification. Une fois le test passé, la branche se voit merge avec la branche master, qui sert de référence pour la mise en production du projet.

Voici une visualisation de ce workflow :  
<img src='https://images-ext-2.discordapp.net/external/gDtOMNdBtmYUtWUrwz2X51BnEEw-xcr5jTYxr8HKeiA/https/nvie.com/img/git-model%402x.png?width=462&height=613' />

## Commit
Pour la nomenclature des commits, nous sommes partis sur la Conventionnal Commit.

Celui-ci s'organise de la manière suivante:
![image](https://user-images.githubusercontent.com/80070465/198224157-e0509863-037c-4bb2-bdff-c40560dee81c.png)

## Preview
//TODO images du projet


## Sources
Workflow : https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow  
Commit : https://www.conventionalcommits.org/en/v1.0.0/
Automated changelog: https://docs.github.com/en/repositories/releasing-projects-on-github/automatically-generated-release-notes#configuring-automatically-generated-release-notes

## Docker compose

To use docker compose simply run ```docker compose up -d```

You can see the project [here](http://localhost:8080/)

If u want to acces to the container run ```docker compose exec -it server bash```
