define([
		'ventus/wm/windowmanager',
		'src/ventus/wm/window'
	],
	function (Windowmanager, Window) {

		suite('Windowmanager suite', function () {
			var sut,
				dummyWindow;
			setup(function () {
				sut = new Windowmanager();
				dummyWindow = sinon.stub(new Window({}, sut));
			});


			suite('onDesktopResize', function(){
				function exercise(w, h) {
					return sut.onDesktopResized(w, h);
				}

				test('should call resizeMaximizedWindowsToContent for each window with desktop size', sinon.test(function(){
					addWindow(dummyWindow);
				    exercise(8, 9);
					assert(dummyWindow.resizeMaximizedWindowsToContent.calledWithExactly(8, 9));
				}));
			});



			function addWindow (window) {
				sut.windows.push(window);
			}

		});

	});
