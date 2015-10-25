var assert = require('assert');
describe('Angel', function() {
	var angel = null;
	var accessToken = "b8a93c9ae8a66c16f77c734a2eb0f423d7f906964948087c";
	this.timeout(500000);
	beforeEach(function() {
		angel = require('../lib/main.js')('dbb9c3878a9ddbe0fe76fb2e7ae13c1bc5b95ebd0421b2a2', 'cea006ffd06f4b390f2107d7f323c39690d1da9be919bbc7');
		angel.setAccessToken(accessToken);
	});
	describe('#startup/filter', function() {
		it('should return startup data when startup exists', function(done) {
			angel.startups.filter({
				filter : "raising"
			}).then(function(body) {
				assert.equal('https://angel.co/hamza-waqas', body.angellist_url);
				done();
			});;
		});
	});

	describe('#startup/startup', function() {

		it('should return startup data when startup exists [using promise]', function(done) {
			angel.startups.startup('6702', {
				'include_details': 'investor'
			}).then(function(body) {
				assert.equal('https://angel.co/hamza-waqas', body.angellist_url);
				done();
			});
		});

		it('should return startup data when startup exists [using callback]', function(done) {
			angel.startups.startup('6702', {
				'include_details': 'investor'
			}, function(err, body) {
				assert.equal('https://angel.co/hamza-waqas', JSON.parse(body).angellist_url);
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

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.startups.roles('6702').then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
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

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.startups.followers('6702').then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
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

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.startups.followers('6702', true).then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});

	describe('#startup/comments', function() {

		it('should return startup comments data when startup exists [using promise]', function(done) {
			angel.startups.comments('6702').then(function(body) {
				assert.equal(1, body.page);
				done();
			});
		});

		it('should return startup comments data  when startup exists [using callback]', function(done) {
			angel.startups.comments('6702', function(err, body) {
				console.log();
				assert.equal(1, JSON.parse(body).page);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.startups.comments('6702').then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});	

});