const Sequelize = require('sequelize');
const db = require('./db.js')


var Hotel = db.define('hotel',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
  },
  amenities: {
    type: Sequelize.STRING,
  }
})

module.exports = Hotel;
