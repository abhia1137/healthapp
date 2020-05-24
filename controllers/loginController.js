var loginService = require('../services/loginService')

exports.loginUsesr = function(user) {
    return loginService.loginUsesr(user);
}

exports.signUp = function(userData) {
    return loginService.signUp(userData);
}


exports.getPrograms = function() {
    return loginService.getPrograms();
};

exports.getAllTrainers = function() {
    return loginService.getAllTrainers();
}
exports.getSessionDetails = function() {
    return loginService.getsessionDetails();
}
exports.insertSessions = function(data) {
    return loginService.insertSessions(data);
}