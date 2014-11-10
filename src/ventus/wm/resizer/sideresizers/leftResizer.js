define([
	'ventus/wm/resizer/sideresizers/resizerMovement'
], function (resizerMovement) {
	var LeftResizer = function (window, initialEvent) {
		this.window = window;

		this.initialSize = {
			width: window.width + initialEvent.originalEvent.pageX,
			height: window.height
		};

		this.initialPosition = window.toLocal({
			x: initialEvent.originalEvent.pageX,
			y: initialEvent.originalEvent.pageY
		});
	};

	LeftResizer.prototype.resize = function(finalEvent) {
		var width = this.initialSize.width - finalEvent.originalEvent.pageX;
		var height = this.initialSize.height;

		this.window.resize(width, height);


		var finalPosition = {
			x: finalEvent.originalEvent.pageX,
			y: finalEvent.originalEvent.pageY
		};
		var ignoredSize = resizerMovement.calculateIgnoredSize(this.window,  width, height);
		var resizeMovement = resizerMovement.calculateResizeMovement(this.initialPosition, finalPosition, ignoredSize);

		this.window.move(resizeMovement.x, null);

		return {
			width: width,
			height: height
		};
	};

	return LeftResizer;
});