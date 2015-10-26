/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util'),
    Inherits = require('../inherits'),
    _ = require('lodash'),
    url = require('url');

var Reviews = function() {
    Inherits(this);

    this.get = function(id, cb) {
        return this.createCall('GET', 'reviews?user_id=' + id, cb);
    };

    this.review = function(id, cb) {
        return this.createCall('GET', 'reviews/' + id, cb);
    };

    return this;
}.bind(this);

module.exports = Reviews;