class Joueur {
  constructor(idJoueur, nomJoueur, pointDeVie, armeJoueur) {
    this.idjoueur = idJoueur;
    this.nomJoueur = nomJoueur;
    this.pointDeVie = pointDeVie;
    this.armeJoueur = armeJoueur;
  }

 

  /*Methode pour retrouver la couleur de fond d'une case*/
  rechercheCouleurFondCase(idCase){
    return $(`#${idCase}`).css("background-color");
  }

  /*méthode pour controler la position du deuxième joueur */
  recherchePositionJoueur(positionX, positionY) {
    console.log("Retourne joueur :" + positionX, positionY);
    let trouveJoueur = 0;
    let haut = `${positionX}${positionY}`;
    let bas = `${positionX}${positionY}`;
    let droite = `${positionX}${positionY}`;
    let gauche = `${positionX}${positionY}`;
    let caseXY = new Case();

    if (positionX != 1) {
      haut = `${positionX - 1}${positionY}`;
    }
    if (positionX != 10) {
      bas = `${positionX + 1}${positionY}`;
    }
    if (positionY != 1) {
      gauche = `${positionX}${positionY - 1}`;
    }

    if (positionY != 10) {
      droite = `${positionX}${positionY + 1}`;
    }

    if (caseXY.getCaseById(haut).indexOf("joueur") != -1) {
      trouveJoueur = 1;
    } else if (caseXY.getCaseById(bas).indexOf("joueur") != -1) {
      trouveJoueur = 1;
    } else if (caseXY.getCaseById(droite).indexOf("joueur") != -1) {
      trouveJoueur = 1;
    } else if (caseXY.getCaseById(gauche).indexOf("joueur") != -1) {
      trouveJoueur = 1;
    }

    return trouveJoueur;
  }

  /*methode pour afficher les cases de déplacement du joueur */
  casePossibleDeplacementJoueur(posxy, condition, ajouter, coordonnee, positionX, positionY, couleurFond, numJoueur) {
    console.log(`en paramètre :${posxy} ${condition} ${ajouter} ${coordonnee} ${positionX} ${positionY} ${couleurFond}`);
    let positionJoueur = posxy;
    let conditionControle = condition;
    let ajouterValeur = ajouter;
    let posXouY = coordonnee;
    let posDeplacement = 0;
    let posX = positionX;
    let posY = positionY;
    let joueurCaseNum = numJoueur;
    let caseXY = new Case();

    if (coordonnee == "X") {
      posDeplacement = posX;
      console.log(`en après test : ${coordonnee} ${conditionControle} ${posDeplacement}`);
    } else {
      posDeplacement = posY;
    }

    for (let index = 0; index < 3; index++) {
      if (positionJoueur != conditionControle) {
        posDeplacement = posDeplacement + ajouterValeur;
        console.log(`en après test :${positionJoueur} ${conditionControle} ${posDeplacement}`);
      }

      if (coordonnee == "X") {
        posX = posDeplacement;
        posY = posY;
      } else {
        posX = posX;
        posY = posDeplacement;
      }
      let etatCase = caseXY.getCaseById(`${posX}${posY}`);
      console.log("etat case" + etatCase + " posX = " + posX + " posY = " + posY);
      if (etatCase[0] == "v" || etatCase[0] == "a") {
        caseXY.modifierCouleurFondCase(`${posX}${posY}`, `${couleurFond}`);
        caseXY.modifieTitleCase(`${posX}${posY}`, `${joueurCaseNum}`);
        console.log(
          "change le data de la case " + `${posX}${posY}` + `${joueurCaseNum}`
        );
      } else {
        break;
      }
      positionJoueur = posDeplacement;
    }
  }

