'use strict';

require('dotenv').config()
const fs = require('fs');
const path = require('path');  // Le path module fournit des utilitaires pour travailler avec les chemins de fichiers et de répertoires.
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; // explication? 
const config = require(__dirname + '/../config/config.json')[env];  // explication? 
const db = {};

let sequelize;  

if (config.use_env_variable) {

  sequelize = new Sequelize(process.env[config.use_env_variable], config);
  
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
  // sequelize = new Sequelize(bd_groupomania, root);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes); //Extrayez le nom de fichier d'un chemin de fichier :
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.users = require('./user.js')(sequelize, Sequelize);
// db.articles = require('./article.js')(sequelize, Sequelize);
// db.likes = require('./like.js')(sequelize, Sequelize);
// db.comments = require('./comment.js')(sequelize, Sequelize);



module.exports = db;