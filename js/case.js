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

/*Modifier fond case couleur pour déplacement*/
   modifierCouleurFondCase(idCase, couleur) {
    $(`#${idCase}`).css("background-color", `${couleur}`);
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

 /*Méthode pour retrouver la position d'un element en fonction de son etat : joueurs ou armes*/
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

/*Méthode pour modifier l'état d'une case*/
   modifieEtatTabCases(id, changeEtat) {
    tabCases.forEach((uneCase) => {
      if (uneCase.idCase == id) {
        uneCase.etat = changeEtat;        
      }
    });
    $(`#${id}`).attr("class", `${changeEtat}`);
  }

  /*Méthode pour remettre par defaut la couleur de fond de toutes les cases*/
  couleurCaseParDefaut(caseJoueur1,caseJoueur2){
  $('td').css("background-color", "#dbcbbd");

    this.modifierCouleurFondCase(`${caseJoueur1}`,"#5C6215");
    this.modifierCouleurFondCase(`${caseJoueur2}`,"#E46102");
  }

 /*Modifier le titre d'une cellule*/
  modifieTitleCase(id,changeClass){
    $(`#${id}`).attr("data-case", changeClass);
    console.log($(`#${id}`).attr("data_case"));
  }    
}
