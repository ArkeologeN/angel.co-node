/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util')
    , Inherits = require('../inherits')
    , _ = require('lodash')
    , url = require('url');

var Feeds = function() {
    Inherits(this);

    this.consume = function(options, cb) {
        return this.createCall('GET', url.format({
            pathname: 'feed',
            query: options
        }), cb);
    };

    return this;
}.bind(this);

module.exports = Feeds;