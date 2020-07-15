
$(document).ready(function() {

        /*let joueur=[],*/
       
        let rose = new Arme(1);
        let bleu =  new Arme(2); 
        let jaune =  new Arme(3); 
        let rouge =  new Arme(4); 
       
        let plateau = new Plateau(10,10,10,4,2);
    
        let caseJoueur1 = new Case();
        let [idJoueur1X,idjoueur1Y] = caseJoueur1.getCaseByEtat("joueur1");
       
        console.log("idjoueur1 :"+ idJoueur1X+""+idjoueur1Y);
        caseJoueur1.deplacementJoueur(idJoueur1X,idjoueur1Y,3,joueur1,'#5C6215');



});