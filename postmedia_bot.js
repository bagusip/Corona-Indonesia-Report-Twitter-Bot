console.log("bot is starting ! ");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var fs = require('fs');

var b64content = fs.readFileSync('./sketch/output.png', { encoding: 'base64' })
// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "The main man char aznabel himself."
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = { status: 'Posting image with processing from node.js ' + ' (' + new Date  + '', media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log(data)
      })
    }
  })
})