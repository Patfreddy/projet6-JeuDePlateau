class Map {
    constructor (rows, columns, nbBusy, player1Position, player2Position){
        this.rows = rows;
        this.columns = columns;
        this.nbBusy = nbBusy;
        this.player1Position = player1Position;
        this.player2Position = player2Position;
    }
    // génére le plateau du jeu
    generateMap(){
        // boucle pour la création des lignes avec la balise tr
        for (let r = 0; r < this.rows ; r ++) {
            table += '<tr>';
                // boucle pour la création des colonnes avec la balise td
                for( let c = 0; c < this.columns ; c ++){
                    table += '<td id="' + cell +'">' + '</td>';
                    cell ++;
                }
            table += '</tr>';
        }
        table += '</table>' ; 
        $("#map").prepend(table);       
    }     
    // placement des obstacles   
    generateBusy(){
        for (let i=0 ; i < this.nbBusy ; i++){
            numberCell=randomPosition();
            $('td#'+numberCell).addClass("busy");
        } 
    }
    //déplacements autorisées
    moveAllowed(playerPosition){
        // déplacements autorisées vers le haut background bleu
        indexToCheck=(playerPosition-this.columns);//test la case sur la ligne au dessus du player
        attrToCheck=$('td#'+indexToCheck).attr('class');
        if (cellIsFree(indexToCheck) && outLimitUp(playerPosition)== false){
            $('td#'+(indexToCheck)).addClass('allowed');
            indexAllowedCells.push(indexToCheck);    
            indexToCheck=parseInt(playerPosition)-(this.columns*2);// test sur la ligne deux lignes au dessus du player
            attrToCheck=$('td#'+indexToCheck).attr('class');
            if (cellIsFree(indexToCheck) && outLimitUp(playerPosition-10)== false){
                $('td#'+(indexToCheck)).addClass('allowed');
                indexAllowedCells.push(indexToCheck);              
                indexToCheck=parseInt(playerPosition)-(this.columns*3);// test sur la ligne trois lignes au dessus du player
                attrToCheck=$('td#'+indexToCheck).attr('class');
                if (cellIsFree(indexToCheck) && outLimitUp(playerPosition-20)== false){
                    $('td#'+(indexToCheck)).addClass('allowed');
                    indexAllowedCells.push(indexToCheck);                 
                } 
            }
        }
        // déplacements autorisées vers la droite background bleu 
        indexToCheck=parseInt(playerPosition)+1;
        attrToCheck=$('td#'+indexToCheck).attr('class');
        if (cellIsFree(indexToCheck) && outLimitRight(playerPosition)== false){
            $('td#'+(indexToCheck)).addClass('allowed');
            indexAllowedCells.push(indexToCheck);         
            indexToCheck=parseInt(playerPosition)+2;
            attrToCheck=$('td#'+indexToCheck).attr('class');
            if (cellIsFree(indexToCheck) && outLimitRight(playerPosition+1)== false){
                $('td#'+(indexToCheck)).addClass('allowed');
                indexAllowedCells.push(indexToCheck);          
                indexToCheck=parseInt(playerPosition)+3;
                attrToCheck=$('td#'+indexToCheck).attr('class');
                if (cellIsFree(indexToCheck) && outLimitRight(playerPosition+2)== false){
                    $('td#'+(indexToCheck)).addClass('allowed');
                    indexAllowedCells.push(indexToCheck);
                }
            }
        }
        // déplacements autorisées vers le bas background bleu 
        indexToCheck=parseInt(playerPosition)+10;
        if (cellIsFree(indexToCheck) && outLimitDown(playerPosition)== false){
            $('td#'+(indexToCheck)).addClass('allowed');
            indexAllowedCells.push(indexToCheck);        
            indexToCheck=parseInt(playerPosition)+20;
            attrToCheck=$('td#'+indexToCheck).attr('class');
            if (cellIsFree(indexToCheck) && outLimitDown(playerPosition+10)== false){
                $('td#'+(indexToCheck)).addClass('allowed');
                indexAllowedCells.push(indexToCheck);          
                indexToCheck=parseInt(playerPosition)+30;
                attrToCheck=$('td#'+indexToCheck).attr('class');
                if (cellIsFree(indexToCheck) && outLimitDown(playerPosition+20)== false){
                    $('td#'+(indexToCheck)).addClass('allowed');
                    indexAllowedCells.push(indexToCheck);            
                }
            }
        }
        // déplacements autorisées vers la gauche background bleu 
        indexToCheck = parseInt(playerPosition)-1;
        attrToCheck=$('td#'+indexToCheck).attr('class');
        if (cellIsFree(indexToCheck) && outLimitLeft(playerPosition)== false){
            $('td#'+(indexToCheck)).addClass('allowed');
            indexAllowedCells.push(indexToCheck);        
            indexToCheck = parseInt(playerPosition)-2;
            attrToCheck=$('td#'+indexToCheck).attr('class');
            if (cellIsFree(indexToCheck) && outLimitLeft(playerPosition-1)== false){
                $('td#'+(indexToCheck)).addClass('allowed');
                indexAllowedCells.push(indexToCheck);           
                indexToCheck = parseInt(playerPosition)-3;
                attrToCheck=$('td#'+indexToCheck).attr('class');
                if (cellIsFree(indexToCheck) && outLimitLeft(playerPosition-2)== false){
                    $('td#'+(indexToCheck)).addClass('allowed');
                    indexAllowedCells.push(indexToCheck);                  
                }
            }
        }        
    }
    //supprime les cellules bleues
    deleteClassAllowed(){
        for (let i=0; i<= indexAllowedCells.length; i++){
            $('td#'+indexAllowedCells[i]).removeClass("allowed");               
        }
        indexAllowedCells.length=0;
    }
    nextPlayer(){
        this.resetEventCell();
        if(player1.isPlaying==true){
            player1.isPlaying=false;
            player2.isPlaying=true;
            map.moveAllowed(map.player2Position);
            player2.play();
        } else if (player2.isPlaying==true){
                player2.isPlaying=false;
                player1.isPlaying=true;
                map.moveAllowed(map.player1Position);
                player1.play();
        }
    }
    resetEventCell() {
        $('td').off('click',this.cellEvent);
    }
    cellEvent(event){
        // récupère l'index de la cellule cliquée
        idCellClicked = $(event.target).attr('id');
        // si le joueur clique sur une arme
        classToCheck = $('td#'+idCellClicked).attr('class');
        if (player1.isPlaying){  
            // si le joueur a pris une arme au tour précedent il l'a laisse 
            if (player1.weaponToLeave!=""){
                $('td#'+map.player1Position).addClass(player1.weaponToLeave);
                player1.weaponToLeave="";
            }  
            // si le joueur clique sur une arme          
            player1.exchangeWeapon(classToCheck);
            // déplacement du player
            player1.move(map.player1Position); 
            map.player1Position=parseInt(idCellClicked);
        } else if (player2.isPlaying){ 
                    // si le joueur a pris une arme au tour précedent il l'a laisse 
                    if (player2.weaponToLeave!=""){
                        $('td#'+map.player2Position).addClass(player2.weaponToLeave);
                        player2.weaponToLeave="";
                    }   
                    // si le joueur clique sur une arme 
                    player2.exchangeWeapon(classToCheck);           
                    // déplacement du player
                    player2.move(map.player2Position); 
                    map.player2Position=parseInt(idCellClicked);
                }  
            // si les players sont dans des cellules adjacentes
            if (map.player1Position - map.player2Position == 1 || map.player1Position - map.player2Position == map.columns || map.player1Position - map.player2Position == - 1 || map.player1Position - map.player2Position == -map.columns) { 
                if (outLimitRight(map.player1Position)==false && outLimitLeft(map.player2Position)==false){
                    if (outLimitRight(map.player2Position)==false && outLimitLeft(map.player1Position)==false){
                        (player1.isPlaying ? player1 : player2).fight();//si c'est le joueur 1 qui joue alors player1.fight() sinon player2.fight()
                    }else { 
                        // efface les cellules bleues
                        map.deleteClassAllowed();
                        // passe à l'autre joueur
                        map.nextPlayer();
                        }
                }else { 
                    map.deleteClassAllowed();
                    map.nextPlayer();
                    }
            } else { 
                map.deleteClassAllowed();
                map.nextPlayer();
                }
    }     
}








