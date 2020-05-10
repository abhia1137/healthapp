'use strict';
let mongoose = require('mongoose');
//let utils = require('../../services/utils/utils');

exports.init = function(CONFIG) {
    var db = mongoose.connection;


    mongoose.connect(CONFIG, { useNewUrlParser: true }, function(err, data) {
        // console.log(err, data);
        console.info('connected to db', );
    });
    // console.log('Mongosse', mongoose)
    return mongoose;
}

exports.getMongoos = function() {
    return mongoose;
}