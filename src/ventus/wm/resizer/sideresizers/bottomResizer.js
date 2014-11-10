define([], function() {
	var BottomResizer = function (window, initialEvent) {
		this.window = window;
		this.initialSize = {
			width: window.width,
			height: window.height - initialEvent.originalEvent.pageY
		};
	};

	BottomResizer.prototype.resize = function(finalEvent) {
		var width = this.initialSize.width;
		var height = this.initialSize.height + finalEvent.originalEvent.pageY;

		this.window.resize(width, height);

		return {
			width: width,
			height: height
		};
	};

	return BottomResizer;
});