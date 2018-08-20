// /*                                      |
// |                                       |
// |    Exercices OpenClassroom      |
// |                                       |
// |                                       |*/



// // Test du débogueur 

// console.log("Bonjour en JavaScript !");
// console.log("Faisons quelques calculs.");
// console.log(4 + 7);
// console.log(12 / 0);
// console.log("Au revoir !");



// // Les commentaires 

// console.log("Bonjour en JavaScript !");
// //console.log("Faisons quelques calculs.");
// console.log(4 + 7);
// //console.log(12 / 0);
// console.log("Au revoir !");

// /* Un commentaire 
// sur plusieurs
// lignes */

// // Un commentaire sur une seule ligne



// // Présentation
// var myName = "Amélie";
// var myAge = 27;
// console.log(myName);
// console.log(myAge);



// // Calculatrice

// console.log(6 + 3);
// console.log(6 - 3);
// console.log(6 * 3);
// console.log(6 / 3);



// // Valeurs

// console.log(4 + 5);
// console.log("4 + 5");
// console.log("4" + "5");



// Interactions

// var prenom = prompt("Entrez votre prénom :");
// alert("Bonjour, " + prenom);



// Modif d'interactions 

// var prenom = prompt("Entrez votre prénom :");
// var nom = prompt("Entrez votre nom :");
// alert("Bonjour, " + prenom + " " + nom);



// TVA 

// var prixHT = prompt("Saisissez un prix");
// var TVA = 19.6 / 100;
// var prixTTC = prixHT * (1 + TVA);
// console.log("Le prix TTC est de " + prixTTC + " euros");

// Conversion 
// var temperatureCelcius = prompt("Saisissez un nombre ");
// var temperatureFahrenheit = temperatureCelcius * 9 / 5 + 32;
// console.log("La température en degrès Fahrenheit est de " + temperatureFahrenheit);



// Permutation 

// var nombre1 = 5;
// var nombre2 = 3;

// var stockageNombre = nombre1; // Permet de stocker la valeur de la variable afin de rendre nombre1 vide //
// nombre1 = nombre2;
// nombre2 = stockageNombre;

// console.log(nombre1); // Doit afficher 3
// console.log(nombre2); // Doit afficher 5



// Les instructions 



// IF
// var nombre = Number(prompt("Entrez un nombre :"));
// if (nombre > 0) {
//     console.log(nombre + " est positif");
// }


// Else
// var nombre = Number(prompt("Entrez un nombre :"));
// if (nombre > 0) {
//     console.log(nombre + " est positif");
// }
// else {
//     console.log(nombre + " est négatif ou nul");
// }



// Imbriquer des conditions 
// var nombre = Number(prompt("Entrez un nombre :"));
// if (nombre > 0) {
//     console.log(nombre + " est positif");
// } else { // nombre <= 0
//     if (nombre < 0) {
//         console.log(nombre + " est négatif");
//     } else { // nombre === 0
//         console.log(nombre + " est nul");
//     }
// }



// Conditions composées 
// if ((nombre >= 0) && (nombre <= 100)) {
//     console.log(nombre + " est compris entre 0 et 100");
// }


// Exprimer un choix 
// var meteo = prompt("Quel temps fait-il dehors ?");
// if (meteo === "soleil") {
//     console.log("Sortez en t-shirt.");
// } else if (meteo === "vent") {
//     console.log("Sortez en pull.");
// } else if (meteo === "pluie") {
//     console.log("Sortez en blouson.");
// } else if (meteo === "neige") {
//     console.log("Restez au chaud à la maison.");
// } else {
//     console.log("Je n'ai pas compris !");
// }


// JOUR SUIVANT : Exercice 

// var jour = prompt("Entrez un jour :")
// if (jour == "lundi"){
//     console.log("Demain, nous serons Mardi");
// }else if (jour === "mardi") {
//          console.log("Demain, nous serons mercredi.");
//      } else if (jour === "mercredi") {
//         console.log("Demain, nous serons jeudi.");
//      } else if (jour === "jeudi") {
//          console.log("Demain, nous serons vendredi.");
//      } else if (jour == "vendredi") {
//          console.log("Demain, nous serons samedi");
//      }  else if (jour == "samedi") {
//         console.log("Demain, nous serons dimanche");
//     } else if (jour == "dimanche") {
//         console.log("Demain, nous serons lundi");
//     } else {
//         console.log("Je n'ai pas compris");
//     }



