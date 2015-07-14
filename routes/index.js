var pourHouse = require('../venues/pour-house')
  , tinRoof = require('../venues/tin-roof')

exports.index = function(req, res) {
  tinRoof()
  res.render('index', {title:'chsShows', content: 'ayy lmao'})
}