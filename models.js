var mongoose = require('./dbconnection').getMongoos();
var models = {};
exports.init = function() {
    models.logins = require(__dirname + '/daos/login')(mongoose);

    return models;
}

exports.getModels = function() {
    return models;
}