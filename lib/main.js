/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var config = require('../config'),
    _ = require('lodash'),
    services = [
        'comments', 'feeds', 'follows',
        'intros', 'jobs', 'likes', 'messages',
        'paths', 'press', 'reviews',
        'search', 'startup_roles', 'startup_updates',
        'startups', 'tags', 'users'
    ];

function Main(appId, appSecret) {
    var ACCESS_TOKEN;
    this.setAccessToken = function(access_token) {
        ACCESS_TOKEN = access_token;
    };
    this.getAccessToken = function(){
        return ACCESS_TOKEN;
    }

    module.exports['auth'] = require('./auth')(appId, appSecret)

    _.forEach(services, function(service) {
        module.exports[service] = require('./services/' + service)();
        module.exports[service].getAccessToken = this.getAccessToken;
    });
    module.exports['setAccessToken'] = this.setAccessToken;
    return module.exports;
}

module.exports = Main;