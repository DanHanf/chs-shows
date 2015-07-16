var request = require('request')
  , cheerio = require('cheerio')
  , url = 'https://www.reverbnation.com/venue/tinroofwashley'

module.exports = function(cb) {
  var date = '2015-07-17'//new Date().toISOString().slice(0,10)
  request(url, function(err, response, body) {
    var $ = cheerio.load(body)
    var details = $('.show_nugget').html()
    var time = $('.show_nugget .shows_date_').html()
    time = time.split('@')[0]

    // Look at the metadata to find tonight's show (if it exists)
    var meta = $('meta')
    var keys = Object.keys(meta)
    keys.forEach(function(k) {
      if(meta[k].attribs && meta[k].attribs.itemprop 
        && meta[k].attribs.itemprop === 'startDate' && meta[k].attribs.content.slice(0,10) === date) {
        //console.log(meta[k].attribs.content.slice(0,10))
        console.log(k)
        //console.log(meta[k].next.next.parent.children[0])
        console.log(meta[k])
        console.log(meta[k].next.next.parent.children[0].next.attribs.content)
      }
    })
    //console.log(meta)
    //console.log(time)
    cb(time)
  })
}