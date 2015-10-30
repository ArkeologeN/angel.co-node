/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 * @type {function(this:*)}
 */
var util = require('util'),
    Inherits = require('../inherits'),
    _ = require('lodash'),
    url = require('url');

var Search = function() {
    Inherits(this);

    this.search = function(options, cb) {
        return this.createCall('GET', url.format({
            pathname: 'search',
            query: options
        }), cb);
    };

    this.slugs = function(options, cb) {
        return this.createCall('GET', url.format({
            pathname: 'search/slugs',
            query: options
        }), cb);
    }

    return this;
}.bind(this);

module.exports = Search;