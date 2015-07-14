var request = require('request')
  , cheerio = require('cheerio')
  , url = 'https://www.reverbnation.com/widget_code/html_widget/venue_1008205?widget_id=52&pwc[show_map]=0'

module.exports = function(req, res) {
  request(url, function(err, response, data) {
    var $ = cheerio.load(data)
    var details = $('#container .listPanel .jspContainer .jspPane .calendar .detail')
    console.log(details)
    $('ol .detail').each(function(i, eventInfo) {
      //console.log(i)
      //console.log(eventInfo)
    })
  })
}