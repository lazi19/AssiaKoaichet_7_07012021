const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const path = require('path')

const app = express();

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('bd_groupomania', 'root', '', {     // database, userName, passeword 
  host: 'localhost',
  dialect: 'mysql'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()

class Messages extends Model {}
Messages.init({
  idUSERS: DataTypes.INTEGER,
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  date: DataTypes.STRING,
  likes: DataTypes.INTEGER,
  attachment: DataTypes.STRING
}, { sequelize, modelName: 'message' });

(async () => {
  await sequelize.sync();
  Messages.create ({
    idUSERS: 1,
    title: "salut",
    content: "salut",
    date: "27/04/1896",
    likes: 1,
    attachment: "ezaeokazo"
  })
  const users = await Messages.findAll();
  // console.log(users)
})();




/*const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
User.create({
  firstName: 'Getting Started with PostgreSQL and Sequelize',
  lastName: 'Hello there'
}) */



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

// const userRoutes = require("./routes/user");
//const messagesRoutes = require("./routes/message");

// app.use("/api/auth", userRoutes);
// app.use("/images", express.static(path.join(__dirname, "images")));
// app.use("/api/sauces", messagesRoutes);

module.exports = app;