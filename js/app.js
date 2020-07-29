$(document).ready(function () {
  /*let joueur=[],*/

  let armeRose = new Arme(1);
  let armeBleu = new Arme(2);
  let armeJaune = new Arme(3);
  let armeRouge = new Arme(4);
  let armeVert = new Arme(0);
  let tourDuJoueur = new Joueur();
  let prochainJoueur = new Joueur();
 
  let condition  = true;

  /* on ajoute l'arme par défaut*/
  tabArme.push("0");

  /* on créé le tableau*/
  let plateau = new Plateau(10, 10, 10, 4, 2);

  let joueur1 = new Joueur(1, "joueur1", "0", "#5C6215", true);
  let joueur2 = new Joueur(2, "joueur2", "0", "#E46102", false);


  
  /*lancer une partie*/
  $("#jouer").on("click",function () {

        tourDuJoueur.prochainJoueur(joueur1,joueur2);
      
                
        $("td").on("click",function (evenement) {
                
               
                tourDuJoueur.jouer(joueur1,joueur2,evenement.target);     
                armePositionne.positionneArmeTableau();  
              
        
        });
        
     
  });
  
  

});
