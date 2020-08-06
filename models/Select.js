const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'test',//esem table as =>  tests as test
  
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
      
    
  },
  {
    timestamps: false
  }
)