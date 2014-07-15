define([], function() {
	var topResizer = function (window, initialEvent) {
		this.window = window;
		this.initialSize = {
			width: window.width,
			height: window.height + initialEvent.originalEvent.pageY
		};
	};

	topResizer.prototype.resize = function(finalEvent) {
		this.window.resize(
			this.initialSize.width,
			this.initialSize.height - finalEvent.originalEvent.pageY
		);
	};

	return topResizer;
});