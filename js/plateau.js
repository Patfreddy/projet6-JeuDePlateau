class Plateau {
  posXPosY = new Set();

  constructor(
    nombreDeLigne,
    nombreDeColonne,
    nombreCaseInaccessible,
    nombreArme,
    nombreJoueur
  ) {
    this.id = 1;
    this.nombreDeLigne = nombreDeLigne;
    this.nombreDeColonne = nombreDeColonne;
    this.nombreCaseInaccessible = nombreCaseInaccessible;
    this.nombreArme = nombreArme;
    this.nombreDeplacementMin = 1;
    this.nombreDeplacementMax = 3;
    this.tabCases = [];

    this.dessinerPlateau();
    /*this.positionCaseInaccessible();*/

    this.positionElement(nombreCaseInaccessible, "inaccesible");
    this.positionElement(nombreJoueur, "joueur");
    this.positionElement(nombreArme, "arme");
    this.selectionArme();
  }

  /*dessin du plateau case par case d'état "vide"*/
  dessinerPlateau() {
    for (let indexX = 0; indexX < this.nombreDeLigne; indexX++) {
      let ligne = `<tr>`;
      for (let indexY = 0; indexY < this.nombreDeColonne; indexY++) {
        let newCase = new Case(
          `${indexX + 1}${indexY + 1}`,
          indexX + 1,
          indexY + 1,
          "vide"
        );
        ligne += newCase.addCase();
        this.tabCases.push(newCase);
      }
      ligne += `</tr>`;
      $("#dessin_du_plateau").append(ligne);
    }

    console.log(this.tabCases);
  }

  /*methode pour retrouver l'état d'une case par son Id*/
  getCaseById(id) {
    let caseFind;
    this.tabCases.forEach((uneCase) => {
      if (uneCase.idCase == id) {
        caseFind = uneCase.etat;
      }
    });
    return caseFind;
  }

  /*méthode pour modifier l'état d'une case*/
  modifieEtatTabCases(id, changeEtat) {
    this.tabCases.forEach((uneCase) => {
      if (uneCase.idCase == id) {
        uneCase.etat = changeEtat;
        console.log(`modifier : ${changeEtat}`);
      }
    });
  }

  /* Méthode pour retrouver la position d'un element en fonction de son etat : joueurs ou armes*/
  getCaseByEtat(etat) {
    let caseFindEtat;
    this.tabCases.forEach((uneCase) => {
      if (uneCase.etat == etat) {
        caseFindEtat = uneCase.posX + "" + uneCase.posY;
      }
    });
    return caseFindEtat;
  }

  /*méthode pour controler la position du deuxième joueur */
  recherchePositionJoueur(positionX, positionY) {
    console.log("Retourne joueur :" + positionX, positionY);
    let trouveJoueur = 0;
    let haut = "";
    let bas = "";
    let droite = "";
    let gauche = "";

    if (positionX == 1) {
      haut = `${positionX}${positionY}`;
    } else {
      haut = `${positionX - 1}${positionY}`;
    }
    if (positionX == 10) {
      bas = `${positionX}${positionY}`;
    } else {
      bas = positionX + 1 + "" + positionY;
    }
    if (positionY == 1) {
      gauche = `${positionX}${positionY}`;
    } else {
      gauche = `${positionX}${positionY - 1}`;
    }

    if (positionY == 10) {
      droite = `${positionX}${positionY}`;
    } else {
      droite = `${positionX}${positionY + 1}`;
    }

    console.log("Retourne joueur haut" + haut);
    console.log("Retourne joueur bas" + bas);
    console.log("Retourne joueur droite" + droite);
    console.log("Retourne joueur gauche " + gauche);

    if (this.getCaseById(haut).indexOf("joueur") != -1) {
      trouveJoueur = 1;
    } else if (this.getCaseById(bas).indexOf("joueur") != -1) {
      trouveJoueur = 1;
    } else if (this.getCaseById(droite).indexOf("joueur") != -1) {
      trouveJoueur = 1;
    } else if (this.getCaseById(gauche).indexOf("joueur") != -1) {
      trouveJoueur = 1;
    }

    return trouveJoueur;
  }

  /*position des éléments dans le plateau*/
  positionElement(nombreElement, elementClasse) {
    let posX = 0;
    let posY = 0;
    let caseEtat = "vide";
    let positionJoueur = 0;

    for (let caseOccupe = 0; caseOccupe < nombreElement; caseOccupe++) {
      positionJoueur = 0;
      do {
        posX = Math.floor(Math.random() * this.nombreDeLigne) + 1;
        posY = Math.floor(Math.random() * this.nombreDeColonne) + 1;
        caseEtat = this.getCaseById(`${posX}${posY}`);
        if (elementClasse === "joueur") {
          positionJoueur = this.recherchePositionJoueur(posX, posY);
          console.log("Retourne joueur position : " + positionJoueur);
        }
      } while (caseEtat != "vide" || positionJoueur == 1);

      if (elementClasse === "joueur" || elementClasse === "arme") {
        $(`#${posX}${posY}`).attr("class", `${elementClasse}${caseOccupe + 1}`);
        this.modifieEtatTabCases(
          `${posX}${posY}`,
          `${elementClasse}${caseOccupe + 1}`
        );
        console.log(elementClasse + (caseOccupe + 1));
      } else {
        $(`#${posX}${posY}`).attr("class", `${elementClasse}`);
        this.modifieEtatTabCases(`${posX}${posY}`, `${elementClasse}`);

        console.log(elementClasse);
      }
    }
    console.log(this.tabCases);
  }

  selectionArme() {
    let armeEcran = new Arme(1);
  }
}
