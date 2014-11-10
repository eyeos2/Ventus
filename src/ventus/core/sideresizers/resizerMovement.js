define([], function() {
	var resizerMovement = {

		calculateIgnoredSize : function (window, width, height) {
			var ignoredWidth = 0,
				ignoredHeight = 0;

			if (width < window.minWidth) {
				ignoredWidth = window.minWidth - width;
			}
			if (height < window.minHeight) {
				ignoredHeight = window.minHeight - height;
			}
			return {
				width: ignoredWidth,
				height: ignoredHeight
			}
		},

		calculateResizeMovement: function (initialPosition, finalPosition, ignoredSize) {
			return {
				x: finalPosition.x - initialPosition.x - ignoredSize.width,
				y: finalPosition.y - initialPosition.y - ignoredSize.height
			}
		}
	};

	return resizerMovement;
});