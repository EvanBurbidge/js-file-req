var express = require('express');
var reader = require('js-file-req');
var app = express();
var routes = require("./routes")(app);

app.get("/", function(req, resp){
	resp.send("test");
})


app.listen(5000);