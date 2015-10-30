/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util')
    , Inherits = require('../inherits')
    , _ = require('lodash')
    , url = require('url');

var Tags = function() {
    Inherits(this);

    this.tag = function(id, cb) {
        return this.createCall('GET', 'tags/' + id, cb);
    };

    this.children = function(id, cb) {
        return this.createCall('GET', 'tags/' + id + "/children", cb);
    };

    this.parents = function(id, cb) {
        return this.createCall('GET', 'tags/' + id + "/parents", cb);
    };

    this.startups = function(id, cb) {
        return this.createCall('GET', 'tags/' + id + "/startups", cb);
    };

    this.users = function(id, cb) {
        return this.createCall('GET', 'tags/' + id + "/users", cb);
    };

    return this;
}.bind(this);

module.exports = Tags;