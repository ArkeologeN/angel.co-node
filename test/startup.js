var assert = require('assert');
describe('Angel', function() {
	var angel = null;
	var accessToken = "b8a93c9ae8a66c16f77c734a2eb0f423d7f906964948087c";
	this.timeout(50000);
	beforeEach(function() {
		angel = require('../lib/main.js')('6be2b1679fff3c6e8561cdab90b6aa039d8186f550c4bcf8', '73e7c7b0554603ff9613db3d8d923954c0b7194c102e9597');
		angel.setAccessToken(accessToken);
	});
	describe('#startup/filter', function() {
		it('should return startup data when startup exists', function(done) {
			angel.startups.filter({
				filter : "raising"
			}).then(function(body) {
				assert.equal(1, body.page);
				done();
			});;
		});
	});
	

	describe('#startup/startup', function() {

		it('should return startup data when startup exists [using promise]', function(done) {
			angel.startups.startup('6702').then(function(body) {
				assert.equal(6702, body.id);
				done();
			});
		});

		it('should return startup data when startup exists [using callback]', function(done) {
			angel.startups.startup('6702', function(err, body) {
				assert.equal(6702, JSON.parse(body).id);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.startups.startup('6702', {
				'include_details': 'investor'
			}).then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});


	describe('#startup/roles', function() {

		it('should return startup roles data when startup exists [using promise]', function(done) {
			angel.startups.roles('6702').then(function(body) {
				assert.equal(1, body.page);
				done();
			});
		});

		it('should return startup roles data  when startup exists [using callback]', function(done) {
			angel.startups.roles('6702', function(err, body) {
				assert.equal(1, JSON.parse(body).page);
				done();
			});
		});
	});

	describe('#startup/followers', function() {

		it('should return startup followers data when startup exists [using promise]', function(done) {
			angel.startups.followers('6702').then(function(body) {
				assert.equal(1, body.page);
				done();
			});
		});

		it('should return startup followers data  when startup exists [using callback]', function(done) {
			angel.startups.followers('6702', function(err, body) {
				assert.equal(1, JSON.parse(body).page);
				done();
			});
		});

	});

	describe('#startup/followers/ids', function() {

		it('should return startup followers data when startup exists [using promise]', function(done) {
			angel.startups.followers('6702', true).then(function(body) {
				assert.equal(1, body.page);
				done();
			});
		});

		it('should return startup followers data  when startup exists [using callback]', function(done) {
			angel.startups.followers('6702', true, function(err, body) {
				assert.equal(1, JSON.parse(body).page);
				done();
			});
		});

	});

	describe('#startup/comments', function() {

		it('should return startup comments data when startup exists [using promise]', function(done) {
			angel.startups.comments('6702').then(function(body) {
				assert.equal(false, isNaN(body.length));
				done();
			});
		});

		it('should return startup comments data  when startup exists [using callback]', function(done) {
			angel.startups.comments('6702', function(err, body) {
				assert.equal(false, isNaN(JSON.parse(body).length));
				done();
			});
		});
	});	
});