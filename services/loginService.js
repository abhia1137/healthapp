var Q = require('q');
var loginModel = require('../models').getModels();
exports.loginUsesr = function() {
    var deferred = Q.defer();
    deferred.resolve({
        'email': 'abhi@gmail.com'
    })
    return deferred.promise;
}