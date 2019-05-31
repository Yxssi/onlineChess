/*
 * @Author: Quentin Tonneau 
 * @Date: 2018-03-19 13:23:50 
 * @Last Modified by: Quentin Tonneau
 * @Last Modified time: 2018-03-19 15:20:20
 */

/*
 * Fonction principale executée après le chargement de la page
 * Initialise l'échiquier en fonction de la variable "echiquier"
 */
function init(){

    for(var i=0;i<echiquier.plateau.length;i++){
        for(var j=0;j<echiquier.plateau.length;j++){
            var piece = echiquier.plateau[j][i];
            if(piece == null){
                //Vidage de la case
                document.getElementsByTagName("tr")[j+1].getElementsByTagName("td")[i].innerHTML="";
            }else{
                //Affichage du symbole / image
                document.getElementsByTagName("tr")[j+1].getElementsByTagName("td")[i].innerHTML=piece.codeHtml;  // version symbole
                //document.getElementsByTagName("tr")[j+1].getElementsByTagName("td")[i].innerHTML="<img src=\""+piece.image+"\"/>"; //version image
            }
        }
    }  

}