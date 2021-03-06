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
    /*this.tabCases = [];*/

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
        tabCases.push(newCase);
      }
      ligne += `</tr>`;
      $("#dessin_du_plateau").append(ligne);
    }

    console.log(tabCases);
  }

  

 
  
  /*position des éléments dans le plateau*/
  positionElement(nombreElement, elementClasse) {
    let posX = 0;
    let posY = 0;
    let caseEtat = "vide";
    let rechercheCaseEtat = new Case;
    let positionJoueur = 0;

    for (let caseOccupe = 0; caseOccupe < nombreElement; caseOccupe++) {
      positionJoueur = 0;
      do {
        posX = Math.floor(Math.random() * this.nombreDeLigne) + 1;
        posY = Math.floor(Math.random() * this.nombreDeColonne) + 1;
     
        caseEtat = rechercheCaseEtat.getCaseById(`${posX}${posY}`);
    
        if (elementClasse === "joueur") {
          positionJoueur = rechercheCaseEtat.recherchePositionJoueur(posX, posY);
        
          console.log("Retourne joueur position : " + positionJoueur);
        }
      } while (caseEtat != "vide" || positionJoueur == 1);

      if (elementClasse === "joueur" || elementClasse === "arme") {
        $(`#${posX}${posY}`).attr("class", `${elementClasse}${caseOccupe + 1}`);
        rechercheCaseEtat.modifieEtatTabCases(
          `${posX}${posY}`,
          `${elementClasse}${caseOccupe + 1}`
        );
        console.log(elementClasse + (caseOccupe + 1));
      } else {
        $(`#${posX}${posY}`).attr("class", `${elementClasse}`);
        rechercheCaseEtat.modifieEtatTabCases(`${posX}${posY}`, `${elementClasse}`);

        console.log(elementClasse);
      }
    }
    console.log(tabCases);
    

  }

  

  selectionArme() {
    let armeEcran = new Arme(1);
  }
}
