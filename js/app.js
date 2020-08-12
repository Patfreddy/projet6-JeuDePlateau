$(document).ready(function () {
  /*let joueur=[],*/
  let nbrLigne = 10;
  let nbrColonne = 10;
  let nbrCaseIinaccessible = 10;
  let imageJoueur = new Image(1, "joueur.png");
  let imageArmeVert = new Image(2, "arme0.png");
  let imageArmeRose = new Image(3, "arme1.png");
  let imageArmeBleu = new Image(4, "arme2.png");
  let imageArmeJaune = new Image(5, "arme3.png");
  let imageArmeRouge = new Image(6, "arme4.png");
  let imageInaccessible = new Image(7, "rocher.png");
  let caseJoueur = new Case();
  let caseArme = new Case();
  let caseInaccessible = new Case(0, 0, 0, "inaccessible");
  /* let caseInaccessible = {
    nom: "inaccessible",
    dCase :null
  }; */
  let caseRocher = new Object();
  let armeVert = new Arme(0, "armeVert", 5, imageArmeVert, null);
  let armeRose = new Arme(1, "armeRose", 15, imageArmeRose, caseArme);
  let armeBleu = new Arme(2, "armeBleue", 20, imageArmeBleu, caseArme);
  let armeJaune = new Arme(3, "armeJaune", 25, imageArmeJaune, caseArme);
  let armeRouge = new Arme(4, "armeRouge", 20, imageArmeRouge, caseArme);

  joueur1 = new Joueur(
    1,
    "joueur1",
    "Jade",
    armeVert,
    "#5C6215",
    imageJoueur,
    true,
    caseJoueur,
    "vide"
  );
  joueur2 = new Joueur(
    2,
    "joueur2",
    "Sylvain",
    armeVert,
    "#E46102",
    imageJoueur,
    false,
    caseJoueur,
    "vide"
  );

 

  let condition = true;

  /* on ajoute l'arme par défaut*/
  tabArme.push(armeVert, armeRose, armeBleu, armeJaune, armeRouge);
  tabArmePlateau.push(armeRose, armeBleu, armeJaune, armeRouge);
  tabJoueur.push(joueur1, joueur2);
  console.log(tabArme);
  console.log(tabJoueur);

  /*creation de la table des rochers*/
  function tabIna() {
    for (let i = 0; i < nbrCaseIinaccessible; i++) {
      caseRocher.dCase = caseInaccessible;
      caseRocher.nom = "inaccessible";
      tabInaccessible.push(caseRocher);
           
    }
   
  }
  tabIna();
  
  
  /* on créé le tableau*/
 plateau = new Plateau(nbrLigne, nbrColonne, nbrCaseIinaccessible);

  /*lancer une partie*/
  $("#jouer").on("click", function () {
   
    joueur1.mouvementJoueur(3);

    $("td").on("click", function (evenement) {
    let tabJoueurs = [joueur1, joueur2];
 
    for (let nouveauJoueur of tabJoueurs) {
      if (nouveauJoueur.actif === true) {
        joueurEnCour = nouveauJoueur;
         
      } else {
        nouveauJoueur.actif = true;
        prochainJoueur=nouveauJoueur;
       
      }
    }

    if (joueurEnCour.jouer(evenement.target)=== true){
      joueurEnCour.actif = false;
      prochainJoueur.mouvementJoueur(3);
      
      
    }
           armePositionne.positionneArmeTableau();
    });
    
    
  });
});
