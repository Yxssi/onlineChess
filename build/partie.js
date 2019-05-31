"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var coup_1 = require("./coup");
var piece_1 = require("./piece");
/*export interface Partie {
    coup : Array<Coup>;
    plateau : Echiquier;
}*/
//Fonction qui déplace les pièces selon les coups demandé
function jouerCoup(c, e) {
    var i = 0;
    var j = 0;
    while (i < 8) {
        while (j < 8) {
            if (e.plateau[i][j] != null) {
                if (piece_1.equal(c.piece, e.plateau[i][j])) {
                    e.plateau[i][j] = null; //Remplace la pièce par une case vide
                    e.plateau[c.ligne][coup_1.col(c)] = c.piece; //Remplace la case destination par la pièce
                }
            }
            j++;
        }
        i++;
        j = 0;
    }
    return e;
}
exports.jouerCoup = jouerCoup;
/*export function run (p : Partie) {
    let end:boolean = false;
    let i:number = 0;
    while(i < 3){
    printGrid(jouerCoup(p.coup[i], p.plateau));
    i++;
    }
}*/ 
//# sourceMappingURL=partie.js.map