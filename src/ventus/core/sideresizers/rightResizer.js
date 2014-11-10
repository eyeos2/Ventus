define([], function() {
	var RightResizer = function (window, initialEvent) {
		this.window = window;
		this.initialSize = {
			width: window.width - initialEvent.originalEvent.pageX,
			height: window.height
		};
	};

	RightResizer.prototype.resize = function(finalEvent) {

		var width = this.initialSize.width + finalEvent.originalEvent.pageX;
		var height = this.initialSize.height;

		this.window.resize(width, height);

		return {
			width: width,
			height: height
		};
	};

	return RightResizer;
});