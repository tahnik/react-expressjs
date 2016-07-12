var express = require('express');
var app = express();
var index = require('./routes/index');

app.use('/bin', express.static(__dirname + '/bin'));
app.use('/stylesheets', express.static(__dirname + '/public/stylesheets'));

app.use('/', index);

app.listen(3000, function () {
	console.log('Hello World listening on port 3000!');
});
