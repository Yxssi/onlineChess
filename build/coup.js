"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var piece_1 = require("./piece");
/*export function printCoup (c : Coup): string {
    let result : string;
    result = printPiece(c.piece) + '>' + c.col + c.ligne;
    return result;
}*/
//Transforme le coup donné par le joueur en variable de type coup
function editCoup(c, j) {
    var coup;
    if (c[0] == "D" || c[0] == "R") {
        coup = { piece: { type: c[0], couleur: j, codeHtml: piece_1.printHtml(c[0], j) }, col: c[1], ligne: lig(c[2]) };
    }
    else {
        coup = { piece: { type: c[0] + c[1], couleur: j, codeHtml: piece_1.printHtml(c[0], j) }, col: c[2], ligne: lig(c[3]) };
    }
    return coup;
}
exports.editCoup = editCoup;
//Fonction retourant le numéro de la colonne selon la lettre
function col(c) {
    var colonne;
    if (c.col == "A") {
        colonne = 0;
    }
    if (c.col == "B") {
        colonne = 1;
    }
    if (c.col == "C") {
        colonne = 2;
    }
    if (c.col == "D") {
        colonne = 3;
    }
    if (c.col == "E") {
        colonne = 4;
    }
    if (c.col == "F") {
        colonne = 5;
    }
    if (c.col == "G") {
        colonne = 6;
    }
    if (c.col == "H") {
        colonne = 7;
    }
    return colonne;
}
exports.col = col;
//Fonction retournant le numéro de la ligne du coup donné par le joueur
function lig(l) {
    var ligne;
    if (l == "1") {
        ligne = 0;
    }
    if (l == "2") {
        ligne = 1;
    }
    if (l == "3") {
        ligne = 2;
    }
    if (l == "4") {
        ligne = 3;
    }
    if (l == "5") {
        ligne = 4;
    }
    if (l == "6") {
        ligne = 5;
    }
    if (l == "7") {
        ligne = 6;
    }
    if (l == "8") {
        ligne = 7;
    }
    return ligne;
}
exports.lig = lig;
//# sourceMappingURL=coup.js.map