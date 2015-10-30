var assert = require('assert');
describe('Angel', function() {
	var angel = null;
	var accessToken = "b8a93c9ae8a66c16f77c734a2eb0f423d7f906964948087c";
	this.timeout(50000);
	beforeEach(function() {
		angel = require('../lib/main.js')('dbb9c3878a9ddbe0fe76fb2e7ae13c1bc5b95ebd0421b2a2', 'cea006ffd06f4b390f2107d7f323c39690d1da9be919bbc7');
		angel.setAccessToken(accessToken);
	});
	describe('#user/search', function() {
		it('should return user data when user exists', function(done) {
			angel.users.search({
				'slug': "hamza-waqas"
			}).then(function(body) {
				assert.equal('https://angel.co/hamza-waqas', body.angellist_url);
				done();
			});;
		});
	});



	describe('#user/me', function() {
		it('should return user data when user exists [using promise]', function(done) {
			angel.users.me().then(function(body) {
				assert.equal('https://angel.co/mateus-freira', body.angellist_url);
				done();
			});
		});

		it('should return user data when user exists [using callback]', function(done) {
			angel.users.me(function(err, body) {
				assert.equal('https://angel.co/mateus-freira', JSON.parse(body).angellist_url);
				done();
			});
		});
		it('should return user data when user exists [using callback] and access token', function(done) {
			angel.users.me(accessToken, function(err, body) {
				assert.equal('https://angel.co/mateus-freira', JSON.parse(body).angellist_url);
				done();
			});
		});

		it('should return error when accessToken is wrong [using callback]', function(done) {
			angel.users.me('some', function(err, body) {
				assert.equal('access_denied', JSON.parse(body).error);
				done();
			});
		});
		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.users.me().then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});


	describe('#user/user', function() {

		it('should return user data when user exists [using promise]', function(done) {
			angel.users.user('467664', {
				'include_details': 'investor'
			}).then(function(body) {
				assert.equal('https://angel.co/hamza-waqas', body.angellist_url);
				done();
			});
		});

		it('should return user data when user exists [using callback]', function(done) {
			angel.users.user('467664', {
				'include_details': 'investor'
			}, function(err, body) {
				assert.equal('https://angel.co/hamza-waqas', JSON.parse(body).angellist_url);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.users.user('467664', {
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


	describe('#user/roles', function() {

		it('should return user roles data when user exists [using promise]', function(done) {
			angel.users.roles('467664').then(function(body) {
				assert.equal(1, body.page);
				done();
			});
		});

		it('should return user roles data  when user exists [using callback]', function(done) {
			angel.users.roles('467664', function(err, body) {
				assert.equal(1, JSON.parse(body).page);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.users.roles('467664').then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});



	describe('#user/batch', function() {

		it('should return users data when user exists [using promise]', function(done) {
			angel.users.batch(['155', 671]).then(function(body) {
				assert.equal(2, body.length);
				done();
			});
		});

		it('should return users data  when user exists [using callback]', function(done) {
			angel.users.batch(['155', 671], function(err, body) {
				assert.equal(2, JSON.parse(body).length);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.users.batch(['155', 671]).then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});

	describe('#user/followers', function() {

		it('should return user followers data when user exists [using promise]', function(done) {
			angel.users.followers('467664').then(function(body) {
				assert.equal(1, body.page);
				done();
			});
		});

		it('should return user followers data  when user exists [using callback]', function(done) {
			angel.users.followers('467664', function(err, body) {
				assert.equal(1, JSON.parse(body).page);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.users.followers('467664').then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});

	describe('#user/followers/ids', function() {

		it('should return user followers data when user exists [using promise]', function(done) {
			angel.users.followers('467664', true).then(function(body) {
				assert.equal(1, body.page);
				done();
			});
		});

		it('should return user followers data  when user exists [using callback]', function(done) {
			angel.users.followers('467664', true, function(err, body) {
				assert.equal(1, JSON.parse(body).page);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.users.followers('467664', true).then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});

	describe('#user/following', function() {

		it('should return user following data when user exists [using promise]', function(done) {
			angel.users.following('467664').then(function(body) {
				assert.equal(1, body.page);
				done();
			});
		});

		it('should return user following data  when user exists [using callback]', function(done) {
			angel.users.following('467664', function(err, body) {
				assert.equal(1, JSON.parse(body).page);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.users.following('467664').then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});

	describe('#user/following/ids', function() {

		it('should return user following data when user exists [using promise]', function(done) {
			angel.users.following('467664', true).then(function(body) {
				assert.equal(1, body.page);
				done();
			});
		});

		it('should return user following data  when user exists [using callback]', function(done) {
			angel.users.following('467664', true, function(err, body) {
				assert.equal(1, JSON.parse(body).page);
				done();
			});
		});

		it('should return error when accessToken is wrong [using promise]', function(done) {
			angel.setAccessToken('some');
			angel.users.following('467664', true).then(function(body) {
				assert.equal(true, false);
				done();
			}).catch(function(error) {
				assert.equal(true, true);
				done();
			});
		});
	});

});