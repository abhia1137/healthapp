'use strict';
let mongoose = require('mongoose');
exports.init = async(CONFIG) => {
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error: '));
    mongoose.connection.on('open', function(ref) {
        console.log('Connected to mongo server.');
        //trying to get collection names
        mongoose.connection.db.listCollections().toArray(function(err, names) {
            // console.log(names); // [{ name: 'dbname.myCollection' }]
            // module.exports.Collection = names;
        });
    })

    mongoose.connect(CONFIG, { useUnifiedTopology: true, useNewUrlParser: true }, )

    return mongoose
}

exports.getMongoos = function() {

    return mongoose;
}