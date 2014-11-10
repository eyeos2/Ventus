define([], function() {
	var BottomRightResizer = function (window, initialEvent) {
		this.window = window;
		this.initialSize = {
			width: window.width - initialEvent.originalEvent.pageX,
			height: window.height - initialEvent.originalEvent.pageY
		};
	};

	BottomRightResizer.prototype.resize = function(finalEvent) {
		var width,
			height;

		width = this.initialSize.width + finalEvent.originalEvent.pageX;
		height = this.initialSize.height + finalEvent.originalEvent.pageY;

		this.window.resize(width, height);

		return {
			width: width,
			height: height
		};
	};

	return BottomRightResizer;
});