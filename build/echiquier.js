"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Retourne l'échiquier avec toutes les pièces à leurs positions initiales
function createEchiquier() {
    //Création de toutes les variables de pièces de couleur noires
    var tourA1 = { type: "Ta", couleur: true, codeHtml: "&#9820" };
    var cavalierB1 = { type: "Cb", couleur: true, codeHtml: "&#9822" };
    var fouC1 = { type: "Fc", couleur: true, codeHtml: "&#9821" };
    var reineD1 = { type: "R", couleur: true, codeHtml: "&#9819" };
    var roiE1 = { type: "D", couleur: true, codeHtml: "&#9818" };
    var fouF1 = { type: "Ff", couleur: true, codeHtml: "&#9821" };
    var cavalierG1 = { type: "Cg", couleur: true, codeHtml: "&#9822" };
    var tourH1 = { type: "Th", couleur: true, codeHtml: "&#9820" };
    var pionA2 = { type: "Pa", couleur: true, codeHtml: "&#9823" };
    var pionB2 = { type: "Pb", couleur: true, codeHtml: "&#9823" };
    var pionC2 = { type: "Pc", couleur: true, codeHtml: "&#9823" };
    var pionD2 = { type: "Pd", couleur: true, codeHtml: "&#9823" };
    var pionE2 = { type: "Pe", couleur: true, codeHtml: "&#9823" };
    var pionF2 = { type: "Pf", couleur: true, codeHtml: "&#9823" };
    var pionG2 = { type: "Pg", couleur: true, codeHtml: "&#9823" };
    var pionH2 = { type: "Ph", couleur: true, codeHtml: "&#9823" };
    //Création de toutes les variables de pièces de couleur blanches
    var tourA8 = { type: "Ta", couleur: false, codeHtml: "&#9814" };
    var cavalierB8 = { type: "Cb", couleur: false, codeHtml: "&#9816" };
    var fouC8 = { type: "Fc", couleur: false, codeHtml: "&#9815" };
    var reineD8 = { type: "R", couleur: false, codeHtml: "&#9813" };
    var roiE8 = { type: "D", couleur: false, codeHtml: "&#9812" };
    var fouF8 = { type: "Ff", couleur: false, codeHtml: "&#9815" };
    var cavalierG8 = { type: "Cg", couleur: false, codeHtml: "&#9816" };
    var tourH8 = { type: "Th", couleur: false, codeHtml: "&#9814" };
    var pionA7 = { type: "Pa", couleur: false, codeHtml: "&#9817" };
    var pionB7 = { type: "Pb", couleur: false, codeHtml: "&#9817" };
    var pionC7 = { type: "Pc", couleur: false, codeHtml: "&#9817" };
    var pionD7 = { type: "Pd", couleur: false, codeHtml: "&#9817" };
    var pionE7 = { type: "Pe", couleur: false, codeHtml: "&#9817" };
    var pionF7 = { type: "Pf", couleur: false, codeHtml: "&#9817" };
    var pionG7 = { type: "Pg", couleur: false, codeHtml: "&#9817" };
    var pionH7 = { type: "Ph", couleur: false, codeHtml: "&#9817" };
    //Création du tableau contenant toutes les pièces et les cases vides
    var Grid = { plateau: [[tourA1, cavalierB1, fouC1, reineD1, roiE1, fouF1, cavalierG1, tourH1],
            [pionA2, pionB2, pionC2, pionD2, pionE2, pionF2, pionG2, pionH2],
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
            [pionA7, pionB7, pionC7, pionD7, pionE7, pionF7, pionG7, pionH7],
            [tourA8, cavalierB8, fouC8, reineD8, roiE8, fouF8, cavalierG8, tourH8]] };
    return Grid;
}
exports.createEchiquier = createEchiquier;
/*export function printGrid(e : Echiquier){
    let ligne:string;
    let numcol:string ="  0   1   2   3   4   5   6   7";
    console.log(numcol);
    let sep:string = "_|___|___|___|___|___|___|___|___|";
    console.log(sep);
    for(let i = 0; i < 8; i++){
        ligne = "|";
        for(let j = 0; j < 8; j++){
            if(e.plateau[i][j] == null){
                ligne = ligne + "   |";
            } else {
                ligne = ligne + printPiece(e.plateau[i][j])+"|";
            }
        }
        console.log(i + ligne);
        console.log(sep);
    }
}*/ 
//# sourceMappingURL=echiquier.js.map