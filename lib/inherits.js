/**
 * Created by arkeologen on 12/17/13.
 */

var _ = require('lodash')
    , request = require('request')
    , util = require('util')
    , config = require('../config');

var Handler = function(subClass) {
    this.createCall = function(method, url, options, cb) {
        var parameters = {};

        if (_.isFunction(options)) {
            cb = options;
            options = {};
        }

        parameters = {
            url: util.format(config.api_url + "%s", url),
            method: method
        };

        console.log(parameters.url);

        request(parameters, function(err, response, body) {
            return cb(err, body);
        });
    };

    _.merge(subClass, this);
    return this;
}.bind(this);

module.exports = Handler;