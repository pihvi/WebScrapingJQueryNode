var request = require('request'),
        jsdom = require('jsdom');

request({uri:'http://ri.fi'}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var window = jsdom.jsdom(body).createWindow();
        jsdom.jQueryify(window, "https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js", function() {
            console.log(window.jQuery("title").text());
        });
    }
});