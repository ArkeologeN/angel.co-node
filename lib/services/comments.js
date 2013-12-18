/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util')
    , Inherits = require('../inherits')
    , _ = require('lodash')
    , url = require('url');

var Comments = function() {
    Inherits(this);

    this.get = function(options, cb) {
        this.createCall('GET', url.format({
            pathname: "comments",
            query: options
        }), cb);
    };

    this.create = function(comment, options, cb) {
        this.createCall('POST', url.format({
            pathname: "comments",
            query: _.merge(options, {comment: comment})
        }), cb);
    };

    this.delete = function(id, cb) {
        this.createCall('DELETE', 'comments/' + id, cb);
    };

    return this;
}.bind(this);

module.exports = Comments;