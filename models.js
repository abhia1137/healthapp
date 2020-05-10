var mongoose = require('./dbconnection').getMongoos();
var models = {};
exports.init = function() {
    models.login = require('./daos/login')(mongoose);

    return models;
}

exports.getModels = function() {
    return models;
}