// COMPARAISON 

// var nombre1 = prompt("Entrez un premier nombre");
// var nombre2 = prompt("Entrez un deuxième nombre");

// if (nombre1 > nombre2) {
//     console.log (nombre1 + " est plus grand que " + nombre2);
// }
// if (nombre2 > nombre1) {
//     console.log (nombre2 + " est plus grand que " + nombre1);
// }
// if (nombre1 == nombre2) {
//     console.log (nombre1 + " est égal à " + nombre2);
// }



// BACALAUREAT

/* Note inférieur à 10 = recalé
   Note de 10 à 11 = le candidat est reçu
   Note égale a 12 et + = le candidat est reçu avec mention
*/

// var moyenne = prompt("Entrez la moyenne de l'élève au bac");

// if (moyenne < 10) {
//     console.log("L'élève est recalé");
// }
// else if (moyenne < 12) { 
//     console.log("L'élève' est reçu");
// } else { 
//     console.log("L'élève est reçu avec mention");
// }


// VALEURS FINALES



// NOMBRE DE JOURS DANS UN MOIS
// Utilisation du switch car plus lisible quand bcp d'infos

// var mois = Number(prompt("Entrez le numéro d'un mois")); // NE PAS OUBLIER DE DEFINIR LE TYPE DE LA VALEUR AVANT LE PROMPT

// switch (mois){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//     console.log("Ce mois comporte 31 jours");
//     break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//     console.log("Ce mois comporte 30 jours");
//     break;

//     case 2:
//     console.log("Ce mois comporte 28 jours");
//     break;

//     default: // EQUIVALENT A ELSE
//     console.log("Je ne reconnais pas ce mois, désolée!");
// }



// HEURE SUIVANTE 

// var heures = Number(prompt("Entrez les heures"));
// var minutes = Number(prompt("Entrez les minutes"));
// var secondes = Number(prompt("Entrez les secondes"));

// if ((heures > 0) && (heures <= 23) && (minutes > 0) && (minutes <= 59) && (secondes > 0) && (secondes <=59)) { 
//     secondes++;
// } 
// if (secondes === 60) {
//     secondes = 0;
//     minutes++;
// }
// if (minutes === 60) {
//     minutes = 0;
//     heures++;
// }
// console.log("A la seconde suivante, il sera " + heures +" heures " + minutes + " minutes " + secondes + " secondes.");

// *********** //
// Les boucles //
// *********** //


// TOURNEZ MANEGE
// for (var i = 1; i <= 10; i++){
//     console.log("Tour numéro " + i);
// }



// NOMBRES PAIRS
// var nombre = Number(prompt("Entrez le premier nombre")); 

// for (var i = nombre; i <= nombre+ 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " est pair");
//     }
//     else {
//         console.log(i + " est impair");
//     }
// }



// CONTROLE DE SAISIE

// Fait saisir un nombre jusqu'à ce qu'il soit inférieur ou égal à 100
// var nombre = Number(prompt("Entrez un nombre"));

// while (nombre > 100) {                              // Tant que le nombre saisi est supérieur à 100, alors
//     Number(prompt("Entrez un nombre"));             // demande à l'utilisateur de ressaisir un nombre
// }

/////////////////////////////////////////////////////////////////////////////////////////////////
// Ensuite, améliorez votre programme pour que le nombre saisi soit compris entre 50 et 100 :   /
// var nombre = 0;                                                                              /
// while ((nombre < 50) || (nombre > 100)) {                                                    /
//     nombre = Number(prompt("Entrez un nombre entre 50 et 100 : "));                          /
// }                                                                                            /
/////////////////////////////////////////////////////////////////////////////////////////////////



// ECHIQUIER ATELIER 
// Nous voulons réaliser un échequier de ce type :
/* #_#_
   _#_#
   #_#_
   _#_#

   qui est une string : #_#_/n#_#_/n#_#_/n#_#_/n

   On va décomposer nos répétitions
   on a d'abord #_#_/n#_#_/n#_#_/n#_#_/n
   puis 4 fois #_#_/n
   puis 2 fois # et 2 fois _
   on a ensuite le /n 
   
   */


