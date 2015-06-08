define([
		'ventus/wm/windowmanager',
		'src/ventus/wm/window'
	],
	function (Windowmanager, Window) {

		suite('Window suite', function () {
			var sut,
				dummyWindowManager;
			setup(function () {
				dummyWindowManager = sinon.stub(new Windowmanager());
				sut = new Window({}, dummyWindowManager);
			});


			suite('resizeMaximizedWindowsToContent', function(){
				var originalHeight, originalWidth, desktopWidth, desktopHeight;
				setup(function () {
					originalHeight = 600;
					originalWidth = 600;
					desktopWidth = 348;
					desktopHeight = 229;
					sut.width = originalWidth;
					sut.height = originalHeight;
				});
				function exercise(w, h) {
					return sut.resizeMaximizedWindowsToContent(w, h);
				}

				suite('when maximized', function(){
					setup(function () {
						sut.maximized = true;
					});
					test('should resize the window size to the correct size ', sinon.test(function(){
						exercise(desktopWidth, desktopHeight);
						assert.equal(sut.width, desktopWidth);
						assert.equal(sut.height, desktopHeight);
					}));
				});
				suite('when not maximized', function(){
					setup(function () {
						sut.maximized = false;
					});
					test('should not do anything', sinon.test(function(){
						exercise(desktopWidth, desktopHeight);
						assert.equal(sut.width, originalWidth);
						assert.equal(sut.height, originalHeight);
					}));
				});

				suite('replaceContent', function(){
					var newContent, oldContent;

					setup(function() {
						newContent = $('<div>my new content</div>');
						oldContent = $('<div>my old content</div>');
						sut.$content.append(oldContent);
					});

					function exerciceReplaceContent(el) {
						sut.replaceContent(el);
					}

					test('should add provided content to current content', sinon.test(function(){
						exerciceReplaceContent(newContent);
						assert.deepEqual(sut.$content.find(newContent)[0], newContent[0]);
					}));


					test('should remove oldcontent from current content', sinon.test(function(){
						exerciceReplaceContent(newContent);
						assert.notEqual(sut.$content.find(oldContent)[0], oldContent[0]);
					}));
				});
			});


		});

	});
