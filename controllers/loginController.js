var loginService = require('../services/loginService')

exports.loginUsesr = function() {
    console.log('LoginController')
    return loginService.loginUsesr();
}