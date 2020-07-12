class Plateau {

  posXPosY = new Set();
 
  constructor(nombreDeLigne, nombreDeColonne,nombreCaseInaccessible,nombreArme,nombreJoueur) {
    this.id = 1;
    this.nombreDeLigne = nombreDeLigne;
    this.nombreDeColonne = nombreDeColonne;
    this.nombreCaseInaccessible = nombreCaseInaccessible;
    this.nombreArme = nombreArme;
    this.nombreDeplacementMin = 1;
    this.nombreDeplacementMax = 3;
    this.tabCases= [];

    this.dessinerPlateau();
    /*this.positionCaseInaccessible();*/
    
    this.positionElement(nombreCaseInaccessible,"inaccesible");
    this.positionElement(nombreJoueur,"joueur");
    this.positionElement(nombreArme,"arme")
    this.selectionArme();
  }

  dessinerPlateau() {
    /*var nombreDeColonnes = $('#nombre-de-colonnes').val();
    var nombreDeLignes = $('#nombre-de-lignes').val();*/
    /*alert("on lance le plateau:"+ this.nombreDeLigne+ " "+this.nombreDeColonne);*/
    for (let indexX = 0; indexX < this.nombreDeLigne; indexX++) {
      let ligne = `<tr>`;
      for (let indexY = 0; indexY < this.nombreDeColonne; indexY++) {

        let newCase = new Case(`${indexX + 1}${indexY + 1}`,indexX + 1,indexY + 1,'vide');
        ligne += newCase.addCase();
        this.tabCases.push(newCase);
      }
      ligne += `</tr>`;
      $("#dessin_du_plateau").append(ligne);
    }

    console.log(this.tabCases);
    console.log("retourne " +this.getCaseById(1010));
    
  }
  
  getCaseById(id){
    let caseFind;
    this.tabCases.forEach(uneCase => {

      if (uneCase.idCase == id){
        caseFind = uneCase.etat;
      
      }
      
    });
    return caseFind;
  }
  
  getCaseByEtat(etat){

    let caseFind;
    this.tabCases.forEach(uneCase => {

      if (uneCase.idCase == id){
        caseFind = uneCase.etat;
      
      }
      
    });
    return caseFind;
  }

  positionElement(nombreElement,elementClasse){
    console.log("Position element" +(nombreElement,elementClasse));
    let posX = 0;
    let posY = 0;
    console.log(caseTest.affiche(34));
   

    for (
      let caseOccupe = 0;
      caseOccupe < nombreElement;
      caseOccupe++
    ) { 
      do {
        posX = Math.floor(Math.random() * this.nombreDeLigne) + 1;
        posY = Math.floor(Math.random() * this.nombreDeColonne) + 1;

      } while (this.posXPosY.has(posX + "" + posY));

      this.posXPosY.add(posX + "" + posY);
      console.log(posX + "" + posY);
      if (elementClasse==="joueur" || elementClasse==="arme"){
        $("#" + posX + "" + posY).attr("class", `${elementClasse}${caseOccupe+1}`);
        console.log(elementClasse+(caseOccupe+1));
      } else {
      $("#" + posX + "" + posY).attr("class", `${elementClasse}`);

      
      console.log(elementClasse);
      }
    }
  }


  
 
  selectionArme(){
    let armeEcran = new Arme(1);
   
  }
}
