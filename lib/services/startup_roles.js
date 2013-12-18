/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 * @type {function(this:*)}
 */
var util = require('util')
    , Inherits = require('../inherits')
    , _ = require('lodash')
    , url = require('url');

var StartupRoles = function() {
    Inherits(this);

    this.get = function(options, cb) {
        this.createCall('GET', url.format({
            pathname: 'startup_roles',
            query: _.merge(options, {v: 1})
        }), cb);
    };

    return this;
}.bind(this);

module.exports = StartupRoles;