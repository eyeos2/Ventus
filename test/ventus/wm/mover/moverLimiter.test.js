define(['ventus/wm/mover/moverLimiter'], function(MoverLimiter) {
	suite('MoverLimiter suite', function() {
		var moverLimiter, space , window, offset;

		setup(function () {
			space = {
				width: function(){
					return 1400
				},
				height: sinon.stub().returns(1200)
			};
			window = {
				width: 100,
				height: 100
			};
			offset = null;
			moverLimiter = new MoverLimiter(space, window, offset);
		});

		function placeWindowAndExecute(xPos, yPos) {
			moverLimiter.window.x = xPos || 0;
			moverLimiter.window.y = yPos || 0;
			return moverLimiter.checkOutOfBounds();
		}

		//left
		test('checkOutOfBounds when x position is out of bounds in the left side should return true', function() {
			var res = placeWindowAndExecute(-200);
			assert.equal(res, true);
		});

		test("checkOutOfBounds when x position is out of bounds in the left side should move window's x position to correct place", function() {
			placeWindowAndExecute(-200);
			assert.equal(moverLimiter.window.x, -69);
		});

		//right
		test('checkOutOfBounds when x position is out of bounds in the right side should return true', function() {
			var res = placeWindowAndExecute(1500);
			assert.equal(res, true);
		});

		test("checkOutOfBounds when x position is out of bounds in the right side should move window's x position to correct place", function() {
			placeWindowAndExecute(1500);
			assert.equal(moverLimiter.window.x, 1369);
		});

		//top
		test('checkOutOfBounds when y position is out of bounds in the top side should return true', function() {
			var res = placeWindowAndExecute(0, -900);
			assert.equal(res, true);
		});

		test("checkOutOfBounds when y position is out of bounds in the top side should move window's y position to correct place", function() {
			placeWindowAndExecute(0, -900);
			assert.equal(moverLimiter.window.y, 1);
		});

		//down
		test('checkOutOfBounds when y position is out of bounds in the down side should return true', function() {
			var res = placeWindowAndExecute(0, 1600);
			assert.equal(res, true);
		});

		test("checkOutOfBounds when y position is out of bounds in the down side should move window's y position to correct place", function() {
			placeWindowAndExecute(0, 1600);
			assert.equal(moverLimiter.window.y, 1169);
		});

		//corner
		test('checkOutOfBounds when x and y position is out of bounds should fix both positions', function() {
			placeWindowAndExecute(-200, 1600);
			assert.equal(moverLimiter.window.x, -69);
			assert.equal(moverLimiter.window.y, 1169);
		});


		//bugfix
		test("checkOutOfBounds when wm-space is resized should recalculate bounds correctly", function() {
			space.height.onSecondCall().returns(200);
			placeWindowAndExecute(0, 1600);
			assert.equal(moverLimiter.window.y, 169);
		});

	});

});