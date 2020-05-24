var mongoose = require('./dbconnection').getMongoos();
var models = {};
exports.init = function() {
    models.logins = require(__dirname + '/daos/login')(mongoose);
    models.programs = require(__dirname + '/daos/program')(mongoose);
    models.trainers = require(__dirname + '/daos/trainers')(mongoose);
    models.sessionDetails = require(__dirname + '/daos/sessionDetails')(mongoose);
    models.sessions = require(__dirname + '/daos/sessions')(mongoose);
    return models;
}

exports.getModels = function() {
    return models;
}