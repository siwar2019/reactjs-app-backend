const Sequelize = require('sequelize')
const db = require('../database/db.js')

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
      image: {
        type: Sequelize.STRING
      },
      filePath: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
    
      incident_type: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      isConfident: {
        type: Sequelize.BOOLEAN
      },
    
  },
  {
    timestamps: false
  }
)