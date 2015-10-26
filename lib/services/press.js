/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util'),
    Inherits = require('../inherits'),
    _ = require('lodash'),
    url = require('url');

var Press = function() {
    Inherits(this);

    this.startup = function(startupId, cb) {
        return this.createCall('GET', 'press?startup_id=' + startupId, cb);
    };

    this.press = function(id, cb) {
        return this.createCall('GET', 'press/' + id, cb);
    };
    return this;
}.bind(this);

module.exports = Press;