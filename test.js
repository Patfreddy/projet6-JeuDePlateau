
// On crée les variables pour le canvas
var canvas = document.getElementById('plateau'),
    context = canvas.getContext('2d');

// On définit des variables
var largeurMax = canvas.width, // Largeur max = largeur du canvas
    hauteurMax = canvas.height, // Hauteur max = hauteur du canvas
    tailleCase = 60, // Taille d'une case du plateau
    nombreCasesLargeur = largeurMax / tailleCase, // Le nombre de cases sur la largeur est égale à la largeur du canvas divisée par taille d'une case
    nombreCasesHauteur = hauteurMax / tailleCase, // Le nombre de cases sur la hauteur est égale à la largeur du canvas divisée par taille d'une case
    nombreCases = nombreCasesLargeur * nombreCasesHauteur, // Le nombre de cases total est égal aux nombres de cases sur la largeur multipliés par le nombre de cases sur la hauteur
    listeCases = []; // Contient un tableau avec la liste des cases

// On créé une fonction pour crée chaque case du plateau
function creerPlateau() {
  context.fillStyle = "white"; // Le canvas a un fond blanc
  context.fillRect(0, 0, largeurMax, hauteurMax); // On utilise la totalité du canvas pour créer nos cases

  var colonne = 0,
      ligne = 0; // On utilise ces variables pour changer les colonnes et lignes des différentes cases crées, on commence à 0 x 0 pour la première case

  // Pour chaque case du plateau :
  for (var i = 0; i < nombreCases; i++) {
    // On crée un carré de bordure noire de taille 60 x 60
    context.strokeStyle = 'grey';
    context.strokeRect(tailleCase * colonne, tailleCase * ligne, tailleCase, tailleCase);

    // On ajoute un objet à chaque case avec un id et les positions
    listeCases[i] = {
      numerocase: i,
      id: "casevide",
      positionX: tailleCase * colonne + 1,
      positionY: tailleCase * ligne + 1
    };

    // Après avoir créé la case, on passe à la colonne suivante
    colonne++;

    // Si on arrive à 10 cases, on passe à la ligne suivante
    if (colonne === nombreCasesLargeur) {
      colonne = 0;
      ligne++;
    }
  }
}

creerPlateau();

var nombreobstacles = 10, // On veut 10 obstacles sur le plateau
    listearmes = [];

// Création de la fonction qui retourne un nombre aléatoire entre 0 et 99
function randomnumber() {
  return Math.floor(Math.random() * (nombreCases - 1));
}

for (var i = 0; i < nombreobstacles; i++) {
  var numerocasealeatoire = randomnumber();
  if (listeCases[numerocasealeatoire].id !== "casevide") {
    i--;
  } else {
    listeCases[numerocasealeatoire].id = "obstacle";
  }
}

// Il y a 99 cases, on vérifie l'id de chacune et si c'est un obstacle, on colore la case en gris
for (var i = 0; i < nombreCases; i++) {
  (function(i) {
    if (listeCases[i].id === "obstacle") {
      console.log(listeCases[i].positionX + "/" + listeCases[i].positionY);
      var canvas = new Image();
      canvas.src = "http://zupimages.net/up/15/31/m3d1.png";
      canvas.addEventListener('load', function() {
        context.drawImage(canvas, listeCases[i].positionX, listeCases[i].positionY);
      }, false);
    }
  })(i);
}