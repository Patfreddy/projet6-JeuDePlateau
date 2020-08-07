class Plateau {
  constructor(nombreDeLigne, nombreDeColonne, nombreCaseInaccessible, nombreArme, nombreJoueur) {
    this.id = 1;
    this.nombreDeLigne = nombreDeLigne;
    this.nombreDeColonne = nombreDeColonne;
    this.nombreCaseInaccessible = nombreCaseInaccessible;
    this.nombreArme = nombreArme;
    this.nombreDeplacementMin = 1;
    this.nombreDeplacementMax = 3;
    this.dessinerPlateau();
    this.creationJoueurPlateau();
    this.creationArmePlateau(tabArme);
    let tabArmePlateau = tabArme;
    tabArmePlateau.shift();    
    this.positionObjet(tabArmePlateau);
    this.positionObjet(tabJoueur);
    this.positionObjet(tabInaccessible);
    this.selectionArme();
    
  }

  /*Dessin du plateau case par case d'état "vide"*/
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
  
  }
  creationJoueurPlateau(){
    tabJoueur.forEach(joueur => {
      $('.joueurs').append(`     
      <div id="joueur" class="personnage" style="background-color:${joueur.couleurFond}">
          <h1 class="nomJoueur">${joueur.prenom}</h1>
          <img src="image/${joueur.imageJoueur.chemin}" class="imageJoueur">
          <img src="image/${joueur.armeJoueur.imageArme.chemin}" class="imageArme-joueur">
          <p class="nom-arme-joueur">${joueur.armeJoueur.nom} - Dégâts : ${joueur.armeJoueur.degat}points</p>
          <h4 class="point-de-vie-joueur">Points de vie : ${joueur.pointDeVie}"</h4>
          <br>

      </div>
      `)
      
    });

  }

  creationArmePlateau(){
    tabArme.forEach(arme => {
  $('#valeur_armes').append(`
  <div>
     <img src="image/${arme.imageArme.chemin}" class="imageArme">
     <p class="nom_arme">${arme.nom}</p>
     <h4>Dégâts  : ${arme.degat} points</h4>
  </div>
          
   `)
});
  }


  positionObjet(tableau){
    let posX = 0;
    let posY = 0;
    let newCasePosition = new Case();
    let caseEtat = "vide";
    let positionJoueur = 0;
    console.log(tabCases);
    console.log(tableau);
    tableau.forEach(element => {

      do {
        posX = Math.floor(Math.random() * this.nombreDeLigne) + 1;
        posY = Math.floor(Math.random() * this.nombreDeColonne) + 1;

        caseEtat = newCasePosition.getCaseById(`${posX}${posY}`);     
        if (element.nom === "joueur") {
          positionJoueur = element.recherchePositionJoueur(
            posX,
            posY
          );
        }
        
      } while (caseEtat != "vide"|| positionJoueur == 1);
      
    
      newCasePosition.modifieEtatTabCases(
          `${posX}${posY}`,element.nom          
        );
      
    });


  }

  CaseById(idCase) {
    let caseFind = null;
    tabCases.forEach((uneCase) => {
      if (uneCase.idCase == idCase) {
        caseFind = uneCase.etat;
      }
    });
    return caseFind;
  }

 
  

  selectionArme() {
    let armeEcran = new Arme(1);
  }

}
