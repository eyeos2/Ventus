
define([
	'ventus/wm/resizer/sideresizers/topResizer',
	'ventus/wm/resizer/sideresizers/topLeftResizer',
	'ventus/wm/resizer/sideresizers/topRightResizer',
	'ventus/wm/resizer/sideresizers/leftResizer',
	'ventus/wm/resizer/sideresizers/rightResizer',
	'ventus/wm/resizer/sideresizers/bottomResizer',
	'ventus/wm/resizer/sideresizers/bottomLeftResizer',
	'ventus/wm/resizer/sideresizers/bottomRightResizer'
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
