const Sequelize = require('sequelize')
const db = require('../database/db.js')
//modif
/* 'use strict';
module.exports = (sequelize, DataTypes) => {
  const utilisateur = sequelize.define('utilisateur', {
    name: DataTypes.STRING
  }, {});
  
  utilisateur.associate = function(models) {
    utilisateur.hasMany(models.User, {as: 'incident'})
  };
  return Company;
};

// */

module.exports = db.sequelize.define(
  'utilisateur',//esem table as =>  tests as test
  
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
      
      isConfident: {
        type: Sequelize.TINYINT
      },
    
  },
  {
    timestamps: false
  },
  
) 

