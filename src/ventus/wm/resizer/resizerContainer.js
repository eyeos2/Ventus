define([
		'ventus/wm/mover/moverContainer'
],
function(MoverContainer) {
	'use strict';

	var ResizerContainer = function (space, window) {
		MoverContainer.call(this, space, window);
	};

	ResizerContainer.prototype = Object.create(MoverContainer.prototype);


	ResizerContainer.prototype.resize = function(w, h) {
		this.width = w;
		this.height = h;
		return this;
	};

	ResizerContainer.prototype.toLocal = function(coord) {
		return {
			x: coord.x - this.x,
			y: coord.y - this.y
		};
	};

	return ResizerContainer;
});