  /*methode pour afficher les cases de déplacement du joueur  haut, bas, gauche, droite */
  possibleDeplacementJoueur(positionX, positionY, nombreCaseDeplacement, personnage, couleurFond) {
    console.log("1er deplacement  joueur :" + positionX, positionY);

    let posXDeplacement = positionX;
    let posYDeplacement = positionY;
    let haut = posXDeplacement;
    let bas = posXDeplacement;
    let droite = posYDeplacement;
    let gauche = posYDeplacement;

    /*deplacement vers le haut*/
    this.casePossibleDeplacementJoueur(haut,1,-1,"X",positionX,positionY,couleurFond,personnage);

    /*deplacement vers le bas*/
    this.casePossibleDeplacementJoueur(bas,10,+1,"X",positionX,positionY,couleurFond,personnage);

    /*deplacement vers la gauche */
    this.casePossibleDeplacementJoueur(gauche,1,-1,"Y",positionX,positionY,couleurFond,personnage);

    /*deplacement vers la droite */
    this.casePossibleDeplacementJoueur(droite,10,+1,"Y",positionX,positionY,couleurFond,personnage);
  }

/* Methode pour verifier le deplacement du joueur*/
  verificationCaseDeplacementJoueur(anciennePositionJoueur,caseCliquerUtilisateurNouvellePosition, tourDuJoueurCaseCliquer) {
    console.log(`le joueur : ${tourDuJoueurCaseCliquer} ;  case cliquez : ${caseCliquerUtilisateurNouvellePosition}` )

      let changeCase = new Case;
      let nouvelleArme = null;
      let changeNouvelleArme = new Arme;
      let couleurTourDuJoueurCaseCliquer = $("."+tourDuJoueurCaseCliquer).css("background-color");
      let CouleurcaseCliquerUtilisateur = this.rechercheCouleurFondCase(caseCliquerUtilisateurNouvellePosition);

    console.log(`couleur du joueur : ${couleurTourDuJoueurCaseCliquer} ; couleur de la case claiquez : ${CouleurcaseCliquerUtilisateur}` )
    if(CouleurcaseCliquerUtilisateur == couleurTourDuJoueurCaseCliquer){

        nouvelleArme = changeCase.getCaseById(caseCliquerUtilisateurNouvellePosition);
        if(nouvelleArme[0] == "a"){
           
            
            if(this.confirmeChangementArme()){

                changeNouvelleArme.changerArme(tourDuJoueurCaseCliquer,anciennePositionJoueur,caseCliquerUtilisateurNouvellePosition,nouvelleArme[4]);

              
            };
          
        }   
       
    /*alert(`${anciennePositionJoueur}` `${caseCliquerUtilisateur}` `${tourDuJoueurCaseCliquer}`);*/
        this.changePositionJoueur(`${anciennePositionJoueur}`,`${caseCliquerUtilisateurNouvellePosition}`,`${tourDuJoueurCaseCliquer}`);

     
        let [idJoueur1X,idjoueur1Y] = changeCase.getCaseByEtat("joueur1");
        let [idJoueur2X,idjoueur2Y] = changeCase.getCaseByEtat("joueur2");     
        changeCase.couleurCaseParDefaut(`${idJoueur1X}${idjoueur1Y}`,`${idJoueur2X}${idjoueur2Y}`);
        
    } else{

        alert("Vous ne pouvez pas aller sur cette case !");
    }


  }


  /* Methode pour changer la position d'un joueur */

  changePositionJoueur(anciennePosition,nouvellePosition,joueur){

    let changeCase = new Case;

    changeCase.modifieEtatTabCases(anciennePosition,"vide");
    changeCase.modifieEtatTabCases(nouvellePosition,joueur)
    console.log(tabCases);
  }
    
/*Methode confirme changer arme*/
  confirmeChangementArme() {
                let txt;
                let changeArme = confirm("Voulez vous changer d'arme ?");
                if (changeArme == true) {
                  alert("You pressed OK!");
                  return true;
                } else {
                  alert("You pressed Cancel!");
                  return false;
                }
               
              }

}
