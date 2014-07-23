define([],

	function () {
		'use strict';

		var MoverLimiter = function (space, window, offset) {
			this.space = space;
			this.window = window;
			this.offset = offset || 30; //px

			var spaceBounds = space.position();
			this.bounds = {
				top: spaceBounds.top,
				left: spaceBounds.left + this.offset,
				bottom: spaceBounds.top + space.height() - this.offset,
				right: spaceBounds.left + space.width() - this.offset
			}
		};

		MoverLimiter.prototype.checkOutOfBounds = function () {
			if (this.window.x <= this.bounds.left - this.window.width) {
				this.window.x = this.bounds.left - this.window.width + 1;
				return true;
			}
			else if (this.window.x > this.bounds.right) {
				this.window.x = this.bounds.right - 1;
				return true;
			}
			if (this.window.y < this.bounds.top) {
				this.window.y = this.bounds.top + 1;
				return true;
			} else if (this.window.y > this.bounds.bottom) {
				this.window.y = this.bounds.bottom - 1;
				return true;
			}

			return false;
		};

		return MoverLimiter;
	});
