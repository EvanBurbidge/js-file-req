module.exports = function(app){

	app.get("/test", function(req, resp){
		resp.send("This is the ('/test') route");
	});

}