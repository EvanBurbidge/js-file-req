# js-file-req

This small module allows you a fast shortcut in order to require all files in a directory without needing to type and 
retype the fs functionality.


#Installation 

1. CD into your application directory: `cd myApp`
3. Run NPM Install on the package: `npm install js-req-file --save` 
4. Require it in your index for a test: `var requirer = require('js-req-save')`
5. Test functionality : `console.log(requirer(__dirname))`
6. Check console and you should see an array of files in your directory

#Usage

1. Define your module folder and create an index.js file.
2. Inside this index js file require the requirer function `var requirer = require('js-req-save')`;
3. To generate the array of files call the function `requirer(__dirname)`
4. Once you get the array back either use a forEach or a map function on the result. 

```javascript

  requirer(__dirname).forEach(function(file){
  	require(file)(app)
  });

  requirer(__dirname).map(function(file){
  	require(file)(app)
  });

```

5. If you have a mix of objects and functions being output by your modules the following example should work
```javascript
	requirer(__dirname).map(function(data){
		var type = require(data);
		if(typeof(type) === 'function'){
			type(app);
		}
	})

```