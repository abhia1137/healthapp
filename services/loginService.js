var Q = require('q');
var loginModel = require('../models').getModels();
const jwt = require('jsonwebtoken');
let key = "5c7d4ab121b963b9f21ffe79dc05eb5dc5069ed0319cc879a20720a3c3e7588133c658aa4d92fb8ab9c0be8084dafb7327768b2109f6ba914e77ceafc0431f8f";
exports.loginUsesr = function(user) {
    var deferred = Q.defer();
    loginModel.logins.findOne({ $and: [{ 'email': user.email, 'password': user.password }] }, function(err, docs) {
        console.log('data', docs);
        if (docs) {
            let data = { name: user.email };
            let seckey = jwt.sign(data, key);
            deferred.resolve({
                err: err,
                result: docs,
                token: seckey
            });
        } else {
            deferred.resolve({
                err: err,
                result: "user not found",
            });
        }

    });
    return deferred.promise;
}

// "state":"punjab",
// 	"city":"Fazilka",
// 	"contactNo":"902331968",
// 	"firstname":"abhi",
// 	"lastname":"arora",
// 	"gender":"Male"


exports.signUp = function(userDetails) {
    // console.log('userDetails', userDetails)
    var deferred = Q.defer();
    if (!userDetails.email || !userDetails.password || !userDetails.state || !userDetails.city || !userDetails.contactNo || !userDetails.firstname || !userDetails.lastname || !userDetails.gender) {
        deferred.resolve({
            err: null,
            result: "Missing Required Fields",
            token
        });
    } else {
        let query = {
            email: userDetails.email,
            password: userDetails.password,
            state: userDetails.state,
            city: userDetails.city,
            contactNo: userDetails.contactNo,
            firstname: userDetails.firstname,
            lastname: userDetails.lastname,
            gender: userDetails.gender
        }

        let user = new loginModel.logins(userDetails);
        console.log('useremail', userDetails.email)
        loginModel.logins.findOne({ 'email': userDetails.email }, function(err, data) {
            console.log('err, data', err, data);
            if (!data) {
                let data = { name: user.email };
                let seckey = jwt.sign(data, key);
                user.save(query, function(err, data) {

                    deferred.resolve({
                        err: err,
                        result: "Signup Success",
                        token: seckey
                    });
                });
            } else {
                deferred.resolve({
                    err: null,
                    result: "User Already Exists"
                });
            }
        });
    }

    return deferred.promise;
};