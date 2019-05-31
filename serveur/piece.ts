import { Echiquier } from "./echiquier";

export interface Piece {
    type : string;
    couleur : boolean;
    codeHtml : string;
}

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
export function printHtml (c : string, j : boolean): string {
    let sym: string;
    if(j == false){ //Piece de couleur blanche
        if(c == "T"){
            sym = "&#9814";
        }
        if(c == "C"){
            sym = "&#9816";
        }
        if(c == "F"){
            sym = "&#9815";
        }
        if(c == "D"){
            sym = "&#9812";
        }
        if(c == "R"){
            sym = "&#9813";
        }
        if(c == "P"){
            sym = "&#9817";
        }
    } else { //Pièce de couleur noire
        if(c == "T"){
            sym = "&#9820";
        }
        if(c == "C"){
            sym = "&#9822";
        }
        if(c == "F"){
            sym = "&#9821";
        }
        if(c == "D"){
            sym = "&#9818";
        }
        if(c == "R"){
            sym = "&#9819";
        }
        if(c == "P"){
            sym = "&#9823";
        }
    }
    return sym;
}

//Fonction déterminant si 2 pièces sont exactement les mêmes
export function equal(p1 : Piece, p2 : Piece):boolean {
    return(p1.type == p2.type) && (p1.couleur == p2.couleur)
}