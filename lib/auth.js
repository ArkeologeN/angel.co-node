/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 * @since   17th December, 2013
 * @type {function(this:*)}
 */
var config = require('../config')
    , util = require('util')
    , _ = require('lodash')
    , request = require('request')

var Auth = function(appId, appSecret) {

    this.getAuthorizeUrl = function() {
        return util.format(
            config.auth_url + "?client_id=%s&scope=email comment message talent&response_type=code",
            appId);
    };

    this.authorize = function(cb) {
        request(this.getAuthorizeUrl());
    };

    this.requestAccessToken = function(code, cb) {
        request.post(
            util.format(
                config.token_url + "?client_id=%s&client_secret=%s&code=%s&grant_type=authorization_code",
                appId, appSecret, code
            ),
        function(err, response, body) {
            if ( err)
                return cb(err, null);

            // Parse and the Access Token here.
            cb(null, JSON.parse(body) || body);
        });
    };

    return this;
}.bind(this);

module.exports = Auth;