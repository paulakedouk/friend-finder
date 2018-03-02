// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Express server
var app = express();

// Initial port
var PORT = process.env.PORT || 3000;

// Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./app/public'));

// Router
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
