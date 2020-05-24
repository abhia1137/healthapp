module.exports = function(mongoose, CONFIG) {
    var schema = new mongoose.Schema({
        program: {
            type: String,

        },
        id: {
            type: String,
        },
        programDetails: {
            type: String,
        }
    });
    var coll = mongoose.model('programs', schema);
    return coll;

}