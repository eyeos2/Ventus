define([
		'ventus/wm/resizer/resizer',
		'ventus/wm/resizer/resizerContainer'
	],
	function (Resizer, ResizerContainer) {
		suite('Resizer suite', function () {
			var sut,
				window,
				event,
				space,
				resizerContainer;

			setup(function () {
				window = {
					x: 50,
					y: 50,
					z: 1003,
					width: 400,
					height: 700,
					move: function (){},
					resize: function (){},
					signals: {
						emit : function() {}
					}
				};
				event = {
					originalEvent: {
						pageX: 59,
						pageY: 90
					}
				};
				space = {
					append: function () {}
				};

				resizerContainer = new ResizerContainer(space, window);

				sut = new Resizer(window, event, 'top', resizerContainer);
			});

			suite('resize', function(){
				function exercise(event) {
					return sut.resize(event);
				}

			    test('should call sideResizer.resize', sinon.test(function(){
			        this.mock(sut.sideResizer)
				        .expects('resize')
				        .once()
				        .withExactArgs(event);

				    exercise(event);
			    }));
			});


			suite('endResize', function(){
				function exercise() {
					return sut.endResize();
				}

				test('should call window move with correct params', sinon.test(function(){
				    this.mock(window)
					    .expects('move')
					    .once()
					    .withExactArgs(resizerContainer.x, resizerContainer.y);

					exercise();
				}));

				test('should call window resize with correct params', sinon.test(function(){
				    this.mock(window)
					    .expects('resize')
					    .once()
					    .withExactArgs(resizerContainer.width, resizerContainer.height);

					exercise();
				}));

				test('should call resizerContainer remove', sinon.test(function(){
				    this.mock(resizerContainer)
					    .expects('remove')
					    .once();

					exercise();
				}));

			});

		});

	});