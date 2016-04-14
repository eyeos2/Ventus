
define([
	'ventus/wm/resizer/sideresizers/topResizer',
	'ventus/wm/resizer/sideresizers/topLeftResizer',
	'ventus/wm/resizer/sideresizers/topRightResizer',
	'ventus/wm/resizer/sideresizers/leftResizer',
	'ventus/wm/resizer/sideresizers/rightResizer',
	'ventus/wm/resizer/sideresizers/bottomResizer',
	'ventus/wm/resizer/sideresizers/bottomLeftResizer',
	'ventus/wm/resizer/sideresizers/bottomRightResizer',
	'ventus/wm/resizer/resizerContainer'
],

function(topResizer, TopLeftResizer, TopRightResizer, LeftResizer, RightResizer,
         BottomResizer, BottomLeftResizer, BottomRightResizer, ResizerContainer) {

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


	var Resizer =  function (window, event, type, resizerContainer) {
		this.window = window;
		this.event = event;
		this.resizerContainer = resizerContainer || new ResizerContainer(window.space, window);
		this.resizerContainer.add();
		this.sideResizer = sideResizerFactory.getInstance(type, this.resizerContainer, event);
		this.window.signals.emit('resizeStart');
	};

	Resizer.prototype.resize = function(event) {
		return this.sideResizer.resize(event);
	};

	Resizer.prototype.endResize = function() {
		this.window.move(this.resizerContainer.x, this.resizerContainer.y);
		this.window.resize(this.resizerContainer.width, this.resizerContainer.height);

		this.resizerContainer.remove();
		this.resizerContainer = null;
	};

	return Resizer;
});
