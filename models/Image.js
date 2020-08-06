const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'image',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    
    
  },
  {
    timestamps: false
  }
)