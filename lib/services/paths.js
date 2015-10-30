/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util')
    , Inherits = require('../inherits')
    , _ = require('lodash')
    , url = require('url');

var Paths = function() {
    Inherits(this);

    this.path = function(options, cb) {
        // Handle Defaults - Get Better way later.
        options.user_ids = options.user_ids || [];
        options.startup_ids = options.startup_ids || [];

        // Change them in comma separated.
        options.user_ids = options.user_ids.join(',');
        options.startup_ids = options.startup_ids.join(',');

        return this.createCall('GET', url.format({
            pathname: 'paths',
            query: options
        }), cb);
    };

    return this;
}.bind(this);

module.exports = Paths;