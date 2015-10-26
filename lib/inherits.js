/**
 * Created by arkeologen on 12/17/13.
 */

var _ = require('lodash'),
    request = require('request'),
    util = require('util'),
    config = require('../config'),
    urlUtil = require('url'),
    Q = require('q');

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
        //console.log(url)
        return url;
    };

    this.createCall = function(method, url, options, cb) {
        var deferred = Q.defer();
        if (_.isFunction(options)) {
            cb = options;
            options = {};
        }
        var parameters = {
            url: util.format(API_URL, formatUrl(url, this.getAccessToken())),
            method: method
        };
        request(parameters, function(err, response, body) {
            var objBody = body ? JSON.parse(body) : {};
            //console.log(err, body);
            if(err || objBody.error){
                deferred.reject(objBody);
            }else{
                deferred.resolve(objBody);
            }
            if(cb){
                return cb(err, body);
            }
        });
        return deferred.promise;
    };

    _.merge(subClass, this);
    return this;
}.bind(this);

module.exports = Handler;