/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util'),
    Inherits = require('../inherits'),
    _ = require('lodash'),
    url = require('url');

var Startups = function() {
    Inherits(this);

    this.startup = function(id, cb) {
        return this.createCall('GET', 'startups/' + id, cb);
    };
    this.get = this.startup;
    this.comments = function(id, cb) {
        return this.createCall('GET', 'startups/' + id + '/comments', cb);
    };

    this.roles = function(id, options, cb) {
        return this.createCall('GET', url.format({
            pathname: 'startups/' + id + '/roles',
            query: options
        }), cb);
    };

    this.filter = function(options, cb) {
        return this.createCall('GET', url.format({
            pathname: 'startups',
            query: options
        }), cb);
    };

    this.tags = function(tagId, options, cb) {
        return this.createCall('GET', url.format({
            pathname: 'tags/' + tagId + "/startups",
            query: options
        }), cb);
    };

    this.followers = function(id, byIds, cb) {
        var url = 'startups/' + id + "/followers";
        if (_.isBoolean(byIds) && _.isFunction(cb))
            url += "/ids";

        if (_.isFunction(byIds))
            cb = byIds;

        return this.createCall('GET', url, cb);
    };

    return this;
}.bind(this);

module.exports = Startups;