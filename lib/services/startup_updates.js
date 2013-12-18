/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util')
    , Inherits = require('../inherits')
    , _ = require('lodash')
    , url = require('url');

var StartupUpdates = function() {
    Inherits(this);

    this.get = function(options, cb) {
        this.createCall('GET', url.format({
            pathname: 'status_updates',
            query: options
        }), cb);
    };

    this.create = function(options, cb) {
        this.createCall('POST', url.format({
            pathname: 'status_updates',
            query: options
        }), cb);
    };

    this.trash = function(id, options, cb) {
        this.createCall('DELETE', url.format({
            pathname: 'status_updates/' + id,
            query: options
        }), cb);
    };

    return this;
}.bind(this);

module.exports = StartupUpdates;