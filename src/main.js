(function() {
	// Creates an object based in the HTML Element prototype
	var el = Object.create(HTMLElement.prototype);

	// Fires when an instance of the element is created
	el.createdCallback = function() {

		// gather attributes
		var src = this.getAttribute("src");
		// create shadowRoot
		var shadow = this.createShadowRoot();
		// set options
		var options = {
			renderTarget: shadow,
			silentRender: true, // this is required to avoid an infinite loop (triggering createdCallback on .show() )
			//url: "../assets/html/construct.asset.html"// use template html instead...
		};
		if(length) options.length = parseInt(length, 10);
		options.string = this.innerHTML;
		// ...
		options.el = this;
		// instantiate view
		//if( !this.view ) this.view = new Construct.Asset( options );

	};

	// Fires when an instance was inserted into the document
	el.attachedCallback = function() {};

	// Fires when an instance was removed from the document
	el.detachedCallback = function() {
		this.view.destroy();
	};

	// Fires when an attribute was added, removed, or updated
	el.attributeChangedCallback = function(attr, oldVal, newVal) {};

	var el = Object.create(HTMLElement.prototype);
	document.registerElement('construct-asset', {
		prototype: el,
		extends: "asset"
	});
}());
