var assert = require('assert');
describe('Angel', function() {
	var angel = null;
	var accessToken = "b8a93c9ae8a66c16f77c734a2eb0f423d7f906964948087c";
	this.timeout(50000);
	beforeEach(function() {
		angel = require('../lib/main.js')('dbb9c3878a9ddbe0fe76fb2e7ae13c1bc5b95ebd0421b2a2', 'cea006ffd06f4b390f2107d7f323c39690d1da9be919bbc7');
		angel.setAccessToken(accessToken);
	});
	describe('#jobs/list', function() {
		it('should return jobs data', function(done) {
			angel.jobs.list().then(function(body) {
				
				assert.equal(1, body.page);
				done();
			});
		});
	});
	describe('#jobs/tag', function() {
		it('should return job data from the tag', function(done) {
			angel.jobs.tag('1622').then(function(body) {
				//console.log(body);
				assert.equal(1, body.page);
				done();
			});
		});
	});	
	describe('#jobs/job', function() {
		it('should return job data', function(done) {
			angel.jobs.job('79700').then(function(body) {
				done();
			}).catch(function(){
				assert.equal(true, false);
				done();
			});
		});
		it('should return job data', function(done) {
			angel.jobs.get('79700').then(function(body) {
				done();
			});
		});
	});
	describe('#jobs/startup', function() {
		it('should return job data from the startup', function(done) {
			angel.jobs.startup('334473').then(function(body) {				
				assert.equal(false, isNaN(body.length));
				done();
			}).catch(function(){
				assert.equal(true, false);
			});
		});
	});
});