let caseTest = new Case();
let caseJoueur = new Case();
let caseArme = new Case();
let tabCases = [];
let tabArme = [];
let tabArmePlateau=[];
let tabJoueur = [];
let tabInaccessible = [];
let plateau = null;
let tabJoueursArme = [0, 0];
let joueurEnCour = new Joueur();
let prochainJoueur = new Joueur();
let armePositionne = new Arme();
let joueur1 = null;
let joueur2 = null;
/*Methode pour retrouver l'état d'une case par son Id*/
function getCaseById(idCase){
  let caseFind = null;
  tabCases.forEach((uneCase) => {
    if (uneCase.idCase == idCase) {
      caseFind = uneCase;
    }
  });
  return caseFind;
};
