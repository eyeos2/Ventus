define([
	'ventus/wm/resizer/sideresizers/resizerMovement'
], function(resizerMovement) {
	var TopRightResizer = function (window, initialEvent) {
		this.window = window;

		this.initialSize = {
			width: window.width - initialEvent.originalEvent.pageX,
			height: window.height + initialEvent.originalEvent.pageY
		};

		this.initialPosition = window.toLocal({
			x: initialEvent.originalEvent.pageX,
			y: initialEvent.originalEvent.pageY
		});
	};

	TopRightResizer.prototype.resize = function(finalEvent) {
		var width = this.initialSize.width + finalEvent.originalEvent.pageX;
		var height = this.initialSize.height - finalEvent.originalEvent.pageY;

		this.window.resize(width, height);


		var finalPosition = {
			x: finalEvent.originalEvent.pageX,
			y: finalEvent.originalEvent.pageY
		};
		var ignoredSize = resizerMovement.calculateIgnoredSize(this.window,  width, height);
		var resizeMovement = resizerMovement.calculateResizeMovement(this.initialPosition, finalPosition, ignoredSize);
		this.window.move(null, resizeMovement.y);

		return {
			width: width,
			height: height
		};
	};

	return TopRightResizer;
});