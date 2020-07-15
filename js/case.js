class Case {
  constructor(idCase, posX, posY, etat = "vide") {
    this.idCase = idCase;
    this.posX = posX;
    this.posY = posY;
    this.etat = etat;
  }

  addCase(idCase, posX, posY, etat, idArme, idJoueur) {
    return `<td id=${this.posX}${this.posY} class=${this.etat}>${this.posX}${this.posY}</td>`;
  }

  affiche(idCase) {
    console.log(this.etat);
  }

  /*methode pour retrouver l'état d'une case par son Id*/
  getCaseById(idCase) {
    let caseFind;
    tabCases.forEach((uneCase) => {
      if (uneCase.idCase == idCase) {
        caseFind = uneCase.etat;
      }
    });
    return caseFind;
  }

 /* Méthode pour retrouver la position d'un element en fonction de son etat : joueurs ou armes*/
 getCaseByEtat(etat) {
    let caseFindEtatPosX;
    let caseFindEtatPosY;
    tabCases.forEach((uneCase) => {
      if (uneCase.etat == etat) {
        caseFindEtatPosX = uneCase.posX;
        caseFindEtatPosY = uneCase.posY;
      }
    });
    return [caseFindEtatPosX,caseFindEtatPosY];
  }

   /*méthode pour modifier l'état d'une case*/
   modifieEtatTabCases(id, changeEtat) {
    tabCases.forEach((uneCase) => {
      if (uneCase.idCase == id) {
        uneCase.etat = changeEtat;
        console.log(`modifier : ${changeEtat}`);
      }
    });
  }
 /*Case couleur pour déplacement*/
  afficherDeplacementJoueur(idCase,couleur){
    console.log("deplacement  joueur :" + idCase);      
     $(`#${idCase}`).css('background-color',`${couleur}`);
   
 }

  /*méthode pour controler la position du deuxième joueur */
  recherchePositionJoueur(positionX, positionY) {
    console.log("Retourne joueur :" + positionX, positionY);
    let trouveJoueur = 0;
    let haut = `${positionX}${positionY}`;
    let bas = `${positionX}${positionY}`;
    let droite = `${positionX}${positionY}`;
    let gauche = `${positionX}${positionY}`;

    if (positionX != 1) {
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

  deplacementJoueur(positionX,positionY,nombreCaseDeplacement,personnage,couleurFond){
   
        console.log("1er deplacement  joueur :" + positionX, positionY);
       
        let posXDeplacement = positionX;
        let posYDeplacement= positionY;
        let haut = posXDeplacement;
        let bas = 0;
        let droite = 0;
        let gauche = 0;
    
        /*deplacement vers le haut*/
        for (let index = 0; index < 3; index++) {
            if (haut == 1) {
                posXDeplacement = posXDeplacement;
            } else {
                posXDeplacement = posXDeplacement-1;
            }
            console.log("afficher deplacement  joueur :" + index, posXDeplacement, positionY);
            if (this.getCaseById(`${posXDeplacement}${positionY}`)=="vide"){
                console.log("Couleur de fond :" + `${couleurFond}`);
                this.afficherDeplacementJoueur(`${posXDeplacement}${positionY}`,`${couleurFond}`);
            } else {
                break;
            }
            haut =  posXDeplacement
        }; 
        
        /*deplacement vers le bas*/

        for (let index = 0; index < 3; index++) {
            if (haut == 1) {
                posXDeplacement = posXDeplacement;
            } else {
                posXDeplacement = posXDeplacement-1;
            }
            console.log("afficher deplacement  joueur :" + index, posXDeplacement, positionY);
            if (this.getCaseById(`${posXDeplacement}${positionY}`)=="vide"){
                console.log("Couleur de fond :" + `${couleurFond}`);
                this.afficherDeplacementJoueur(`${posXDeplacement}${positionY}`,`${couleurFond}`);
            } else {
                break;
            }
            haut =  posXDeplacement
        }; 


    }
    
}
