(function(){
	// exit now if contruct hasn't already been defined
	if(typeof construct == "undefined") return;

	construct.asset = function( options ){
		// options is an array...
		options = options || [];
		//console.log(options);

		// lookup options
		if( options.indexOf("obj") > -1 ) construct.config.deps.push("three.obj");
		if( options.indexOf("bin") > -1 ) construct.config.deps.push("three.bin");

		// save options
		Object.extend(construct.options, { asset: options });

		return function( e ){
			//console.log( "update" );
		};
	};

	// Dependencies
	construct.config = Object.extend(construct.config, {
		"paths": {
			"three.obj" : [
				"//rawgithub.com/constructjs/asset/master/deps/three.OBJMTLLoader"
			],
			"three.bin" : [
				"//rawgithub.com/constructjs/asset/master/deps/three.BinaryLoader"
			]
		},
		"shim": {
			"three.obj": {
				"deps": [
					"three-js"
				]
			},
			"three.bin": {
				"deps": [
					"three-js"
				]
			}
		}
	});

})();

// Views

// Add models after dependencies are loaded
construct.promise.add(function(){

	// add the appropariate events based on the asset options initialized
	var types = construct.options.asset || [];
	var events = {};
	// lookup asset types
	if( types.indexOf("obj") > -1 ) {
	}
	if( types.indexOf("bin") > -1 ) {
	}

	// in case APP.Mesh has already been defined by a plugin
	var Main3D = APP.Views.Main3D || APP.View;

	APP.Views.Main3D = Main3D.extend({

		options: {
		},

		events: events,
/*
		initialize: function( options ){

			return Main3D.prototype.initialize.call(this, options);
		},
*/
		load: function( objects ){
			console.log("asset loaded:", objects);
		}

	});

	// Helpers


});
