
define([
	'ventus/core/sideresizers/topResizer'
],

function(topResizer) {
	var sideResizerFactory = {
		map: {
			'top': topResizer
		},

		getInstance: function(type, window, event) {
			return new this.map[type](window, event);
		}
	};


	var Resizer =  function (window, event, type) {
		this.window = window;
		this.event = event;
		this.sideResizer = sideResizerFactory.getInstance(type, window, event);
	}

	Resizer.prototype.resize = function(event) {
		this.sideResizer.resize(event);
	};
	return Resizer;
});
