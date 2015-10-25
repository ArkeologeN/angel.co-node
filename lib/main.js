/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var config = require('../config')
    , _ = require('lodash')
    , services = [
        'comments', 'feeds', 'follows',
        'intros', 'jobs','likes', 'messages',
        'paths', 'press', 'reviews',
        'search', 'startup_roles', 'startup_updates',
        'startups', 'tags', 'users'
    ];

function Main(appId, appSecret) {
    module.exports['auth'] = require('./auth')(appId, appSecret)

    _.forEach(services, function(service) {
        module.exports[service] = require('./services/' + service)();
    });
    return module.exports;
}

module.exports = Main;