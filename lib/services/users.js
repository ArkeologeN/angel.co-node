/**
 * Created by arkeologen on 12/17/13.
 */

var util = require('util')
    , Inherits = require('../inherits')
    , _ = require('lodash')
    , url = require('url')


var User = function User() {
    Inherits(this);
    this.me = function(accessToken, cb) {
        this.createCall('GET', 'me?access_token=' + accessToken, cb);
    };

    this.user = function(id, options, cb) {
        if (_.isFunction(options)) {
            cb = options;
        }


        this.createCall('GET', url.format({
            pathname: 'users/'+id,
            query: options
        }), cb);
    };

    this.roles = function(id, cb) {
        this.createCall('GET', 'users/' + id + "/roles", cb);
    };

    this.batch = function(ids, cb) {
        this.createCall('GET', 'users/batch?ids=' + ids.join(','), cb);
    };

    this.search = function(options, cb) {
        this.createCall('GET', url.format({
            pathname: 'users/search',
            query: options
        }), cb);
    };

    this.tags = function(tagId, options, cb) {
        this.createCall('GET', url.format({
            pathname: 'tags/' + tagId + "/users",
            query: options
        }), cb);
    };

    return this;
}.bind(this);

module.exports = User;