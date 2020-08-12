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


}
