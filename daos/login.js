module.exports = function(mongoose, CONFIG) {
    var schema = new mongoose.Schema({
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        state: {
            type: String,

        },
        city: {
            type: String,

        },
        contactNo: {
            type: String,

        },
        firstName: {
            type: String,

        },
        lastname: {
            type: String,

        },
        gender: {
            type: String,

        }
    });
    var coll = mongoose.model('logins', schema);
    return coll;

}