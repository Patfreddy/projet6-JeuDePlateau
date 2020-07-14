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
    let caseFindEtat;
    tabCases.forEach((uneCase) => {
      if (uneCase.etat == etat) {
        caseFindEtat = uneCase.posX + "" + uneCase.posY;
      }
    });
    return caseFindEtat;
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
  /*afficherDeplacementJoueur(id){
     
    (#id).attr("class", `${elementClasse}${caseOccupe + 1}`);

 }*/
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

  deplacementJoueur(positionX,positionY,nombreCaseDeplacement){
   
        console.log("Retourne joueur :" + positionX, positionY);
        let trouveJoueur = 0;
        let haut = "";
        let bas = "";
        let droite = "";
        let gauche = "";
        let posXDeplacement;
        let posYDeplacement;
    
        /*deplacement vers le haut*/
        for (let index = 0; index < 3; index++) {
            if (positionX == 1) {
                posXDeplacement = `${positionX}`;
            } else {
                posXDeplacement = `${positionX-1}`;
            }
            if (this.getCaseById(`${posXDeplacement}${positionY}`)=="vide"){


            }; 
            
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






}
