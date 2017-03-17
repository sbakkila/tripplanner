var express = require('express');
var router = express.Router();

const Hotel = require('../models/hotel');
const Activity = require('../models/activity');
const Place = require('../models/place');
const Restaurant = require('../models/restaurant');

router.get('/', function(req, res, next){
  var promiseArray = [Hotel.findAll({}), Restaurant.findAll({}), Activity.findAll({})];
  Promise.all(promiseArray)
  .then(function(result) {
    console.log(result);
    res.render('index', {
      hotels: result[0],
      restaurants: result[1],
      activities: result[2]
    })
  });
});


module.exports = router;
