class Arme {
  constructor(idArme) {

    this.idArme = idArme;

    switch (idArme) {
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

}
