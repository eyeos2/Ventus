define([],

	function () {
		'use strict';

		var MoverLimiter = function (space, window, offset) {
			this.space = space;
			this.window = window;
			this.offset = offset || 30; //px

			calculateBounds.call(this, space);
		};

		MoverLimiter.prototype.checkOutOfBounds = function () {
			calculateBounds.call(this, this.space);

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

		function calculateBounds(space) {
			this.bounds = {
				top: 0,
				left: this.offset,
				bottom: space.height() - this.offset,
				right: space.width() - this.offset
			}
		}

		return MoverLimiter;
	});
