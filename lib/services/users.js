/**
 * Created by arkeologen on 12/17/13.
 */

var util = require('util')
    , Inherits = require('../inherits')
    , _ = require('lodash')


var User = function User() {
    Inherits(this);
    this.me = function(accessToken, cb) {
        this.createCall('GET', 'me', accessToken, cb);
    };

    return this;
}.bind(this);

module.exports = User;