// var str = "";
//  for (i = 0; i < 4; i++){ // pour notre échequier complet 
//      for (j=0; j <4; j++) {
//         if (i % 2 === 0){
//             console.log("#");
//         }
//         else {
//             console.log("_");
//         }
//         console.log()
//      }
//  }



// MATRICE ATELIER

/* Nous voulons un programme qui nous affiche : 
1
0
0
0

0       On décompose nos répétitions. 
1       Une grande répétition de 1000 0100 00100 0001
0       
0

0
0
1
0

0
0
0
1
*/
// for (i = 0; i < 4; i++){
//     for (j = 0; j < 4; j++){
//         if (i === j){
//           console.log("1");
//         }
//           else {
//             console.log("0");
//           }
//     }
//     console.log("________");
// }


// PYRAMIDE ATELIER - STRING SEPAREES
// var string = "";
// for (i = 0; i < 5; i++){
//     console.log(string += "*")
// }

// PYRAMIDE ATELIER - UNE SEULE STRING
/* var string = "\n";
for (i = 0; i < 4; i++){
  for (j = 0; j <= i; j++){    J <= I?
    string += "x";
    }
  string += "\n";
}
console.log(string) */



// Table de multiplication OPC
// var multiplier=Number(prompt("Entrez un chiffre"));
// console.log("Voici la table de multiplication de " + multiplier);
// for (i = 0 ; i <= 10 ; i++){
//   console.log(i + " x " + multiplier + " = " + (i * multiplier));
// }


// NI OUI NI NON
// var choix = prompt("Voulez vous jouer à ni oui ni non?");
// while ((choix !== "oui" && choix !== "non")) {
//   choix = prompt("Voulez vous jouer à ni oui ni non?");
// }
// console.log("Vous avez perdu");



// Triangle OPC
/* var string = "\n";
for (i = 0; i < 4; i++){
  for (j = 0; j <= i; j++){    J <= I?
    string += "x";
    }
  string += "\n";
}
console.log(string) */


// FIZZBUZZ

// Afficher les nombres de 1 à 100
//  pour chaque nombre vérifier s'il est divisible par 3
//      Si oui, afficher FIZZ
//      Si non, verifier s'il est divisible par 5
//         Si oui, afficher Buzz, 
//         Si non, afficher le chiffre

// for (i = 0 ; i <= 100; i++){
//     if (i % 3 == 0){
//         console.log("FIZZ");
//     }
//     else if (i % 5 == 0) {
//         console.log("BUZZ");
//     }
//     else{
//         console.log(i);
//     }
// }

// AMELIORER LE PROGRAMME POUR QUIL AFFICHE FIZZBUZZ A LA PLACE DES NOMBRES DIVISIBLES PAR 3 ET PAR 5
/* Afficher les nombres de 1 à 100
  pour chaque nombre, vérifier s'il est divisible par 3 et par 5
     si oui, afficher fizzbuzz      
     si non, 
     verifier s'il est divisible par 3
      si oui, afficher fizz
      si non, 
        verifier s'il est divisible par 5
        si oui afficher buzz
        si non
        afficher le chiffre */

// for (i = 0 ; i <= 100 ; i++) {
//     if ((i % 3 == 0) && (i % 5 ==0)) {
//         console.log("FIZZBUZZ");
//     }
//     else if (i % 3 == 0) {
//         console.log("FIZZ");
//     }
//     else if (i % 5 == 0) {
//         console.log("BUZZ");
//     }
//     else {
//         console.log(i);
//     }
// }



// ACTIVITE OPC DEVINETTE

/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

// console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
// var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

// var choix = 0;  // ICI ON DIT AU PROGRAMME D ENTRER DANS LA BOUCLE A 0

// while (choix != solution){
//   var choix = Number(prompt("Saisissez un nombre"));
//   if (choix < solution) {
//     console.log("Trop petit");
//   }
//   else if (choix > solution) {
//     console.log("Trop grand")
//   }
//   else {
//     console.log("Gagné!");
// }

// }



/*
    LES FONCTIONS
                     */

//DIRE BONJOUR

// Renvoie un message de bienvenue

// function direBonjour(prenom, nom) {   // ICI PARAMETRES

//   var message = "Bonjour, " + prenom + " " + nom + " !";   

//   return message;

// }


