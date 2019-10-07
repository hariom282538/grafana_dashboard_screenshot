var express = require('express');
var bodyParser = require('body-parser');

// create express app
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Grafana Dashboard Screenshot Capturing Automation"});
});

require('./app/routes/automation.routes.js')(app);

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});
