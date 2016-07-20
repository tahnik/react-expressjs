var express = require('express');
var app = express();
var index = require('./routes/index');
app.use('/bin', express.static('./bin'));
app.use('/stylesheets', express.static('./public/stylesheets'));


app.use('/', index);
app.use('/view', index);

app.listen(3000, function () {
	console.log('Hello World listening on port 3000!');
});
