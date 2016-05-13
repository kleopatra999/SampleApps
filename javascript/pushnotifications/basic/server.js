
var express = require('express');
var app = express();
var path = require('path');
//var CB = require('cloudboost');

//CB.CloudApp.init('awvnhhvdjqof','96df1c77-96f2-402a-b98c-2c1a49d39b18');
//
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.set('port', process.env.PORT || 1450);

var server = app.listen(app.get('port'), function() {
	console.log("my new server on PORT:"+app.get('port'));
});
