var loginService = require('../services/loginService')

exports.loginUsesr = function(user) {
    return loginService.loginUsesr(user);
}

exports.signUp = function(userData) {
    return loginService.signUp(userData);
}