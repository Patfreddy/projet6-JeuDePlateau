class Case {
    constructor(idCase,posX,posY,etat='vide') {
        this.idCase = idCase;
        this.posX = posX;
        this.posY = posY;
        this.etat = etat;
    }


    addCase(idCase,posX,posY,etat,idArme,idJoueur){

      return `<td id=${this.posX}${this.posY} class=${this.etat}>${this.posX}${this.posY}</td>`
    }
    affiche(idCase){

        console.log(this.etat);
    }

}
