/**
 * Created by arkeologen on 12/17/13.
 */

var util = require('util')
    , Inherits = require('../inherits')


var User = function User() {
    Inherits(this);
    this.me = function() {
        this.createCall();
        return '> You finally got me!';
    };

    
    return this;
}.bind(this);

module.exports = User;