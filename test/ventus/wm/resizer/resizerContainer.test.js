define([
		'ventus/wm/resizer/resizerContainer',
		'ventus/wm/mover/moverContainer'
	],
	function (ResizerContainer, MoverContainer) {
		suite('ResizerContainer suite', function () {
			var sut, window, space;
			setup(function () {
				window = {
					x: 50,
					y: 50,
					z: 1003,
					width: 400,
					height: 700
				};
				space = {
					append: function () {}
				};
				sut = new ResizerContainer(space, window);
			});

			test('assert is an instance of ResizerContainer and its parent MoverContainer', sinon.test(function(){
			    assert.isTrue(sut instanceof ResizerContainer);
			    assert.isTrue(sut instanceof MoverContainer);
			}));

			suite('resize', function(){
				function exercise(w, h) {
					return sut.resize(w, h);
				}

				test('should set the widht and height of the passed params', sinon.test(function(){
				    exercise(8, 9);
					assert.equal(sut.width, 8);
					assert.equal(sut.height, 9);
				}));
			});

		});

	});