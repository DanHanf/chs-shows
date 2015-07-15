var pourHouse = require('../venues/pour-house')
  , tinRoof = require('../venues/tin-roof')

exports.index = function(req, res) {
  tinRoof(function(time) {
    res.render('index', {title:'chsShows', tinRoof:time})
  })
}