module.exports = function(mongoose, CONFIG) {
    var schema = new mongoose.Schema({
        trainerId: {
            type: String,

        },
        name: {
            type: String,
        },
        type: {
            type: String,
        }
    });
    var coll = mongoose.model('trainers', schema);
    return coll;

}