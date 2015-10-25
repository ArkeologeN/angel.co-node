/**
 * Created by arkeologen on 12/17/13.
 */

var _ = require('lodash'),
    request = require('request'),
    util = require('util'),
    config = require('../config'),
    urlUtil = require('url');

var Handler = function(subClass) {
    var API_URL = config.api_url + "%s";
    var ACCESS_TOKEN_KEY = 'access_token';

    var formatUrl = function(url, access_token) {
        if (url.indexOf('?') === -1) {
            url += "?";
        }else{
            url += "&";
        }
        if(url.indexOf(ACCESS_TOKEN_KEY) === -1){
            url += ACCESS_TOKEN_KEY+"="+access_token;
        }
        return url;
    };

    this.createCall = function(method, url, options, cb) {
        if (_.isFunction(options)) {
            cb = options;
            options = {};
        }
        var parameters = {
            url: util.format(API_URL, formatUrl(url, this.getAccessToken())),
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