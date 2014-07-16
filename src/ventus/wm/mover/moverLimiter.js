define([],

	function () {
		'use strict';

		var MoverLimiter = function (space, window, offset) {
			this.space = space;
			this.window = window;
			this.offset = offset || 30; //px

			var spaceBounds = space.offset();
			this.bounds = {
				top: spaceBounds.top + this.offset,
				left: spaceBounds.left + this.offset,
				bottom: spaceBounds.top + space.height() - this.offset,
				right: spaceBounds.left + space.width() - this.offset
			}
		};

		MoverLimiter.prototype.isOutOfLimitsLimit = function (event) {
			if (event.originalEvent.pageX < this.bounds.left ||
				event.originalEvent.pageX > this.bounds.right ||
				event.originalEvent.pageY < this.bounds.top ||
				event.originalEvent.pageY > this.bounds.bottom)
			{
				return true;
			}
			return false;
		};

		return MoverLimiter;
	});
