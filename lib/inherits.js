/**
 * Created by arkeologen on 12/17/13.
 */

var _ = require('lodash')
var Handler = function(subClass) {
    this.createCall = function() {
        console.log('> Creating calll...,');
    };

    _.merge(subClass, this);
    return this;
}.bind(this);

module.exports = Handler;