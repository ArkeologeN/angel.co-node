/**
 * @author  Mateus Freira <mateus.freira@gmail.com>
 */
var util = require('util'),
    Inherits = require('../inherits'),
    _ = require('lodash'),
    url = require('url');

var Jobs = function() {
    Inherits(this);
    this.get = function(id, options, cb) {
        if(_.isFunction(options)){
            cb = options;
            options = {};
        }
        this.createCall('GET', url.format({
            pathname: 'jobs/'+id,
            query: options
        }), cb);
    }
    this.list = function(options, cb) {
        if(_.isFunction(options)){
            cb = options;
            options = {};
        }
        this.createCall('GET', url.format({
            pathname: 'jobs',
            query: options
        }), cb);
    };
    this.startup = function(startupId, options,cb) {
        if(_.isFunction(options)){
            cb = options;
            options = {};
        }
        this.createCall('GET',
            url.format({
                pathname: 'startups/' + startupId + '/jobs',
                query: options
            }), cb);
    };
    this.tag = function(tagId, options, cb) {
        if(_.isFunction(options)){
            cb = options;
            options = {};
        }
        this.createCall('GET', url.format({
            pathname: 'tags/' + tagId + "/jobs",
            query: options
        }), cb);
    };
    return this;
}.bind(this);

module.exports = Jobs;