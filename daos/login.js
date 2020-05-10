module.exports = function(mongoose, CONFIG) {
    var schema = new mongoose.Schema({
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });
    var coll = mongoose.model('login', schema);
    return coll;

}