// // TODO : faire saisir le prénom et le nom de l'utilisateur
// var prenom = prompt("Quel est votre prénom?");    // ARGUMENTS
// var nom = prompt ("Quel est votre nom");

// // TODO : appeler direBonjour() avec les bons arguments et afficher son résultat

// console.log(direBonjour(prenom, nom));   



// CARRE D'UN NOMBRE

// Renvoie le carré d'un nombre

// function carre(x) {
//  return x * x;
// }       // J INITIALISE MA FONCTION AVEC L INSTRUCTION

// console.log(carre(0)); // Doit afficher 0

// console.log(carre(2)); // Doit afficher 4

// console.log(carre(5)); // Doit afficher 25

// for (var i ; i <= 10 ; i++){
//   console.log(carre(i));
// }    // JE FAIS MA BOUCLE "POUR CHAQUE CHIFFRE DE 1 A 10, J APPELLE LA FONCTION DANS LE CONSOLE LOG"




// MINIMUM 

// TODO : écrire la fonction min()

// function min(a, b) {
//   if (a < b) {
//       return a;
//   } else {
//       return b;
//   }
// }

// console.log(min(4.5, 5)); // Doit afficher 4.5

// console.log(min(19, 9)); // Doit afficher 9

// console.log(min(1, 1)); // Doit afficher 1


// CALCULATRICE 

// TODO : écrire la fonction calculer()

// function calculer ( nb1, op, nb2) {

//   if (op == "+"){
//     return nb1 + nb2 ;
//   }

//   else if (op == "-"){
//     return nb1 - nb2;
//   }

//   else if (op == "*"){
//     return nb1 * nb2;
//   }

//   else {
//     return nb1 / nb2;
//   }
// }


// console.log(calculer(4, "+", 6)); // Doit afficher 10

// console.log(calculer(4, "-", 6)); // Doit afficher -2

// console.log(calculer(2, "*", 0)); // Doit afficher 0

// console.log(calculer(12, "/", 0)); // Doit afficher Infinity




// PERIMETRE ET AIRE D UN CERCLE

// function perimetre(rayon) {
//   return 2 * rayon * Math.PI;
// }

// // Renvoie l'aire d'un cercle
// function aire(rayon) {
//   return Math.pow(rayon, 2) * Math.PI;
// }

// var r = Number(prompt("Entrez le rayon d'un cercle :"));
// console.log("Son périmètre vaut " + perimetre(r));
// console.log("Son aire vaut " + aire(r));




// LES TABLEAUX

// Mousquetaires
// var mousquetaires = ["Athos", "Porthos", "Aramis"];

// console.log("Voici les trois mousquetaires: ")
// for (i = 0 ; i < mousquetaires.length ; i++) {
//   console.log(mousquetaires[i]);
// }

// mousquetaires.push("D'artagnan");

// console.log("Voici maintenant un mousquetaire de plus")
// mousquetaires.forEach(function (mousquetaire) {
//   console.log(mousquetaire);
// });



// SOMME DES VALEURS
// var valeurs = [11, 3, 7, 2, 9, 10];

// var somme = 0;
// for (var i = 0; i < valeurs.length; i++) {
//     somme += valeurs[i];
// }
// console.log("La somme des éléments vaut " + somme);



// max des valeurs


// var valeurs = [11, 3, 7, 2, 9, 10];

// console.log("Voici les valeurs de notre tableau: ")
//  for (i = 0 ; i < valeurs.length ; i++) {
//    console.log(valeurs[i]);
//  }

// var plusHaute = valeurs[0];
// // L'indice commence à 1 puisque le maximum est initialisé avec la 1ère valeur du tableau
// for (var i = 1; i < valeurs.length; i++) {
//   if (valeurs[i] > plusHaute) {
//     plusHaute = valeurs[i];
//   }
// }

// console.log("La valeur la plus haute dans le tableau est : " + plusHaute);



// MOTS CLE

// var mots = [];

// var mot = "";
// while (mot !== "stop") {
//     mot = prompt("Entrez un mot ou tapez stop pour arrêter :");
//     if (mot !== "stop") {
//         mots.push(mot);
//     }
// }

// mots.forEach(function (mot) {
//     console.log(mot);
// });



