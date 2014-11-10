define([], function() {
	var BottomLeftResizer = function (window, initialEvent) {
		this.window = window;
		this.initialSize = {
			width: window.width + initialEvent.originalEvent.pageX,
			height: window.height - initialEvent.originalEvent.pageY
		};
	};

	BottomLeftResizer.prototype.resize = function(finalEvent) {
		var width,
			height,
			ignoredWidth = 0,
			x;

		width = this.initialSize.width - finalEvent.originalEvent.pageX;
		height = this.initialSize.height + finalEvent.originalEvent.pageY;

		this.window.resize(width, height);


		if (width < this.window.minWidth) {
			ignoredWidth = this.window.minWidth - width;
		}

		x = finalEvent.pageX - this.window._moving.x - ignoredWidth;
		this.window.move(x, null);

		return {
			width: width,
			height: height
		};
	};

	return BottomLeftResizer;
});