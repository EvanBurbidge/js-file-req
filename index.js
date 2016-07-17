var fs = require('fs');

module.exports = function(dir){

  var obj = {};
      obj.routes = [];
      obj.name = "";

  obj.getFileNames = function(dir){

      var self = this;

      fs.readdirSync(dir).forEach(function(file){

          if(file === 'index.js') return;

          var ext = file.substr(file.length - 3);

          if(ext !== '.js'){

            self.name = "./" + file;
            self.routes.push(self.name);

          }else{

              self.name = "./" + file.substr(0, file.indexOf("."));
              self.routes.push(self.name);
          }
      })
  };

    obj.getFileNames(dir);

    return obj.routes;
};