// LISTE DE FILMS 
// var Film = {
//   // Initialise le film
//   init: function (titre, annee, realisateur) {
//       this.titre = titre;
//       this.annee = annee;
//       this.realisateur = realisateur;
//   },
//   // Renvoie la description du film
//   decrire: function () {
//       var description = this.titre + " (" + this.annee + ", " + this.realisateur + ")";
//       return description;
//   }
// };

// var film1 = Object.create(Film);
// film1.init("Le loup de Wall Street", 2013, "Martin Scorsese");
// var film2 = Object.create(Film);
// film2.init("Vice-Versa", 2015, "Pete Docter");
// var film3 = Object.create(Film);
// film3.init("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamou");

// var films = [film1, film2, film3];

// films.forEach(function (film) {
//   console.log(film.decrire());
// });


// GESTION D UN CHENIL


// var Chien = {
//   // initialise le chien
//   init: function (nom, race, taille) {
//       this.nom = nom;
//       this.race = race;
//       this.taille = taille;
//   },
//   // Renvoie l'aboiement du chien
//   aboyer: function () {
//       var aboiement = "Whoua ! Whoua !";
//       if (this.taille < 25) {
//           aboiement = "Kaii ! Kaii !";
//       } else if (this.taille > 60) {
//           aboiement = "Grrr ! Grrr !";
//       }
//       return aboiement;
//   }
// };

// var crokdur = Object.create(Chien);
// crokdur.init("Crokdur", "mâtin de Naples", 75);
// var pupuce = Object.create(Chien);
// pupuce.init("Pupuce", "bichon", 22);
// var medor = Object.create(Chien);
// medor.init("Médor", "labrador", 58);

// var chenil = [];
// chenil.push(crokdur);
// chenil.push(pupuce);
// chenil.push(medor);

// console.log("Le chenil héberge " + chenil.length + " chien(s) :");
// chenil.forEach(function (chien) {
//   console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. " +
//       "Il aboie : " + chien.aboyer());
// });


/*                                      |
|                                       |
|    Exercices débutants skillcode      |
|                                       |
|                                       |*/



// //  "Hello world" 

// console.log("Hello World :)");



// // Calculs divers 

// console.log(3*3);
// console.log(12/0);
// console.log(4+9+78);
// console.log(12-7);
// console.log(5e4);



// Communiquer avec l'ordinateur

// var prenom = prompt("Entrez votre prénom");
// console.log("Bonjour " + prenom);
// // ou 
// alert("bonjour " + prenom);



//  Nom et prénom
// var prenom = "Amélie ";
// var nom = "Grandin";
// console.log("Bonjour" + prenom + nom);



// exercice 5 
// var myNumber = "123";  
// console.log(parseInt(myNumber));



// Exercice 6
// var min = "bonjour je suis une phrase écrite en minuscules !";
// var maj = "BONJOUR! MOI, JE SUIS UNE PHRASE ECRITE EN MAJUSCULES";

// console.log(min.toUpperCase());
// console.log(maj.toLowerCase());



// INTRODUCTION AVANCES

// EXERCICE 1
// var empty = "";
// var filled = "Je contient une phrase";

// if (empty === "") {
//   console.log("true");
// }
// else {
//   console.log("false");
// }



// EXERCICE 2
// var anneeActuelle = Number(prompt("Saisissez l'année actuelle"));
// var anneeNaissance = Number(prompt("Saisissez votre année de naissance"));
// var age = anneeActuelle - anneeNaissance;
// console.log("Vous avez " + age + " ans");

// POUR ALLER PLUS LOIN :
// var anneeActuelle = Number(prompt("Saisissez l'année actuelle"));
// var anneeNaissanceA = Number(prompt("Saisissez votre année de naissance"));
// var anneeNaissanceB = Number(prompt("Saisissez l'année de naissance de votre voisin"));
// var ages = (anneeActuelle - anneeNaissanceA) + (anneeActuelle - anneeNaissanceB);
// console.log("A vous deux, vous avez " + ages + " ans");



// EXERCICE 3

// var prix1 = 70;
// var prix2 = 59;
// var prix3 = 20;
// var reduc = 20 / 100;

// var total = (prix1 + prix2 + prix3) - (prix1 + prix2 + prix3) * reduc;
// console.log(total);



