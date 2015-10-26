/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util'),
    Inherits = require('../inherits'),
    _ = require('lodash'),
    url = require('url');

var StartupUpdates = function() {
    Inherits(this);

    this.get = function(options, cb) {
        return this.createCall('GET', url.format({
            pathname: 'status_updates',
            query: options
        }), cb);
    };

    this.create = function(options, cb) {
        return this.createCall('POST', url.format({
            pathname: 'status_updates',
            query: options
        }), cb);
    };

    this.trash = function(id, options, cb) {
        if(_.isFunction(options)){
            cb = options;
            options = {};
        }
        return this.createCall('DELETE', url.format({
            pathname: 'status_updates/' + id,
            query: options
        }), cb);
    };

    return this;
}.bind(this);

module.exports = StartupUpdates;