class Arme {
  constructor(idArme) {

    this.idArme = idArme;

    switch (idArme) {
      case 5:
        this.nom = "Vert";
        this.degat = "10 points";

        break;

      case 1:
        this.nom = "Rose";
        this.degat = "15 points";

        break;

      case 2:
        this.nom = "Bleue";
        this.degat = "20 points";

        break;

      case 3:
        this.nom = "Jaune";
        this.degat = "25 points";

        break;

      case 4:
          this.nom = "Rouge";
          this.degat = "30 points";
  
          break;
  
    }

  }

  afficherArmeCombat(){

    return `image/${this.nom}.png`;
  }
  selection(){
    return `${this.nom}`;
  }




  changerArme(joueur,anciennePositionJoueur,nouvellePosition,nouvelleArme){

    let deposeArme = $(`nom-arme-${joueur}`);
    let deposeArmeCase = new Case;
    let afficheNouvelleArme = new Arme(nouvelleArme);
    console.log(afficheNouvelleArme.nom);

    deposeArmeCase.modifieEtatTabCases(nouvellePosition,deposeArme);
   
    $(`.nom-arme-${joueur}`).text(`${afficheNouvelleArme.nom} - ${afficheNouvelleArme.degat}`);
    this.afficherArmeCombat();
    console.log(`Joueur : ${joueur} nouvelle position : ${nouvellePosition} ancienne position : ${anciennePositionJoueur} nouvelle arme ${nouvelleArme}`)
   
  }

}