// EXERCICE 4
// var nb1 = Number(prompt("Saisissez le premier nombre à additionner"));
// var nb2 = Number(prompt("Saisissez le deuxième nombre à additionner"));
// var total = console.log(nb1 + nb2);



// EXERCICE 5 
// var nom = prompt("Saisissez votre nom");
// var prenom = prompt("Saisissez maitnenant votre prénom");
// var longueurNom = nom.length; // pour définir la longueur du mot
// var longueurPrenom = prenom.length;

// alert("votre nom commence par la lettre " + nom[0].toUpperCase());
// alert("votre nom termine par la lettre " + (nom[longueurNom - 1].toUpperCase())); // INDIQUE DE PRENDRE LE DERNIER CARACTERE DU MOT 
// alert("votre prénom commence par la lettre " + prenom[0].toUpperCase());
// alert("votre prénom termine par la lettre " + (prenom[longueurPrenom - 1].toUpperCase()));



// INTERMEDIAIRE PT1

// EXERCICE 1

/* Déclarer 4 variables ayant chacune pour valeur un chiffre différent. 
Ecrire un programme renvoyant dans la console la valeur la plus élevée. */

// var firstValue = 5;
// var secondValue = 12;
// var thirdValue = 7;
// var fourthValue = 27;
// var max = Math.max(firstValue, secondValue, thirdValue, fourthValue);

// console.log("Le nombre le plus grand est : " + max);



// EXERCICE 2

// Ecrire un programme JavaScript qui demande l'âge de l'utilisateur. Si :

// l'âge est négatif, afficher un message qui demande d'entrer un âge réel
// l'âge est supérieur ou égal à 21 ans, afficher un message autorisant l'accès
// l'âge est pair, afficher un message indiquant à l'utilisateur que son âge est pair
// l'âge est le carré d'un nombre, afficher un message indiquant à l'utilisateur que son âge 
// est un nombre carré

// var age = Number(prompt("Saisissez votre âge"));
// var sqrt = Math.sqrt(age);
// var i = sqrt - Math.floor(sqrt); --> verification si entier ou non

// if (age < 0) {
//   alert("Entrez un âge réel");
// }

// if (age >= 21) {
//   alert("Acces autorisé");
// }

// if (age % 2 == 0) {
//   alert("Votre âge est pair")
// }

// if (i == 0){
//   alert("nombre carre");
// }




// EXERCICE 3

// Stocker un nombre entier de votre choix dans une variable. 
// Ecrivez ensuite un programme qui demande à l'utilisateur de deviner ce nombre.

// Si l'utilisateur trouve le bon nombre, vous lui annoncez qu'il a gagné. 
// Sinon, vous lui dites si son nombre est plus grand ou plus petit que le nombre caché. 
// Tant que l'utilisateur n'a pas trouvé le bon nombre, vous lui reposez la question.

// var int = 14;
// while (choix != int) {
//   var choix = Number(prompt("Entrez un nombre entier jusqu'à trouver le bon !"));

//   if (choix < int){
//     alert("Trop petit");
//   }

//   else if (choix > int) {
//     alert("Trop grand");
//   }

//   else {
//     alert("bravo");
//   }
// }




// EXERCICE 4
// Ecrire un programme qui affiche dans la console les nombres de 1 à 100 en revenant à chaque fois à la ligne.

// var nb = 1;

// while (nb <= 100) {
//   console.log(nb + "\n");
//   nb ++;
// }



// EXERCICE 5
// Créer une boucle allant de 1 à 100, et n'afficher dans la console que les chiffres pairs.

// var nb = 1;

// while (nb <= 100) {
//   if(nb % 2 == 0) {
//     console.log(nb);
//   }
//   nb++;
// }



// EXERCICE 6
/* 
Ecrire une fonction en JavaScript qui indique le temps de remplissage d'une piscine en fonction 
de sa longueur, sa largeur, sa profondeur, et du débit d'eau. Les longueurs sont en mètre (m), 
le débit en mètre cube par minute (m3/min) et le résultat attendu, le temps, en minute (min).

Pour trouver le m² : l x L
Pour le volume, tu fais ton résultat x la hauteur
le débit : le résultat x 1000
le temps : le volume x le débit
le temps final (car le temps normal c'est des minutes) litre / temps (avec un arrondi)



*/

