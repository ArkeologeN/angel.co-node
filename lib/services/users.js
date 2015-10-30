/**
 * Created by arkeologen on 12/17/13.
 */

var util = require('util'),
    Inherits = require('../inherits'),
    _ = require('lodash'),
    url = require('url')


var User = function User() {
    Inherits(this);
    this.me = function(accessToken, cb) {
        var url = 'me';
        if (_.isFunction(accessToken) || _.isUndefined(accessToken)) {
            cb = accessToken;
            accessToken = null;
        } else {
            url += '?access_token=' + accessToken;
        }
        return this.createCall('GET', url, cb);
    };

    this.user = function(id, options, cb) {
        if (_.isFunction(options)) {
            cb = options;
        }


        return this.createCall('GET', url.format({
            pathname: 'users/' + id,
            query: options
        }), cb);
    };

    this.roles = function(id, cb) {
        return this.createCall('GET', 'users/' + id + "/roles", cb);
    };

    this.batch = function(ids, cb) {
        return this.createCall('GET', 'users/batch?ids=' + ids.join(','), cb);
    };

    this.search = function(options, cb) {
        return this.createCall('GET', url.format({
            pathname: 'users/search',
            query: options
        }), cb);
    };

    this.tags = function(tagId, options, cb) {
        return this.createCall('GET', url.format({
            pathname: 'tags/' + tagId + "/users",
            query: options
        }), cb);
    };

    this.followers = function(id, byIds, cb) {
        var url = 'users/' + id + "/followers";
        if (_.isBoolean(byIds) && _.isFunction(cb))
            url += "/ids";

        if (_.isFunction(byIds))
            cb = byIds;

        return this.createCall('GET', url, cb);
    };

    this.following = function(id, byIds, cb) {
        var url = 'users/' + id + "/following";
        if (_.isBoolean(byIds) && _.isFunction(cb))
            url += "/ids";

        if (_.isFunction(byIds))
            cb = byIds;

        return this.createCall('GET', url, cb);
    };

    return this;
}.bind(this);

module.exports = User;