class Arme {
  constructor(idArme,nom,degat,chemin,caseArme) {

    this.idArme = idArme;
    this.nom = nom;
    this.degat = degat;
    this.chemin =chemin;
    this.case = caseArme;
    
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
