const Sequelize = require('sequelize');
const db = require('./db.js')


var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Restaurant;
