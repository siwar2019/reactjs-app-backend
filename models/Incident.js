const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'incident',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    image: {
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
    email: {
      type: Sequelize.STRING
    },
    
    
  },
  {
    timestamps: false
  }
  
)

