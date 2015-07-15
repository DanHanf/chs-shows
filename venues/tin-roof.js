var request = require('request')
  , cheerio = require('cheerio')
  , url = 'https://www.reverbnation.com/venue/tinroofwashley'

module.exports = function(cb) {
  request(url, function(err, response, body) {
    var $ = cheerio.load(body)
    var details = $('.show_nugget').html()
    var time = $('.show_nugget .shows_date_').html()
    var time = time.split('@')[1]
    console.log(time)
    //console.log(time)
    cb(time)
  })
}