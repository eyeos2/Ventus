/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define(function(require) {
	'use strict';

	var $ = require('$');
	var Window = require('ventus/wm/window');
	var view = require('ventus/core/view');
	var DefaultMode = require('ventus/wm/modes/default');
	var ExposeMode = require('ventus/wm/modes/expose');
	var FullscreenMode = require('ventus/wm/modes/fullscreen');

	var WindowManager = function ($baseElem) {
		var self = this;
		$baseElem = $baseElem || $(document.body);
		$baseElem.addClass('wm-space');
		this.el = $baseElem;

		this.$overlay = view('<div class="wm-overlay" />');
		$baseElem.prepend(this.$overlay);

		this.$overlay.css('z-index', this.baseZIndex-1);

		// Generate mode plugin actions wrapper
		this.actions.forEach(function(value){
			this[value] = (function(action) {
				return function() {
					if(this.currentMode.actions[action])
						this.currentMode.actions[action].apply(this, arguments);
				};
			}).call(this, value);
		}, this);

		// Launch register of every mode plugged-in
		for(var mode in this.modes) {
			if(this.modes.hasOwnProperty(mode) && this.modes[mode].register) {
				this.modes[mode].register.apply(this);
			}
		}

		this.windows = [];
		this.active = null;
		this.baseZIndex = 10000;

		this.mode = 'default';

		// Binding sub-functions to this object
		this.createWindow.fromQuery = this.createWindow.fromQuery.bind(this);
		this.createWindow.fromElement = this.createWindow.fromElement.bind(this);
		this._overlapping = false;
		this._unoverlapping = false;

		//bind mouseup event outside the document to the active window
		$(window).mouseup(function(e){
			if(self.active){
				self.active.events.space.mouseup.call(self.active, e);
			}
		});

		$(document).click(function(e){
			if(self.active){
				var activeWindowElem = self.active.el;

				if (!activeWindowElem.is(e.target) // if the target of the click isn't the activeWindowElem...
					&& activeWindowElem.has(e.target).length === 0) // ... nor a descendant of the activeWindowElem
				{
					self.active.blur();
				}
			}
		});
	};

	WindowManager.prototype = {
		actions: [
			'focus',
			'blur',
			'close',
			'maximize',
			'minimize',
			'restore',
			'select'
		],



		modes: {
			'default': DefaultMode,
			'expose': ExposeMode,
			'fullscreen': FullscreenMode
		},

		set mode(value) {

			var mode = this.modes[value];
			if(!mode || this._mode === value) return;

			// Unplug old system
			if (this._mode && this.currentMode.unplug)
				this.currentMode.unplug.apply(this);

			// Plug new mode system
			if(mode.plug)
				mode.plug.apply(this);

			this._mode = value;
		},

		get mode() {
			return this._mode;
		},

		get currentMode() {
			return this.modes[this._mode];
		},

		set overlay(value) {
			this.$overlay.css('opacity', value ? 0.8 : 0);
			this._overlay = value;
		},

		get overlay() {
			return this._overlay;
		},

		set nextWindowId (value) {

		},

		get nextWindowId () {
			var nextId = (this._lastWindowId || 0) + 1;
			this._lastWindowId = nextId;
			return 'ventus' + nextId;
		},

		addOverlaysToAllWindows: function() {
			if(!this._overlapping) {
				this._overlapping = true;
				for(var i = 0; i < this.windows.length; i++) {
					this.windows[i].doRenderOverlay();
				}
				this._overlapping = false;
			}
		},

		removeOverlaysToAllWindows: function() {
			if(!this._unoverlapping) {
				this._unoverlapping = true;
				for(var i = 0; i < this.windows.length; i++) {
					this.windows[i].doEraseOverlay();
				}
				this._unoverlapping = false;
			}
		},

		createWindow: function(options) {
			var win = new Window(options, this);

			win.id = this.nextWindowId;

			// Show 'default' mode
			this.mode = 'default';

			// Connect window signals to the manager listeners
			win.signals.on('focus', this._focus, this);
			win.signals.on('blur', this._blur, this);
			win.signals.on('closeDone', this._close, this);

			// Connect window signals to manager mode actions
			this.actions.forEach(function(action){
				win.signals.on(action, this[action], this);
			}, this);

			this.windows.push(win);

			win.space = this.el;

			win.focus();
			return win;
		},

		getWindowById: function (id) {
			for (var len = this.windows.length; len--;) {
				if (this.windows[len].id === id) {
					return this.windows[len];
				}
			}
		},

		/**
		 * Internal action always performed besides the mode definition
		 */
		_focus: function(win) {
			var index;

			if (this.active && this.active === win)
				return;

			if(this.active) {
				this.active.z = this.baseZIndex;
				this.active.blur();
			}

			// Reorder windows stack (@todo optimize this)
			index = this.windows.indexOf(win);
			this.windows.splice(index, 1); // Remove from array
			this.windows.push(win);

			win.z = this.baseZIndex + 1;

			this.active = win;
		},

		/**
		 * Internal action always performed besides the mode definition
		 */
		_blur: function(win) {
			if(this.active === win){
				this.active.z = this.baseZIndex;
				this.active = null;
			}
		},

		/**
		 * Internal action always performed besides the mode definition
		 */
		_close: function(win) {
			// Remove window from manager
			var id = this.windows.indexOf(win), len;
			if(id === -1) {
				console.log('Trying to close a window that doesn\'t exist in this window manager');
				return;
			}

			this.windows.splice(id, 1); // Remove from array
			len = this.windows.length;
			if(this.active && this.active === win) {
				this.active = (len !== 0) ? this.windows[len-1] : null;
				if (this.active)
					this.active.focus();
			}
		}
	};

	WindowManager.prototype.createWindow.fromQuery = function(selector, options) {
		options.content = view(selector);
		return this.createWindow(options);
	};

	WindowManager.prototype.createWindow.fromElement = function(element, options) {
		options.content = view(element);
		return this.createWindow(options);
	};

	return WindowManager;
});
