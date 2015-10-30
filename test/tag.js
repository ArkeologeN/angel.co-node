var assert = require('assert');
describe('Angel', function() {
	var angel = null;
	var accessToken = "b8a93c9ae8a66c16f77c734a2eb0f423d7f906964948087c";
	this.timeout(50000);
	beforeEach(function() {
		angel = require('../lib/main.js')('6be2b1679fff3c6e8561cdab90b6aa039d8186f550c4bcf8', '73e7c7b0554603ff9613db3d8d923954c0b7194c102e9597');
		angel.setAccessToken(accessToken);
	});
	
	describe('#tag/tag', function() {
		it('should return tag data when tag exists [using promise]', function(done) {
			angel.tags.tag('1622').then(function(body) {
				assert.equal('1622', body.id);
				done();
			});
		});

		it('should return tag data when tag exists [using callback]', function(done) {
			angel.tags.tag('1622', function(err, body) {
				assert.equal('1622', JSON.parse(body).id);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.tags.tag('1622').then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});


	describe('#tag/children', function() {

		it('should return tag children data when tag exists [using promise]', function(done) {
			angel.tags.children('1622').then(function(body) {
				assert.equal(1, body.page);
				done();
			});
		});

		it('should return tag children data  when tag exists [using callback]', function(done) {
			angel.tags.children('1622', function(err, body) {
				assert.equal(1, JSON.parse(body).page);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.tags.children('1622').then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});

	describe('#tag/parents', function() {

		it('should return tag parents data when tag exists [using promise]', function(done) {
			angel.tags.parents('1622').then(function(body) {
				assert.equal(1, body.page);
				done();
			});
		});

		it('should return tag parents data  when tag exists [using callback]', function(done) {
			angel.tags.parents('1622', function(err, body) {
				assert.equal(1, JSON.parse(body).page);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.tags.parents('1622').then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});

	describe('#tag/startups', function() {

		it('should return tag startups data when tag exists [using promise]', function(done) {
			angel.tags.startups('1622').then(function(body) {
				assert.equal(1, body.page);
				done();
			});
		});

		it('should return tag startups data  when tag exists [using callback]', function(done) {
			angel.tags.startups('1622', function(err, body) {
				assert.equal(1, JSON.parse(body).page);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.tags.startups('1622').then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});	

	describe('#tag/users', function() {

		it('should return tag users data when tag exists [using promise]', function(done) {
			angel.tags.users('1622').then(function(body) {
				assert.equal(1, body.page);
				done();
			});
		});

		it('should return tag users data  when tag exists [using callback]', function(done) {
			angel.tags.users('1622', function(err, body) {
				assert.equal(1, JSON.parse(body).page);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.tags.users('1622').then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	}); 

});