// function calculer () {
// var longueur = Number(prompt("Saisissez la longueur de la piscine"));
// var largeur = Number(prompt("Saisissez la largueur de la piscine"));
// var hauteur = Number(prompt("Enfin, saisissez la hauteur de la piscine"));
// var debit = Number(prompt("Pour finir, saisissez le débit"));
// var volume = longueur* largeur * hauteur;
// var temps = volume / debit;

// console.log("le temps de remplissage est de : " + temps + " minutes");
// }

// calculer();

// console.log("TEST");
// console.log("TEST");
// console.log("TEST");
// console.log("TEST");

// calculer();


// EXERCICE 7 

/*Ecrire 2 fonctions: l'une retournant l'aire d'un cercle, l'autre son périmètre. 
Le Rayon devra être entré manuellement à l'aide d'un "prompt()".

Les résultats des deux fonctions seront affichés dans la console.
*/

// var r = Number(prompt("Saisissez le rayon"));

// function aire (r) {
//   return r * r * 3.14;
// }

// function perimetre (r) {
//   return(2 * 3.14 * r);
// }

// console.log(aire(r));
// console.log(Math.floor(perimetre(r)));



// EXERCICE 8

// var string = "\n";
// for (i = 0; i < 4; i++){
//   for (j = 0; j <= i; j++){   
//     string += "x";
//     }
//   string += "\n";
// }
// console.log(string);



// EXERCICE 9
// for (i = 0; i <= 100; i++) {
//   if (i % 3 == 0) {
//     console.log("FIZZ");
//   } else if (i % 5 == 0) {
//     console.log("BUZZ");
//   } else {
//     console.log(i);
//   }
// }



// INTERMEDIAIRE PARTIE 2

// EXERCICE 1
// var str = "";
//  for (i = 0; i < 4; i++){ // pour notre échequier complet 
//      for (j=0; j <4; j++) {
//         if (i % 2 === 0){
//             console.log("#");
//         }
//         else {
//             console.log("_");
//         }
//         console.log()
//      }
//  }


// EXERCICE 2

// for (i = 0; i < 4; i++){
  //     for (j = 0; j < 4; j++){
  //         if (i === j){
  //           console.log("1");
  //         }
  //           else {
  //             console.log("0");
  //           }
  //     }
  //     console.log("________");
  // }

  

  //EXERCICE 3

//   Vous travaillez sur un site e-commerce et dans votre processus d achat vous avez besoin de 
//   savoir si le montant du panier utilisateur est un nombre pair ou non.

// Vous allez donc créer une fonction qui prend un nombre en argument et vérifie que celui-ci est pair. 
// Si cest le cas, elle affiche dans la console true, sinon elle affiche false.

// Si le nombre entré est un nombre à virgule, celui-ci est arrondi à lentier le plus proche !

// var montant = Number(prompt("Saisissez un nombre"));

// function pair (montant) {


//   if (montant % 2 == 0) {
//     console.log(true);
//   }
//   else {
//     console.log(false);
//   }
// }

// pair (montant);



// EXERCICE 4
/*
La factorielle d'un nombre entier est le produit de l'ensemble des nombres entiers inférieurs ou 
égaux à ce nombre.

Ainsi la factorielle de 4 vaut 1*2*3*4.

Vous allez créer une fonction qui prend un nombre entier en argument et affiche dans la console 
sa factorielle. 
Si le nombre passé dans la fonction n'est pas un entier elle affiche un message d'erreur.
*/

// var monNombre = Number(prompt("Saisissez un nombre entier"));
// var resultat = 1;
// var sqrt = Math.sqrt(monNombre);
// var integer = sqrt - Math.floor(sqrt); // --> verification si entier ou non

// function factorielle (monNombre){

//   if (integer != 0) {
//     console.log("Saissisez un nombre ENTIER");
//   }

//   for (i =1; i <= monNombre; i++){
//     resultat*= i;
//   }

//     console.log(resultat);

//   }

// factorielle(monNombre);



// EXERCICE 5

// Vous réalisez un programme de facturation pour le service des ventes de votre entreprise.
// Cependant le responsable des ventes est très pointilleux, 
// il ne veut voir apparaître aucun tiret dans les factures, uniquement des underscores.

// Vous allez donc produire une fonction qui prend une string en argument et transforme tout les
//  "-" en "_". Si autre chose qu'une string est passée à la fonction, celle-ci renvoie un message d'erreur.

