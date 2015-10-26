/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util'),
    Inherits = require('../inherits'),
    _ = require('lodash'),
    url = require('url');


var Likes = function() {
    Inherits(this);

    this.likes = function(options, cb) {
        return this.createCall('GET', url.format({
            pathname: "likes",
            query: options
        }), cb);
    };

    this.like = function(options, cb) {
        return this.createCall('POST', url.format({
            pathname: "likes",
            query: options
        }), cb);
    };
    this.create = this.like;

    this.unlike = function(id, cb) {
        return this.createCall('POST', 'likes/' + id, cb);
    };
    this.trash = this.unlike;
    return this;
}.bind(this);

module.exports = Likes;