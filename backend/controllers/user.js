// importation
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const models = require("../models");
const User = models.user;

const fs = require('fs');

//const db = require('../models/index');
//const User = db.user; 

// logique métier : lire tous utilisateurs

                      exports.getAllUsers = (req, res, next) => {
                          User.findAll()
                            .then((users) => {
                              console.log(users);
                              res.status(200).json(users);
                            })
                            .catch(error => res.status(400).json({ error }));
                          
                        };

 // Logiques métiers pour les utilisateurs
// Création de nouveaux utilisateurs (Post signup) 
exports.signup = (req, res, next) => {
  
  // éléments de la requète
  // const {firstname, lastname, mail, password, confirmPassword } = req.body //autre ecriture 
  // const firstname = req.body.firstname;
  // const lastname =  req.body.lastname;
  // const mail = req.body.mail;
  // const password = req.body.password;
  // const confirmPassword= req.body.confirmPassword;
  const {firstname, lastname, mail, password, confirmPassword } = req.body

 // vérification que tous les champs sont remplis
 if(firstname === null || firstname === '' || lastname === null || lastname === '' 
 || mail === null || mail === '' || password === null || password === '' || confirmPassword === null || confirmPassword === '') {
 return res.status(400).json({'error': "Veuillez remplir l'ensemble des champs du formulaire"});
}

 //Hachage du mot de pasese  et Masquage de l'adresse mail 
 bcrypt
  .hash(req.body.password, 10)
  .then((hash) => {
    const user = new User({
      mail: CryptoJS.MD5(req.body.mail).toString(), // On passe l'email (crypter avant de l'envoyer a la BDD) qui se  trouve dans le corps de la requête
      password: hash, // On récupère le mdp hashé de bcrypt
    });
    user
    .save() // On enregistre l'utilisateur dans la base de donnée
    .then(() => res.status(201).json({ message: "Utilisateur créé !" }))   //, user : user._id 
    .catch((error) => res.status(400).json({ error }));
  })
  .catch((error) => res.status(500).json({ error }));

};


// // Connection des utilisateurs existants (Post login)  
// exports.login = (req, res, next) => {
//   User.findOne({ mail: CryptoJS.MD5(req.body.mail).toString() }) // On doit trouver l'utilisateur dans la BDD qui correspond à l'adresse entrée par l'utilisateur
//     .then((user) => {
//       //récupère moi ce user
//       if (!user) {
//         // Si on trouve pas l'utilisateur on va renvoyer un code 401 "non autorisé"
//         return res.status(401).json({ error: "Utilisateur non trouvé !" });
//       }
//       bcrypt
//         .compare(req.body.password, user.password) //Si on trouve l'utilisateur on utilise bcrypt pour comparer les hashs et savoir s'ils ont le même string d'origine
//         .then((valid) => {
//           if (!valid) {
//             // Si false, c'est que ce n'est pas le bon utilisateur, ou le mot de passe est incorrect
//             return res.status(401).json({ error: "Mot de passse incorrect !" });
//           }
//           res.status(200).json({
//             // Si true, on renvoie un statut 200 et un objet JSON avec un userID + un token

//             userId: user._id,
//             token: jwt.sign(
//               //nous utilisons la fonction sign de jsonwebtoken pour encoder un nouveau token ;
//               { userId: user._id }, //ce token contient l'ID de l'utilisateur en tant que payload (les données encodées dans le token) ;
//               "RANDOM_TOKEN_SECRET", //pour encoder notre token (à remplacer par une chaîne aléatoire beaucoup plus longue pour la production) ;
//               { expiresIn: "24h" } //La durée de validité du token à 24 heures.
//             ),
//           });
//         })
//         .catch((error) => res.status(500).json({ error }));
//     })

//     .catch((error) => res.status(500).json({ error }));
// };
