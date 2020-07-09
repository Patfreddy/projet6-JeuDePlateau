class Case {
    constructor(idCase,posX,posY,etat,idArme,idJoueur) {
        this.idCase = idCase;
        this.posX = posX;
        this.posY = posY;
        this.etat = etat;
        this.idArme = idArme;
        this.idJoueur = idJoueur;
    }

    newCase(idCase,posX,posY,etat,idArme,idJoueur){

        let caseAffiche = new Case(idCase,posX,posY,etat,idArme,idJoueur);
        caseAffiche.affiche(idCase);
    }
    affiche(idCase){

        console.log(this.etat);
    }

}
