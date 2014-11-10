define([
	'ventus/wm/resizer/sideresizers/resizerMovement'
], function(resizerMovement) {
	var TopLeftResizer = function (window, initialEvent) {
		this.window = window;

		this.initialSize = {
			width: window.width + initialEvent.originalEvent.pageX,
			height: window.height + initialEvent.originalEvent.pageY
		};

		this.initialPosition = window.toLocal({
			x: initialEvent.originalEvent.pageX,
			y: initialEvent.originalEvent.pageY
		});
	};

	TopLeftResizer.prototype.resize = function(finalEvent) {
		var width,
			height;

		width = this.initialSize.width - finalEvent.originalEvent.pageX;
		height = this.initialSize.height - finalEvent.originalEvent.pageY;

		this.window.resize(width, height);


		var finalPosition = {
			x: finalEvent.originalEvent.pageX,
			y: finalEvent.originalEvent.pageY
		};
		var ignoredSize = resizerMovement.calculateIgnoredSize(this.window,  width, height);
		var resizeMovement = resizerMovement.calculateResizeMovement(this.initialPosition, finalPosition, ignoredSize);
		this.window.move(resizeMovement.x, resizeMovement.y);

		return {
			width: width,
			height: height
		};
	};

	return TopLeftResizer;
});