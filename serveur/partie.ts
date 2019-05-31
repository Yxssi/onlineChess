import { Coup, col  } from "./coup";
import { Echiquier } from "./echiquier";
import { equal } from "./piece";

/*export interface Partie {
    coup : Array<Coup>;
    plateau : Echiquier;
}*/

//Fonction qui déplace les pièces selon les coups demandé
export function jouerCoup (c : Coup, e : Echiquier) : Echiquier {
    let i:number = 0;
    let j:number = 0;
    while(i<8){
        while(j<8){
            if(e.plateau[i][j] != null){
                if(equal(c.piece,e.plateau[i][j])){
                    e.plateau[i][j]= null;                  //Remplace la pièce par une case vide
                    e.plateau[c.ligne][col(c)] = c.piece;   //Remplace la case destination par la pièce
                }
        }
            j++;
        }
        i++;
        j = 0;
    }
    return e;
}

/*export function run (p : Partie) {
    let end:boolean = false;
    let i:number = 0;
    while(i < 3){
    printGrid(jouerCoup(p.coup[i], p.plateau));
    i++;
    }
}*/