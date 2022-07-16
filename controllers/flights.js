const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight
};

function index(req, res) {
    console.log('index')
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { flights });
    });
  }

function newFlight(req, res) {
    res.render('flights/new');
  }