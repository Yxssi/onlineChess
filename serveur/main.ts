/*
 * Programme principal du serveur d'échecs en ligne
 * @Author: Quentin Tonneau 
 * @Date: 2018-03-15 22:23:16 
 * @Last Modified by: Quentin Tonneau
 * @Last Modified time: 2018-03-19 11:45:29
 */

//Imports des modules serveur web
import express = require('express');
import bodyParser = require('body-parser');
declare var __dirname;
const _PORT_ = 8080; //port d'écoute du serveur
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/../client')); //distribution automatique des fichiers (ex : index.html)


/************** PARTIE ELEVE 1 ****************/
import { Echiquier, createEchiquier } from './echiquier';
import { jouerCoup } from './partie';
import { editCoup } from './coup';
let echiquier:Echiquier = createEchiquier(); //Création d'une variable globale de la partie en cours
let joueur = false;
/************* FIN PARTIE ELEVE 1 ************/


//Fonction de traitement d'un coup envoyé par le navigateur
app.post("/",function(req,res){
  let coup : string = req.body.coup; //récupération du coup
  if(joueur == true) {
    joueur = false;
  } else {
    joueur = true;
  }


  /************** PARTIE ELEVE 2 ****************/
  echiquier = jouerCoup(editCoup(coup, joueur),echiquier);
  /************* FIN PARTIE ELEVE 2 ************/
  
  res.redirect("/");//On redirige l'utilisateur vers l'affichage du nouvel echiquier
});



//Fonction retournant l'échiquier actuel
app.get("/status.js",function(req,res){
  res.end("var echiquier = "+JSON.stringify(echiquier));
});

//Lancement de l'application
app.listen(_PORT_, function () {
  console.log('Application lancée à l\'adresse http://localhost:'+_PORT_);
});