
$(document).ready(function() {

        /*let joueur=[],*/
       
        let rose = new Arme(1);
        let bleu =  new Arme(2); 
        let jaune =  new Arme(3); 
        let rouge =  new Arme(4); 
       
        let plateau = new Plateau(10,10,10,4,2);
    
        let caseJoueur1 = new Case();
        let joueur1Case = new Joueur();
        let [idJoueur1X,idjoueur1Y] = caseJoueur1.getCaseByEtat("joueur1");
       
        console.log("idjoueur1 :"+ idJoueur1X+""+idjoueur1Y);
        joueur1Case.possibleDeplacementJoueur(idJoueur1X,idjoueur1Y,3,"joueur1",'#5C6215');

        let caseJoueur2 = new Case();
        let joueur2Case = new Joueur();
        let [idJoueur2X,idjoueur2Y] = caseJoueur2.getCaseByEtat("joueur2");
       
        console.log("idjoueur2 :"+ idJoueur2X+""+idjoueur2Y);
        joueur2Case.possibleDeplacementJoueur(idJoueur2X,idjoueur2Y,3,"joueur2",'#E46102');

        let tourDuJoueur = new Joueur();
        tourDuJoueur.nomJoueur="joueur1";
                   
        $("td").on("click", function (evenement) {
                caseJoueur = new Case;

                // Gestionnaire d'évènement unique pour l'ensemble des <td>
                let caseCliquer= evenement.target;
                let [idcaseDuJoueurX,idcaseDuJoueurY] = caseJoueur.getCaseByEtat(tourDuJoueur.nomJoueur);
                
               // alert("la tableau a été cliqué ... "+caseCliquer.id);

               tourDuJoueur.verificationCaseDeplacementJoueur(`${idcaseDuJoueurX}${idcaseDuJoueurY}`,caseCliquer.id,tourDuJoueur.nomJoueur);

              });

              /*$(function() {
                      alert("defini dialog");
                $( "#dialog-confirm" ).dialog({
                  modal: true,
                  buttons: {
                    "Oui": function() {
                      $('body').css('background', 'yellow');
                      $( this ).dialog( "close" );
                    },
                    "Non": function() {
                      $( this ).dialog( "close" );
                    }
                  }
                });
              });*/
           
             $(function () {
                $("#dialog-confirm").dialog({
                  resizable: false,
                  height: 160,
                  width: 500,
                  autoOpen: false,
                  modal: true,
                  buttons: {
                    Oui: function () {
                      $(this).dialog("close");
                    },
                    Non: function () {
                      $(this).dialog("close");
                    },
                  },
                });
                $("#dialog-confirm").dialog("open");
              });
      
              
             
        
});