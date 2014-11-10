define([], function() {
	var TopRightResizer = function (window, initialEvent) {
		this.window = window;
		this.initialSize = {
			width: window.width - initialEvent.originalEvent.pageX,
			height: window.height + initialEvent.originalEvent.pageY
		};
	};

	TopRightResizer.prototype.resize = function(finalEvent) {
		var width,
			height,
			ignoredHeight = 0,
			y;

		width = this.initialSize.width + finalEvent.originalEvent.pageX;
		height = this.initialSize.height - finalEvent.originalEvent.pageY;

		this.window.resize(width, height);


		if (height < this.window.minHeight) {
			ignoredHeight = this.window.minHeight - height;
		}

		y = finalEvent.pageY - this.window._moving.y - ignoredHeight;
		this.window.move(null, y);

		return {
			width: width,
			height: height
		};
	};

	return TopRightResizer;
});