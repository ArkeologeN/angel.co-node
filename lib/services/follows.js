/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util'),
    Inherits = require('../inherits'),
    _ = require('lodash'),
    url = require('url');

var Follows = function() {
    Inherits(this);

    this.follow = function(options, cb) {
        return this.createCall('POST', url.format({
            pathname: "follows",
            query: options
        }), cb);
    };

    this.unfollow = function(options, cb) {
        return this.createCall('DELETE', url.format({
            pathname: "follows",
            query: options
        }), cb);
    };

    this.relationship = function(options, cb) {
        return this.createCall('GET', url.format({
            pathname: "follows/relationship",
            query: options
        }), cb);
    };

    this.batch = function(ids, cb) {
        return this.createCall('GET', 'follows/batch?ids=' + ids.join(','), cb);
    };

    return this;
}.bind(this);

module.exports = Follows;