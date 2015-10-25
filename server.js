var express = require('express');
var app = express();
var path = require('path'); 


app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
	var dest = 'index.html';
	res.sendFile(dest, { root: __dirname });
});




var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('GenSpire started at http://%s:%s', host, port);
});
