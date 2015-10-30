/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util')
    , Inherits = require('../inherits')
    , _ = require('lodash')
    , url = require('url');

var Intros = function() {
    Inherits(this);

    this.create = function(options, cb) {
        return this.createCall('POST', url.format({
            pathname: "intros",
            query: options
        }), cb);
    };
    return this;
}.bind(this);

module.exports = Intros;