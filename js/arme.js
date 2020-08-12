class Arme {
  constructor(idArme,nom,degat,imageArme,dCase) {

    this.idArme = idArme;
    this.nom = nom;
    this.degat = degat;
    this.imageArme =imageArme;
    this.dCase = dCase;

  }

 
 getArme(nomArme){
  let changeArmeJoueur = null;
  tabArme.forEach((uneArme) => {
    if (uneArme.nom == nomArme) {
      changeArmeJoueur = uneArme;
    }
  });
  return changeArmeJoueur;
};


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
  
    let getCase=getCaseById(tabArme[i]);
    
    if(getCase!= null){
  
    if(getCase[0]!="j"){
   
    caseArme.modifieEtatTabCases(tabArme[i],"arme"+i);
  
    }
    }

  }
}


}
