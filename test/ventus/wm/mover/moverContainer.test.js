define([
		'ventus/wm/mover/moverContainer',
		'ventus/core/view'
	],
	function (MoverContainer, view) {
		suite('MoverContainer suite', function () {
			var sut, window, space;
			setup(function () {
				window = {
					x: 50,
					y: 50,
					z: 1003,
					width: 400,
					height: 700,
					minWidth: 200,
					minHeight: 300
				};
				space = {
					append: function () {}
				};
				sut = new MoverContainer(space, window);
			});

			suite('add', function () {
				function exercise() {
					return sut.add();
				}

				test('should append the element to the space', sinon.test(function () {
					this.mock(space)
						.expects('append')
						.once()
						.withExactArgs(sut.el);

					exercise();
				}));

				test('should set the position of the view at the same place than the window', sinon.test(function () {
					exercise();
					assert.equal(sut.x, window.x);
					assert.equal(sut.y, window.y);
					assert.equal(sut.z, window.z+1);
				}));

				test('should set the size of the view to the same size than the window', sinon.test(function () {
					exercise();
					assert.equal(sut.width, window.width);
					assert.equal(sut.height, window.height);
				}));

				test('should set the min sizes of the view to the same size than the window', sinon.test(function () {
					exercise();
					assert.equal(sut.minWidth, window.minWidth);
					assert.equal(sut.minHeight, window.minHeight);
				}));


			});

			suite('remove', function () {
				function exercise() {
					return sut.remove();
				}

				test('should remove the element from the space', sinon.test(function(){
					this.mock(sut.el)
						.expects('remove')
						.once()
						.withExactArgs();

					exercise();
				}));
			});

			suite('move', function () {
				function exercise(x, y) {
					return sut.move(x, y);
				}

				test('should set the passed properties x and y', sinon.test(function(){
					exercise(11, 546);
					assert.equal(sut.x, 11);
					assert.equal(sut.y, 546);
				}));

				test('should set the passed position to the element', sinon.test(function(){
					exercise(11, 546);
					assert.equal(sut.el.css('left'), '11px');
					assert.equal(sut.el.css('top'), '546px');
				}));
			});


		});

	});
