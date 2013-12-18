/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 */
var util = require('util')
    , Inherits = require('../inherits')
    , _ = require('lodash')
    , url = require('url');

var Messages = function() {
    Inherits(this);

    this.list = function(options, cb) {
        this.createCall('GET', url.format({
            pathname: 'messages',
            query: options
        }), cb);
    };

    this.message = function(threadId, options, cb) {
        this.createCall('GET', url.format({
            pathname: 'messages/' + threadId,
            query: options
        }), cb);
    };

    this.create = function(options, cb) {
        this.createCall('POST', url.format({
            pathname: "messages",
            query: options
        }), cb);
    };

    this.mark = function(threadIds,options, cb) {
        this.createCall('POST', url.format({
            pathname: "messages/mark?thread_ids=" + threadIds.join(','),
            query: options
        }), cb);
    };

    return this;
}.bind(this);

module.exports = Messages;