$(document).ready(function () {
  /*let joueur=[],*/
  
  let imageJoueur = new Image(1,"joueur.png");
  let imageArmeVert = new Image(2,"arme0.png");
  let imageArmeRose = new Image(3,"arme1.png");
  let imageArmeBleu = new Image(4,"arme2.png");
  let imageArmeJaune = new Image(5,"arme3.png");
  let imageArmeRouge = new Image(6,"arme4.png");
  let armeVert = new Arme(0,"armeVert",5,imageArmeVert);
  let armeRose = new Arme(1,"armeRose",15,imageArmeRose);
  let armeBleu = new Arme(2,"armeBleue",20,imageArmeBleu);
  let armeJaune = new Arme(3,"armeJaune",25,imageArmeJaune);
  let armeRouge = new Arme(4,"armeRouge",20,imageArmeRouge);
  let joueur1 = new Joueur(1,"joueur1","Jade", armeVert, "#5C6215",imageJoueur,true);
  let joueur2 = new Joueur(2, "joueur2","Sylvain", armeVert, "#E46102",imageJoueur,false);
  
 
 
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
