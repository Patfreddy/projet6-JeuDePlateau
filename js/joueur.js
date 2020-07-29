class Joueur {
  constructor(idJoueur, nomJoueur, armeJoueur,couleurFond,actif) {
    this.idjoueur = idJoueur;
    this.nomJoueur = nomJoueur;
    this.pointDeVie = 100;
    this.armeJoueur = armeJoueur;
    this.couleurFond = couleurFond;
    this.actif = actif;
  }

 

  /*Methode pour retrouver la couleur de fond d'une case*/
  rechercheCouleurFondCase(idCase){
    return $(`#${idCase}`).css("background-color");
  }

  /*méthode pour controler la position du deuxième joueur */
  recherchePositionJoueur(positionX, positionY) {
   
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
  casePossibleDeplacementJoueur(posxy, condition, ajouter, coordonnee, positionX, positionY) {
 
    let positionJoueur = posxy;
    let conditionControle = condition;
    let ajouterValeur = ajouter;
    let posXouY = coordonnee;
    let posDeplacement = 0;
    let posX = positionX;
    let posY = positionY;
    let caseXY = new Case();

    if (coordonnee == "X") {
      posDeplacement = posX;
     
    } else {
      posDeplacement = posY;
    }

    for (let index = 0; index < 3; index++) {
      if (positionJoueur != conditionControle) {
        posDeplacement = posDeplacement + ajouterValeur;
      
      }

      if (coordonnee == "X") {
        posX = posDeplacement;
        posY = posY;
      } else {
        posX = posX;
        posY = posDeplacement;
      }
      let etatCase = caseXY.getCaseById(`${posX}${posY}`);
   
      if (etatCase[0] == "v" || etatCase[0] == "a") {
        caseXY.modifierCouleurFondCase(`${posX}${posY}`, `${this.couleurFond}`);
        caseXY.modifieTitleCase(`${posX}${posY}`, `${this.nomJoueur}`);
       
      } else {
        break;
      }
      positionJoueur = posDeplacement;
    }
  }

  /*methode pour afficher les cases de déplacement du joueur  haut, bas, gauche, droite */
  possibleDeplacementJoueur(positionX, positionY, nombreCaseDeplacement) {
   

    let posXDeplacement = positionX;
    let posYDeplacement = positionY;
    let haut = posXDeplacement;
    let bas = posXDeplacement;
    let droite = posYDeplacement;
    let gauche = posYDeplacement;

    /*deplacement vers le haut*/
    this.casePossibleDeplacementJoueur(haut,1,-1,"X",positionX,positionY);

    /*deplacement vers le bas*/
    this.casePossibleDeplacementJoueur(bas,10,+1,"X",positionX,positionY);

    /*deplacement vers la gauche */
    this.casePossibleDeplacementJoueur(gauche,1,-1,"Y",positionX,positionY);

    /*deplacement vers la droite */
    this.casePossibleDeplacementJoueur(droite,10,+1,"Y",positionX,positionY);
  }

/* Methode pour verifier le deplacement du joueur*/
  verificationCaseDeplacementJoueur(anciennePositionJoueur,nouvellePositionJoueur, joueurEnCour,armeJoueur) {
   

      let changeCase = new Case();
      let nouvelleArme = null;
      let ancienneArme = joueurEnCour;
   
      let couleurJoueurEnCour = $("."+joueurEnCour).css("background-color");
     
      let CouleurcaseCliquerUtilisateur = this.rechercheCouleurFondCase(nouvellePositionJoueur);

   
    if(CouleurcaseCliquerUtilisateur === couleurJoueurEnCour){

        nouvelleArme = changeCase.getCaseById(nouvellePositionJoueur);
        if(nouvelleArme[0] === "a"){
                       
            if(this.confirmeChangementArme()){
               
               
                
                let changeNouvelleArme = new Arme(parseInt(nouvelleArme[4]));
                changeNouvelleArme.changerArme(joueurEnCour,anciennePositionJoueur,nouvellePositionJoueur,armeJoueur);
                
                
              
                              
            };
          
        }   
       
    /*alert(`${anciennePositionJoueur}` `${caseCliquerUtilisateur}` `${tourDuJoueurCaseCliquer}`);*/
        this.changePositionJoueur(`${anciennePositionJoueur}`,`${nouvellePositionJoueur}`,`${joueurEnCour}`);

    
        let [idJoueur1X,idjoueur1Y] = changeCase.getCaseByEtat("joueur1");
        let [idJoueur2X,idjoueur2Y] = changeCase.getCaseByEtat("joueur2");     
        changeCase.couleurCaseParDefaut(`${idJoueur1X}${idjoueur1Y}`,`${idJoueur2X}${idjoueur2Y}`);

       return true;
        
    } else{

        alert("Vous ne pouvez pas aller sur cette case !");
        return false;
    }


  }


  /* Methode pour changer la position d'un joueur */

  changePositionJoueur(anciennePosition,nouvellePosition,joueur){

    let changeCase = new Case;

    changeCase.modifieEtatTabCases(anciennePosition,"vide");
    changeCase.modifieEtatTabCases(nouvellePosition,joueur)
   
  }
    
/*Methode confirme changer arme*/
confirmeChangementArme() {
                let txt;
                let changeArme = confirm("Voulez vous changer d'arme ?");
                if (changeArme == true) {
                    
                    armePositionne.positionneArmeTableau()
                  return true;

                } else {
               
                  return false;
                }
               
              }

changeArmeJoueur(numeroJoueur,arme){
    numeroJoueur.arme = arme;
}

prochainJoueur(joueur1,joueur2){

    let tabJoueurs = [joueur1,joueur2];
   

    for (let nouveauJoueur of tabJoueurs) {
    
        if(nouveauJoueur.actif===true){
              tourDuJoueur = nouveauJoueur;
        } else {
              prochainJoueur = nouveauJoueur;
        
        }  
      } 
  
   
    let [posX, posY] = caseJoueur.getCaseByEtat(tourDuJoueur.nomJoueur);
    tourDuJoueur.possibleDeplacementJoueur(posX, posY, 3);
   
      
     

}

jouer(joueur1,joueur2,caseCliquer){

    let tabJoueurs = [joueur1,joueur2];
   

    for (let nouveauJoueur of tabJoueurs) {
    
        if(nouveauJoueur.actif===true){
              tourDuJoueur = nouveauJoueur;
        } else {
              prochainJoueur = nouveauJoueur;
        
        }  
      } 
let [posX, posY] = caseJoueur.getCaseByEtat(tourDuJoueur.nomJoueur);
// Gestionnaire d'évènement unique pour l'ensemble des <td>
/*let caseCliquer = evenement.target;    */      

let returnDeplacement = tourDuJoueur.verificationCaseDeplacementJoueur(
`${posX}${posY}`,
caseCliquer.id,
tourDuJoueur.nomJoueur,
tourDuJoueur.armeJoueur
);

if (returnDeplacement === true){         

prochainJoueur.actif = true;
tourDuJoueur.actif = false;    


this.prochainJoueur(prochainJoueur,tourDuJoueur);
 
} 
};


  
      
 




}
