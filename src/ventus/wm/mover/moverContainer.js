define([
		'ventus/core/view',
		'less!ventus/css/movercontainer'
],
function(view) {
	'use strict';

	var MoverContainer = function (space, window) {
		this.window = window;
		this.space = space;
		this.el = view('<div class="mover-container"></div>');

		this.width =  null;
		this.height =  null;
		this.x =  null;
		this.y =  null;
		this.z =  null;
	};

	MoverContainer.prototype = {
		set x(value) {
			this.el.css('left', value);
		},

		set y(value) {
			this.el.css('top', value);
		},

		set z(value) {
			this.el.css('z-index', value);
		},

		get x() {
			return parseInt(this.el.css('left'), 10);
		},

		get y() {
			return parseInt(this.el.css('top'), 10);
		},
		get z() {
			return parseInt(this.el.css('z-index'), 10);
		},

		set width(value) {
			this.el.width(value);
		},

		get width() {
			return parseInt(this.el.width(), 10);
		},

		set height(value) {
			this.el.height(value);
		},

		get height() {
			return parseInt(this.el.height(), 10);
		}
	};

	MoverContainer.prototype.add = function () {
		this.space.append(this.el);
		this.x = this.window.x;
		this.y = this.window.y;
		this.z = this.window.z;

		this.width = this.window.width;
		this.height = this.window.height;
	};

	MoverContainer.prototype.remove = function () {
		this.el.remove();
	};

	MoverContainer.prototype.move = function (x, y) {
		this.x = x;
		this.y = y;
		return this;
	};

	return MoverContainer;
});
