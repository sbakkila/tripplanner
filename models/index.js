const db = require('./db.js')
const Hotel = require('./hotel');
const Activity = require('./activity');
const Place = require('./place');
const Restaurant = require('./restaurant');

Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
Hotel.belongsTo(Place);

module.exports = db;
