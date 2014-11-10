define([], function() {
	var TopLeftResizer = function (window, initialEvent) {
		this.window = window;
		this.initialSize = {
			width: window.width + initialEvent.originalEvent.pageX,
			height: window.height + initialEvent.originalEvent.pageY
		};
	};

	TopLeftResizer.prototype.resize = function(finalEvent) {
		var width,
			height,
			ignoredWidth = 0,
			ignoredHeight = 0,
			x, y;

		width = this.initialSize.width - finalEvent.originalEvent.pageX;
		height = this.initialSize.height - finalEvent.originalEvent.pageY;

		this.window.resize(width, height);


		if (width < this.window.minWidth) {
			ignoredWidth = this.window.minWidth - width;
		}
		if (height < this.window.minHeight) {
			ignoredHeight = this.window.minHeight - height;
		}

		x = finalEvent.pageX - this.window._moving.x - ignoredWidth;
		y = finalEvent.pageY - this.window._moving.y - ignoredHeight;

		this.window.move(x, y);

		return {
			width: width,
			height: height
		};
	};

	return TopLeftResizer;
});