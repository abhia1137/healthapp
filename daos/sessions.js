module.exports = function(mongoose, CONFIG) {
    var schema = new mongoose.Schema({
        sessionType: {
            type: String,
        },
        price: {
            type: String,
        },
        noOfSessions: {
            type: String,
        }
    });
    var coll = mongoose.model('sessions', schema);
    return coll;

}