var scoreJoueur = 0;
var scoreIA = 0;

var scoreTotalJoueur = 0;
var scoreTotalIA = 0;

var positionJoueur = 0;
var positionIa = 0;

document.getElementById("deleteWelcome").onclick = function () {
    deleteWelcome()
};

document.getElementById("enterName").onclick = function () {
    chooseName()
    name()
};

document.getElementById("rock").onclick = function () {
    jouer("pierre")
};

document.getElementById("paper").onclick = function() {
    jouer("feuille")
};

document.getElementById("scissors").onclick = function() {
    jouer("ciseaux")
};

document.getElementById("restart").onclick = function() {
    
}

// card1.onClick(jouer('feuille'))

// func jouer(choix)
//  choixIa = calculerChoixIA
//  if joueurGagne(choix, choixIA) 
//      scoreJoeur ++
//      jouerAnimationJoueurGagne()
//  else:
//      scoreIA ++
//      jouerAnimationIAGagne()
//  if scoreJoueur == 3 || scoreIA == 3
//      afficherPartieFinis()


function deleteWelcome() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("name").style.display = "flex";
    document.getElementById("form").style.display = "flex";
    }

function playingPage() {
    document.getElementById("gamepage").style.display = "flex";
    document.getElementById("form").style.display = "none";
    document.getElementById("playerpart").style.display = "inline-block";
    document.getElementById("iapart").style.display = "inline-block";
    document.getElementById("darkchoco").style.display = "inline-block";
    document.getElementById("GingerBright").style.display = "inline-block";
    document.getElementById("treasure").style.display = "inline-block";
    document.getElementById("playingcards").style.display = "inline-block"
    document.getElementById("pictures").style.display = "inline";
    document.getElementById("picture").style.display = "inline";
}

document.getElementById("enterName").onclick = function() {
    var nomJoueur = document.getElementById("inputName").value;

    if (nomJoueur !== '') {
        document.getElementById("inputNameError").style.display = "none";
        document.getElementById("playername").innerHTML = nomJoueur;
        playingPage()
    }
    else {
        document.getElementById("inputNameError").style.display = "block";
    }
    
}

// fonction qui verifie une fois cliqué sur le bouton enterName que si le inputName.innerHTML est vide alors msg d'erreur dans un p.

function name(){
  var x = document.getElementById("inputName").value;
  document.getElementById("playername").innerHTML = x;
} 

function winaction(iaChoice, userChoice) {
    if ((userChoice == "pierre") && (iaChoice == "feuille")) {
        return false;
    } else if ((userChoice == "pierre") && (iaChoice == "ciseaux")) {
        return true;
    } else if ((userChoice == "feuille") && (iaChoice == "ciseaux")) {
        return false;
    } else if ((userChoice == "feuille") && (iaChoice == "pierre")) {
        return true;
    } else if ((userChoice == "ciseaux") && (iaChoice == "pierre")) {
        return false;
    } else if ((userChoice == "ciseaux") && (iaChoice == "feuille")) {
        return true;
    }
} // indique si le choix du joueur le fait gagner ou non, est appelée dans la fonction jouer.

function generateRandomChoice(possibleChoices) {
    return possibleChoices[Math.floor(Math.random() * Math.floor(possibleChoices.length))];
}

function afficherEgalite(toto){
    // anim aficher l'egalité(les deux tombent)
  
}

function afficherJoueurGagne(iaChoice, userChoice){

    var valeurProgress = 100 - (scoreJoueur * (100 / 3))
    document.getElementById("progressbaria").style.width=valeurProgress + '%';

    positionJoueur += 325;

    document.getElementById("GingerBright").style.left = positionJoueur + "px";
}
 
function afficherIaGagne(iaChoice, userChoice){
    
    // animation Ia gagne(avance) barre de vie adversaire baisse 
    // et un MSG s'affiche durant quelques secondes.

    var valeurProgress = 100 - (scoreIA * (100 / 3))
    document.getElementById("progressbarplayer").style.width=valeurProgress + '%';

    positionIa += 325;

    document.getElementById("darkchoco").style.left = positionIa + "px";
}

function afficherPartieFinie(){
    document.getElementById("gamepage").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("playerpart").style.display = "none";
    document.getElementById("iapart").style.display = "none";
    document.getElementById("darkchoco").style.display = "none";
    document.getElementById("GingerBright").style.display = "none";
    document.getElementById("treasure").style.display = "none";
    document.getElementById("playingcards").style.display = "none"
    document.getElementById("pictures").style.display = "none";
    document.getElementById("picture").style.display = "none";
    document.getElementById("restart").style.display = "inline-block";

    if (scoreJoueur == 3) {
        document.getElementById("won").style.display = "inline-block";
    }
    else {
        document.getElementById("lost").style.display = "inline-block";
    }

}

function jouer(choix) {
    var iaChoice = generateRandomChoice(["pierre", "ciseaux", "feuille"]);

    console.log('== Jouer ==');
    console.log("choix joueur :  " + choix);
    console.log("choix IA : " + iaChoice);

    if (choix == iaChoice){
        afficherEgalite(choix);
        console.log('Egalité');
    }

    else {
        if (winaction(iaChoice, choix) == true){
            scoreJoueur++;
            afficherJoueurGagne(iaChoice, choix);
            console.log('Le joueur gagne');
        }
        else {
            scoreIA++;
            afficherIaGagne(iaChoice, choix);
            console.log("L'IA gagne");
        }
    }
    if (scoreJoueur === 3 || scoreIA === 3) {
        if (scoreJoueur === 3) {
          scoreTotalJoueur++;
        }
        else {
          scoreTotalIA++;
        }
        afficherPartieFinie();
      }
} // lance un tour

// fonction restart