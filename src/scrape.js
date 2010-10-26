var request = require('request'),
        jsdom = require('jsdom'),
        sys = require('sys');

request({uri:'http://www.google.com'}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var window = jsdom.jsdom(body).createWindow();
        jsdom.jQueryify(window, 'path/to/jquery.js', function (window, jquery) {
            // jQuery is now loaded on the jsdom window created from 'body'
            jQuery('.someClass').each(function () { /* Your custom logic */
            });
        });
    }
});