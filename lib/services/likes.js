/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util')
    , Inherits = require('../inherits')
    , _ = require('lodash')
    , url = require('url');


var Likes = function() {
    Inherits(this);

    this.likes = function(options, cb) {
        this.createCall('GET', url.format({
            pathname: "likes",
            query: options
        }), cb);
    };

    this.create = function(options, cb) {
        this.createCall('POST', url.format({
            pathname: "likes",
            query: options
        }), cb);
    };

    this.trash = function(id, cb) {
        this.createCall('POST', 'likes/' + id, cb);
    };
    return this;
}.bind(this);

module.exports = Likes;