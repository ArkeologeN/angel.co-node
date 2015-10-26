var assert = require('assert');
describe('Angel', function() {
	var angel = null;
	var accessToken = "b8a93c9ae8a66c16f77c734a2eb0f423d7f906964948087c";
	this.timeout(50000);
	beforeEach(function() {
		angel = require('../lib/main.js')('6be2b1679fff3c6e8561cdab90b6aa039d8186f550c4bcf8', '73e7c7b0554603ff9613db3d8d923954c0b7194c102e9597');
		angel.setAccessToken(accessToken);
	});
	describe('#feeds/consume', function() {
		it('should return feeds data', function(done) {
			angel.feeds.consume({
				since: 1,
				personalized: 1
			}).then(function(body) {
				assert.equal(true, body.feed.length > 1);
				done();
			}).catch(function(){
				assert.equal(1, 0);
				done();
			});
		});
	});
});