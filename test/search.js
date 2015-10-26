var assert = require('assert');
describe('Angel', function() {
	var angel = null;
	var accessToken = "b8a93c9ae8a66c16f77c734a2eb0f423d7f906964948087c";
	this.timeout(50000);
	beforeEach(function() {
		angel = require('../lib/main.js')('dbb9c3878a9ddbe0fe76fb2e7ae13c1bc5b95ebd0421b2a2', 'cea006ffd06f4b390f2107d7f323c39690d1da9be919bbc7');
		angel.setAccessToken(accessToken);
	});
	describe('#search/search', function() {
		it('should works with search entity', function(done) {
			angel.search.search({
				query: "hamza-waqas",
				type: "User"
			}).then(function(body) {
				
				assert.equal(1, body.length);
				done();
			});
		});
		it('should works with search by slugs', function(done) {
			angel.search.search({
				query: "hamza-waqas"
			}).then(function(body) {
				
				assert.equal(1, body.length);
				done();
			});
		});
	});
});