'use strict';
define([
	'ventus/wm/resizer/sideresizers/topLeftResizer',
	'ventus/wm/resizer/sideresizers/resizerMovement'
], function (TopLeftResizer, resizerMovement) {
	suite('topLeftResizer.test suite', function () {
		var sut,
			window,
			initalEvent;

		setup(function () {
			window = {
				width: 600,
				height: 888,
				resize: function (){},
				move: function (){},
				toLocal: function (coords){return coords}
			};

			initalEvent = {
				originalEvent: {
					pageX: 59,
					pageY: 90
				}
			};
			sut = new TopLeftResizer(window, initalEvent);
		});


		suite('#resize', function () {
			var finalEvent;
			setup(function () {
				finalEvent = {
					originalEvent: {
						pageX: 200,
						pageY: 190
					}
				}
			});
			function exercise (finalEvent) {
				return sut.resize(finalEvent);
			}

			test('should call to window.resize with correct args', sinon.test(function () {
				this.mock(sut.window)
					.expects('resize')
					.once()
					.withExactArgs(459, 788);
				exercise(finalEvent);
			}));


			test('should call to window.move with correct args', sinon.test(function () {
				this.mock(sut.window)
					.expects('move')
					.once()
					.withExactArgs(141, 100);
				exercise(finalEvent);
			}));


		});

	});

});