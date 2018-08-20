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
    name()
    playingPage()
}

// fonction qui verifie une fois cliqué sur le bouton enterName que si le inputName.innerHTML est vide alors msg d'erreur dans un p.

function name(){
  var x = document.getElementById("inputName").value;
 
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
    document.getElementById("progressbarplayer").style.width="66%";
    positionJoueur += 320;
    document.getElementById("GingerBright").style.left = positionJoueur + "px";
}

function afficherIaGagne(iaChoice, userChoice){
    // animation Ia gagne(avance) barre de vie adversaire baisse
    positionIa += 320;
    document.getElementById("darkchoco").style.left = positionIa + "px";
}

function afficherPartieFinie(){
    // animation partie finie (coupe)
    console.log("partie finie");
}

function jouer(choix) {
    var iaChoice = generateRandomChoice(["pierre", "ciseaux", "feuille"]);
console.log("userchoice " + choix);
console.log("iachoice" + iaChoice);
    if (choix == iaChoice){
        afficherEgalite(choix);
    }

    else {
        if (winaction(iaChoice, choix) == true){
            scoreJoueur++;
            afficherJoueurGagne(iaChoice, choix);
        }
        else {
            scoreIA++;
            afficherIaGagne(iaChoice, choix);
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