"use strict";
/*
 * Programme principal du serveur d'échecs en ligne
 * @Author: Quentin Tonneau
 * @Date: 2018-03-15 22:23:16
 * @Last Modified by: Quentin Tonneau
 * @Last Modified time: 2018-03-19 11:45:29
 */
Object.defineProperty(exports, "__esModule", { value: true });
//Imports des modules serveur web
var express = require("express");
var bodyParser = require("body-parser");
var _PORT_ = 8080; //port d'écoute du serveur
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client')); //distribution automatique des fichiers (ex : index.html)
/************** PARTIE ELEVE 1 ****************/
var echiquier_1 = require("./echiquier");
var partie_1 = require("./partie");
var coup_1 = require("./coup");
var echiquier = echiquier_1.createEchiquier(); //Création d'une variable globale de la partie en cours
var joueur = false;
/************* FIN PARTIE ELEVE 1 ************/
//Fonction de traitement d'un coup envoyé par le navigateur
app.post("/", function (req, res) {
    var coup = req.body.coup; //récupération du coup
    if (joueur == true) {
        joueur = false;
    }
    else {
        joueur = true;
    }
    /************** PARTIE ELEVE 2 ****************/
    echiquier = partie_1.jouerCoup(coup_1.editCoup(coup, joueur), echiquier);
    /************* FIN PARTIE ELEVE 2 ************/
    res.redirect("/"); //On redirige l'utilisateur vers l'affichage du nouvel echiquier
});
//Fonction retournant l'échiquier actuel
app.get("/status.js", function (req, res) {
    res.end("var echiquier = " + JSON.stringify(echiquier));
});
//Lancement de l'application
app.listen(_PORT_, function () {
    console.log('Application lancée à l\'adresse http://localhost:' + _PORT_);
});
//# sourceMappingURL=main.js.map