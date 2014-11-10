define([], function() {
	var topResizer = function (window, initialEvent) {
		this.window = window;
		this.initialSize = {
			width: window.width,
			height: window.height + initialEvent.originalEvent.pageY
		};
	};

	topResizer.prototype.resize = function(finalEvent) {
		var width,
			height,
			x,
			y;

		width = this.initialSize.width;
		height = this.initialSize.height - finalEvent.originalEvent.pageY;

		this.window.resize(width, height);


		x = finalEvent.pageX - this.window._moving.x;
		y = finalEvent.pageY - this.window._moving.y;

		this.window.move(x, y);

		return {
			width: width,
			height: height
		};
	};

	return topResizer;
});