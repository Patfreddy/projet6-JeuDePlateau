$(document).ready(function () {
  /*let joueur=[],*/
  let armeVert = new Arme(0,"armeVert",5,"arme0.png",null);
  let armeRose = new Arme(1,"armeRose",15,"arme1.png",null);
  let armeBleu = new Arme(2,"armeBleue",20,"arme2.png",null);
  let armeJaune = new Arme(3,"armeJaune",25,"arme3.png",null);
  let armeRouge = new Arme(4,"armeRouge",20,"arme4.png",null);
  let joueur1 = new Joueur(1, "joueur1", "0", "#5C6215", true);
  let joueur2 = new Joueur(2, "joueur2", "0", "#E46102", false);
  
  
 
 
  let condition  = true;

  /* on ajoute l'arme par défaut*/
  tabArme.push(armeVert,armeRose,armeBleu,armeJaune,armeRouge);
  tabJoueur.push(joueur1,joueur2);
 
  
  /* on créé le tableau*/
  let plateau = new Plateau(10, 10, 10, 4, 2);




  
  /*lancer une partie*/
  $("#jouer").on("click",function () {

        tourDuJoueur.prochainJoueur();
      
                
        $("td").on("click",function (evenement) {
                
               
                tourDuJoueur.jouer(joueur1,joueur2,evenement.target);     
                armePositionne.positionneArmeTableau();  
              
        
        });
        
     
  });
  
  

});
