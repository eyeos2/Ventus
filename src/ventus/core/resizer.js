
define([
	'ventus/core/sideresizers/topResizer',
	'ventus/core/sideresizers/topLeftResizer',
	'ventus/core/sideresizers/topRightResizer',
	'ventus/core/sideresizers/leftResizer',
	'ventus/core/sideresizers/rightResizer',
	'ventus/core/sideresizers/bottomResizer',
	'ventus/core/sideresizers/bottomLeftResizer',
	'ventus/core/sideresizers/bottomRightResizer'
],

function(topResizer, TopLeftResizer, TopRightResizer, LeftResizer, RightResizer, BottomResizer, BottomLeftResizer, BottomRightResizer) {
	var sideResizerFactory = {
		map: {
			'top': topResizer,
			'top-left': TopLeftResizer,
			'top-right': TopRightResizer,
			'left': LeftResizer,
			'right': RightResizer,
			'bottom': BottomResizer,
			'bottom-left': BottomLeftResizer,
			'bottom-right': BottomRightResizer
		},

		getInstance: function(type, window, event) {
			return new this.map[type](window, event);
		}
	};


	var Resizer =  function (window, event, type) {
		this.window = window;
		this.event = event;
		this.sideResizer = sideResizerFactory.getInstance(type, window, event);
	};

	Resizer.prototype.resize = function(event) {
		return this.sideResizer.resize(event);
	};

	return Resizer;
});
