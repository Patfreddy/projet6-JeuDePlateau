class Arme {
  constructor(idArme) {

    this.idArme = idArme;

    switch (idArme) {
   
      case 1:
        this.nom = "Rose";
        this.degat = "Dégâts : 15 points";
        this.chemin = "image/arme1.png";
        this.case = null;
        break;

      case 2:
        this.nom = "Bleue";
        this.degat = "Dégâts : 20 points";
        this.chemin = "image/arme2.png";
        this.case = null;

        break;

      case 3:
        this.nom = "Jaune";
        this.degat = "Dégâts : 25 points";
        this.chemin = "image/arme3.png";
        this.case = null;
        break;

      case 4:
          this.nom = "Rouge";
          this.degat = "Dégâts : 30 points";
          this.chemin = "image/arme4.png";
          this.case = null;
          break;

      case 5:
          this.nom = "Vert";
          this.degat = "Dégâts : 10 points";
          this.chemin = "image/arme5.png";
          this.case = null;  
    
          break;
    
  
    }

  }

 


  changerArme(joueur,anciennePosition,nouvellePosition,ancienneArme){

    let deposeArme = $(`nom-arme-${joueur}`);
    let deposeArmeCase = new Case();
 
    
 
    tabArme[this.idArme]="0";
    tabArme[ancienneArme[4]] = nouvellePosition;
    tabJoueursArme[joueur[7]]=`${this.nom}`;
    deposeArmeCase.modifieEtatTabCases();
   

   $(`.imageArme-${joueur}`).attr('src',`${this.chemin}`);
   $(`.nom-arme-${joueur}`).html(`${this.nom} - ${this.degat}`);
  
  
  
   
  }
positionneArmeTableau(){
  for(let i=0;i<5;i++){
  
    let getCase=caseArme.getCaseById(tabArme[i]);
    
    if(getCase!= null){
  
    if(getCase[0]!="j"){
   
    caseArme.modifieEtatTabCases(tabArme[i],"arme"+i);
  
    }
    }

  }
}


}
