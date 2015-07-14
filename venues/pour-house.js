//
//
// pour house is blocking requests! come back to this later
//
//

var request = require('request')
  , cheerio = require('cheerio')
  , url = 'http://www.charlestonpourhouse.com/schedule/'

module.exports = function(req, res) {
  request(url, function(err, response, data) {
    console.log(data)
    var $ = cheerio.load(data)
    var titles = $('.eventtitle').html()
    console.log(titles)
  })
}