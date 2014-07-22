define(['ventus/wm/mover/moverLimiter'], function(MoverLimiter) {
	suite('MoverLimiter suite', function() {
		var moverLimiter, space , window, offset;

		setup(function () {
			space = {
				offset: function(){
					return {
						top: 0,
						left: 0
					}
				},
				width: function(){
					return 1400
				},
				height: function(){
					return 1200
				}
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
			return moverLimiter.isOutOfBounds();
		}

		//left
		test('isOutOfBounds when x position is out of bounds in the left side should return true', function() {
			var res = placeWindowAndExecute(-200);
			assert.equal(res, true);
		});

		test("isOutOfBounds when x position is out of bounds in the left side should move window's x position to correct place", function() {
			placeWindowAndExecute(-200);
			assert.equal(moverLimiter.window.x, -69);
		});

		//right
		test('isOutOfBounds when x position is out of bounds in the right side should return true', function() {
			var res = placeWindowAndExecute(1500);
			assert.equal(res, true);
		});

		test("isOutOfBounds when x position is out of bounds in the right side should move window's x position to correct place", function() {
			placeWindowAndExecute(1500);
			assert.equal(moverLimiter.window.x, 1369);
		});

		//top
		test('isOutOfBounds when y position is out of bounds in the top side should return true', function() {
			var res = placeWindowAndExecute(0, -900);
			assert.equal(res, true);
		});

		test("isOutOfBounds when y position is out of bounds in the top side should move window's y position to correct place", function() {
			placeWindowAndExecute(0, -900);
			assert.equal(moverLimiter.window.y, 1);
		});

		//down
		test('isOutOfBounds when y position is out of bounds in the down side should return true', function() {
			var res = placeWindowAndExecute(0, 1600);
			assert.equal(res, true);
		});

		test("isOutOfBounds when y position is out of bounds in the down side should move window's y position to correct place", function() {
			placeWindowAndExecute(0, 1600);
			assert.equal(moverLimiter.window.y, 1169);
		});
	});

});