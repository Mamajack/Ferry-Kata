var assert = require('assert');
var car = require ("../car.js")
describe('ferry kata', function(){
	it('should create a car', function(Done){
		var Thecar = new car("blue", 2);
		assert.equal(Thecar.color, "blue");
		assert.equal(Thecar.numberofpassengers, 2);
	});
});