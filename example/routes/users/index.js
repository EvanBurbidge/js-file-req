var reader = require("js-file-req");

module.exports = function(app){
	
	reader(__dirname).map(function(data){
		require(data)(app);
	});

}