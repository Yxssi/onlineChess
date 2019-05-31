import { Piece/*, printPiece*/ } from "./piece";
import { Coup } from "./coup";

export interface Echiquier {
    plateau : Array<Array<Piece>>
}

//Retourne l'échiquier avec toutes les pièces à leurs positions initiales
export function createEchiquier():Echiquier {
    //Création de toutes les variables de pièces de couleur noires
    let tourA1      : Piece = {type:"Ta", couleur: true, codeHtml:"&#9820"}
    let cavalierB1  : Piece = {type:"Cb", couleur: true, codeHtml:"&#9822"}
    let fouC1       : Piece = {type:"Fc", couleur: true, codeHtml:"&#9821"}
    let reineD1     : Piece = {type:"R" , couleur: true, codeHtml:"&#9819"}
    let roiE1       : Piece = {type:"D" , couleur: true, codeHtml:"&#9818"}
    let fouF1       : Piece = {type:"Ff", couleur: true, codeHtml:"&#9821"}
    let cavalierG1  : Piece = {type:"Cg", couleur: true, codeHtml:"&#9822"}
    let tourH1      : Piece = {type:"Th", couleur: true, codeHtml:"&#9820"}
    let pionA2      : Piece = {type:"Pa", couleur: true, codeHtml:"&#9823"}
    let pionB2      : Piece = {type:"Pb", couleur: true, codeHtml:"&#9823"}
    let pionC2      : Piece = {type:"Pc", couleur: true, codeHtml:"&#9823"}
    let pionD2      : Piece = {type:"Pd", couleur: true, codeHtml:"&#9823"}
    let pionE2      : Piece = {type:"Pe", couleur: true, codeHtml:"&#9823"}
    let pionF2      : Piece = {type:"Pf", couleur: true, codeHtml:"&#9823"}
    let pionG2      : Piece = {type:"Pg", couleur: true, codeHtml:"&#9823"}
    let pionH2      : Piece = {type:"Ph", couleur: true, codeHtml:"&#9823"}
    //Création de toutes les variables de pièces de couleur blanches
    let tourA8      : Piece = {type:"Ta", couleur: false, codeHtml:"&#9814"}
    let cavalierB8  : Piece = {type:"Cb", couleur: false, codeHtml:"&#9816"}
    let fouC8       : Piece = {type:"Fc", couleur: false, codeHtml:"&#9815"}
    let reineD8     : Piece = {type:"R" , couleur: false, codeHtml:"&#9813"}
    let roiE8       : Piece = {type:"D" , couleur: false, codeHtml:"&#9812"}
    let fouF8       : Piece = {type:"Ff", couleur: false, codeHtml:"&#9815"}
    let cavalierG8  : Piece = {type:"Cg", couleur: false, codeHtml:"&#9816"}
    let tourH8      : Piece = {type:"Th", couleur: false, codeHtml:"&#9814"}
    let pionA7      : Piece = {type:"Pa", couleur: false, codeHtml:"&#9817"}
    let pionB7      : Piece = {type:"Pb", couleur: false, codeHtml:"&#9817"}
    let pionC7      : Piece = {type:"Pc", couleur: false, codeHtml:"&#9817"}
    let pionD7      : Piece = {type:"Pd", couleur: false, codeHtml:"&#9817"}
    let pionE7      : Piece = {type:"Pe", couleur: false, codeHtml:"&#9817"}
    let pionF7      : Piece = {type:"Pf", couleur: false, codeHtml:"&#9817"}
    let pionG7      : Piece = {type:"Pg", couleur: false, codeHtml:"&#9817"}
    let pionH7      : Piece = {type:"Ph", couleur: false, codeHtml:"&#9817"}
    //Création du tableau contenant toutes les pièces et les cases vides
    let Grid: Echiquier = {plateau : [[tourA1, cavalierB1, fouC1, reineD1, roiE1, fouF1, cavalierG1, tourH1],
    [pionA2, pionB2, pionC2, pionD2, pionE2, pionF2, pionG2, pionH2],
    [ , , , , , , , ],
    [ , , , , , , , ],
    [ , , , , , , , ],
    [ , , , , , , , ],
    [pionA7, pionB7, pionC7, pionD7, pionE7, pionF7, pionG7, pionH7],
    [tourA8, cavalierB8, fouC8, reineD8, roiE8, fouF8, cavalierG8, tourH8]]}
    return Grid
}

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