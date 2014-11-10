define([], function() {
	var LeftResizer = function (window, initialEvent) {
		this.window = window;
		this.initialSize = {
			width: window.width + initialEvent.originalEvent.pageX,
			height: window.height
		};
	};

	LeftResizer.prototype.resize = function(finalEvent) {
		var width,
			height,
			x,
			y;

		width = this.initialSize.width - finalEvent.originalEvent.pageX;
		height = this.initialSize.height;

		this.window.resize(width, height);


		x = finalEvent.pageX - this.window._moving.x;
		y = finalEvent.pageY - this.window._moving.y;
		this.window.move(x, y);

		return {
			width: width,
			height: height
		};
	};

	return LeftResizer;
});