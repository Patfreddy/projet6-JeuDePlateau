class Case {
  constructor(idCase, posX, posY, etat = "vide") {
    this.idCase = idCase;
    this.posX = posX;
    this.posY = posY;
    this.etat = etat;
  }
/*Ajoute une ligne au plateau avec des cases vides*/
  addCase(idCase, posX, posY, etat, idArme, idJoueur) {
    return `<td id=${this.posX}${this.posY} class=${this.etat}>${this.posX}${this.posY}</td>`;
  }
/*Affiche l'état d'une case*/
  affiche(idCase) {
    console.log(this.etat);
  }

/*Methode pour retrouver l'état d'une case par son Id*/
getCaseById(idCase) {
  let caseFind = null;
  tabCases.forEach((uneCase) => {
    if (uneCase.idCase == idCase) {
      caseFind = uneCase.etat;
    }
  });
  return caseFind;
}

 

/*Méthode pour modifier l'état d'une case*/
   modifieEtatTabCases(id, changeEtat) {
    tabCases.forEach((uneCase) => {
      if (uneCase.idCase == id) {
        uneCase.etat = changeEtat;        
      }
    });
    $(`#${id}`).attr("class", `${changeEtat}`);
  }
  
/*Modifier fond case couleur pour déplacement*/
modifierCouleurFondCase(idCase, couleur) {
  $(`#${idCase}`).css("background-color", `${couleur}`);
}

 /*Modifier le titre d'une cellule*/
  modifieTitleCase(id,changeClass){
    $(`#${id}`).attr("data-case", changeClass);
   
  }    
}
