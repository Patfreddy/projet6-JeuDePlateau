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


/*Méthode pour modifier l'état d'une case*/
   modifieEtatTabCases(changeEtat) {
    tabCases.forEach((uneCase) => {
      if (uneCase.idCase == this.idCase) {
        uneCase.etat = changeEtat;        
      }
    });
    $(`#${this.idCase}`).attr("class", `${changeEtat}`);
  }


}
