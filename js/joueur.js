class Joueur {
  constructor(
    idJoueur,
    nom,
    prenom,
    armeJoueur,
    couleurFond,
    imageJoueur,
    actif,
    dCase,
    deposeArme="vide"
  ) {
    this.idjoueur = idJoueur;
    this.nom = nom;
    this.prenom = prenom;
    this.pointDeVie = 100;
    this.armeJoueur = armeJoueur;
    this.couleurFond = couleurFond;
    this.imageJoueur = imageJoueur;
    this.actif = actif;
    this.dCase = dCase;
  }

  
  /*Méthode pour remettre par defaut la couleur de fond de toutes les cases*/
  couleurCaseParDefaut() {
    $("td").css("background-color", "#dbcbbd");
    $(`#${joueur1.dCase.idCase}`).css(
      "background-color",
      `${joueur1.couleurFond}`
    );
    $(`#${joueur2.dCase.idCase}`).css(
      "background-color",
      `${joueur2.couleurFond}`
    );

  }

/*MOUVEMENT POSSIBLE DU JOUEUR*/
  /*methode pour afficher les cases de déplacement du joueur  haut, bas, gauche, droite */
  mouvementJoueur(nombreCaseDeplacement) {
    /*deplacement vers le haut*/
    this.casePossible(
      this.dCase.posX,
      1,
      -1,
      "X",
      this.dCase.posX,
      this.dCase.posY
    );

    /*deplacement vers le bas*/
    this.casePossible(
      this.dCase.posX,
      10,
      +1,
      "X",
      this.dCase.posX,
      this.dCase.posY
    );

    /*deplacement vers la gauche */
    this.casePossible(
      this.dCase.posY,
      1,
      -1,
      "Y",
      this.dCase.posX,
      this.dCase.posY
    );

    /*deplacement vers la droite */
    this.casePossible(
      this.dCase.posY,
      10,
      +1,
      "Y",
      this.dCase.posX,
      this.dCase.posY
    );
  }

 /*methode pour afficher les cases de déplacement du joueur */
 casePossible(positionJoueur, conditionControle, ajouterValeur, coordonnee) {
  let posDeplacement = 0;
  let posX = 0;
  let posY = 0;
  let etatCase = "";

  if (coordonnee == "X") {
    posDeplacement = this.dCase.posX;
  } else {
    posDeplacement = this.dCase.posY;
  }

  for (let index = 0; index < 3; index++) {
    //on teste le bout de la ligne
    if (positionJoueur != conditionControle) {
      posDeplacement += ajouterValeur;
    }

    if (coordonnee == "X") {
      posX = posDeplacement;
      posY = this.dCase.posY;
    } else {
      posX = this.dCase.posX;
      posY = posDeplacement;
    }

    etatCase = getCaseById(`${posX}${posY}`);
   
    if (etatCase.etat[0] === "v" || etatCase.etat[0] === "a"){
     
      $(`#${etatCase.idCase}`).css("background-color", `${this.couleurFond}`);
     
    } else {
      break;
    }
    positionJoueur = posDeplacement;
  }
}

/*DEPLACEMENT DU JOUEUR*/
 /* Methode pour verifier le deplacement du joueur*/
 jouer(caseCliquer) {
  
  let nouvelleCase = getCaseById(caseCliquer.id);
  let nouvelleArme = null;
  let couleurJoueurEnCour = $(`.${this.nom}`).css("background-color");
  let CouleurcaseCliquerUtilisateur = $(`#${nouvelleCase.idCase}`).css("background-color");


 if (CouleurcaseCliquerUtilisateur === couleurJoueurEnCour) {
  this.deposeArme="vide";
    if (nouvelleCase.etat[0] === "a") {
      
      if (confirm("Voulez vous changer d'arme ?") === true) {
        this.deposeArme = this.armeJoueur.nom;
        console.log(nouvelleCase);
        //depose arme verte et lui donne id de la case
        this.armeJoueur.dCase = nouvelleCase;

       
        // la nouvelle arme a son id null car recupérer par joueur
        nouvelleArme = this.armeJoueur.getArme(nouvelleCase.etat);
        nouvelleArme.dCase = new Case();
        console.log(nouvelleArme);

        // le joueur récupère l'arme
        this.armeJoueur = nouvelleArme;
       
        console.log(tabJoueur);
        console.log(tabArme);
        
        $(".personnage").remove();
        plateau.creationJoueurPlateau();

       
      }
    }

    /*on enregistre la nouvelle position du joueur*/
    this.changePositionJoueur(caseCliquer.id);
    /*on remet les couleus par defaut*/
    this.couleurCaseParDefaut();

    return true;
  } else {
    alert("Vous ne pouvez pas aller sur cette case !");
    return false;
  }
}

  /*méthode pour controler la position du deuxième joueur */
  recherchePositionJoueur(posX, posY) {
    let trouveJoueur = 0;
    let haut = `${posX}${posY}`;
    let bas = `${posX}${posY}`;
    let gauche = `${posX}${posY}`;
    let droite = `${posX}${posY}`;

    if (posX != 1) {
      haut = `${posX - 1}${posY}`;
    }
    if (posX != 10) {
      bas = `${posX + 1}${posY}`;
    }
    if (posY != 1) {
      gauche = `${posX}${posY - 1}`;
    }

    if (posY != 10) {
      droite = `${posX}${posY + 1}`;
    }

    if (getCaseById(haut).etat[0] === "j") {
      trouveJoueur = 1;
    } else if (getCaseById(bas).etat[0] === "j") {
      trouveJoueur = 1;
    } else if (getCaseById(droite).etat[0] === "j") {
      trouveJoueur = 1;
    } else if (getCaseById(gauche).etat[0] === "j") {
      trouveJoueur = 1;
    }
    /*  $.confirm({
    title: 'Confirm!',
    content: 'Simple confirm!',
    buttons: {
        confirm: function () {
            $.alert('Confirmed!');
        },
        cancel: function () {
            $.alert('Canceled!');
        },
        somethingElse: {
            text: 'Something else',
            btnClass: 'btn-blue',
            keys: ['enter', 'shift'],
            action: function(){
                $.alert('Something else?');
            }
        }
    }
}); */
    return trouveJoueur;
  }

 

 

  /* Methode pour changer la position d'un joueur */

  changePositionJoueur(nouvellePosition) {
    console.log(this.deposeArme);
    this.dCase.modifieEtatTabCases(this.deposeArme);
    
    this.dCase = getCaseById(nouvellePosition);
    this.dCase.modifieEtatTabCases(this.nom);
    
    if (this.recherchePositionJoueur(this.dCase.posX, this.dCase.posY) === 1) {
      confirm("Souhaitez vous combatre ou vous défendre ?");
    }
  }
  /*Methode confirme changer arme*/
  /*  confirmeChangementArme() {
    let nomArme = joueur.armeJoueur;
    let degatArme = joueur.arme.degat;

    let txt;
    let changeArme = confirm("Voulez vous changer d'arme ?");
    if (changeArme == true) {
      armePositionne.positionneArmeTableau();
      return true;
    } else {
      return false;
    }
  } */

  changeArmeJoueur(numeroJoueur, arme) {
    numeroJoueur.arme = arme;
  }
}
