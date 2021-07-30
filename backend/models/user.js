'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  // const User = sequelize.define("User", {
  //   firstName: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     validate: { notEmpty: true}
  //   } ,

  //   lastName: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     validate: { notEmpty: true}
  //   } 


    
  //   // lastname: DataTypes.STRING,
  //   // email: DataTypes.STRING,
  //   // password: DataTypes.STRING,
  //   // bio: DataTypes.STRING,
  //   // imageUrl: DataTypes.STRING,
  //   // isAdmin: DataTypes.BOOLEAN
    
  // })
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*
    static associate(models) {
      define association here
      models.User.hasMany(models.Message)
    }*/
  };

  User.init({    
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
   
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};