//





// EXERCICE 6 
// Creéz un tableau qui contient tout les éléments de votre liste de course.

// Affichez ensuite dans la console un message disant que vous devez acheter l'
// élément en première position du tableau. Faites la même chose avec l'
// élément en dernière position du tableau et avec un élément au milieu (celui que vous voulez).

// var myArray = ['Pommes', 'Haricots', 'Tofu', 'Riz', 'Sushis'];

// console.log("Je dois acheter : " + myArray[0]);
// console.log("Je dois acheter : " + myArray[myArray.length-1]);
// console.log("Je dois acheter : " + myArray[2]);




// EXERCICE 7 
// Vous allez créer un programme avec un tableau qui contient les informations principales 
// d'un être humain, c'est à dire son nom, son prénom, son âge et sa date de naissance.

// Remplissez ce tableau avec les valeurs que vous souhaitez !

// Dans ce programme, une fonction qui prend un tableau en argument parcourera le tableau 
// que vous venez de remplir et affichera chaque élément dans la console.

// var humanSpecs = ["Noname", "Jeanne", "39", "14/02/1980"];

// function myHuman(humanSpecs) {
//   for (i = 0 ; i < humanSpecs.length ; i++) {
//     console.log(humanSpecs[i]);
//   }
// }

// myHuman(humanSpecs);

/* Pour aller plus loin :

Notre tableau précédent ne pouvait stocker les informations que d'une seule personne. 
Refaites le même exercice mais faites en sorte que notre tableau initial puisse contenir 
les informations de plusieurs personnes.

Ces informations seront elles-mêmes stockées dans d'autres tableaux (un par personne).

Vous pensiez ne jamais utiliser les tableaux multi-dimensionnels ? ;-) */


// var humanSpecs = [
// ["Arthur", "Verdier", "12/05/1990", "28 ans"],
// ["Amélie", "Grandin", "13/09/1990", "27 ans"],
// ["Elodie", "Messaoudi", "30/10/1989", "28 ans"]
// ];

// function myHuman(humanSpecs) {
//   for (var i = 0; i < humanSpecs.length; i++) { // pour entrer dans le tableau contenant les autres tableaux
//     for (var x = 0; x < humanSpecs[i].length; x++) { // pour le contenu
//        console.log(humanSpecs[i][x]);
//      }
//      console.log("*********");
//    }
//  }
//   myHuman(humanSpecs);


// EXERCICE 8

// Ecrivez une fonction qui parcourt un tableau de nombres et affiche dans la 
// console la plus grande valeur de ce tableau.

// var number = [6, 12, 42, 39, 94];

// function highestNumber (number) {
//   for (var i = 0 ; i < number.length ; i++) {
//     console.log(Math.max(...number)); // les "..." La syntaxe de décomposition permet d'étendre un itérable (par exemple une expression de tableau ou une chaîne de caractères) en lieu et place de plusieurs arguments (pour les appels de fonctions) ou de plusieurs éléments (pour les littéraux de tableaux) ou de paires clés-valeurs (pour les littéraux d'objets).
//   }
// }

// highestNumber(number);

/*
Pour aller plus loin:

Faites en sorte que votre tableau puisse contenir également des chaînes de caractères. 
La fonction affichera alors la plus longue.

Attention, il faudra d'abord vérifier que votre tableau ne contient que des chiffres ou 
que des strings, autrement la fonction affichera false. */



var number = [6, 'six', 12, 'douze', 42, 39, 94];


function highestNumber(number) {
  if (isNaN(number[0])) {
     console.log(false);
   } else {
     console.log(Math.max(... number));
   }
 }
 highestNumber(number);



 // EXERCICE 9 
 // var toDo = [];
// var choix;
// function choixFunct(choix) {
//   while(choix != "fin"){
//     var choix = prompt("Ajoutez une tâche");
//     toDo.push(choix);
//   }
//   for (var i = 0; i < toDo.length; i++){
//     console.log(toDo[i]);
//   }
// }
// choixFunct(choix);In the DOM, all HTML elements are defined as objects.

The programming interface is the properties and methods of each object.

A property is a value that you can get or set (like changing the content of an HTML element).

A method is an action you can do (like add or deleting an HTML element).