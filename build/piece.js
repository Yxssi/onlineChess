"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//fonction retournant le type de la pièce et le joueur dans une seule variable
/*export function printPiece (p : Piece): string {
    let resultat : string;
    let joueur : number;
    if(p.couleur) {
        joueur = 1;
    } else {
        joueur = 2;
    }
    resultat = p.type + joueur;
    return resultat
}*/
//Fonction retournant le code Html selon la pièce et sa couleur
function printHtml(c, j) {
    var sym;
    if (j == false) {
        if (c == "T") {
            sym = "&#9814";
        }
        if (c == "C") {
            sym = "&#9816";
        }
        if (c == "F") {
            sym = "&#9815";
        }
        if (c == "D") {
            sym = "&#9812";
        }
        if (c == "R") {
            sym = "&#9813";
        }
        if (c == "P") {
            sym = "&#9817";
        }
    }
    else {
        if (c == "T") {
            sym = "&#9820";
        }
        if (c == "C") {
            sym = "&#9822";
        }
        if (c == "F") {
            sym = "&#9821";
        }
        if (c == "D") {
            sym = "&#9818";
        }
        if (c == "R") {
            sym = "&#9819";
        }
        if (c == "P") {
            sym = "&#9823";
        }
    }
    return sym;
}
exports.printHtml = printHtml;
//Fonction déterminant si 2 pièces sont exactement les mêmes
function equal(p1, p2) {
    return (p1.type == p2.type) && (p1.couleur == p2.couleur);
}
exports.equal = equal;
//# sourceMappingURL=piece.js.map