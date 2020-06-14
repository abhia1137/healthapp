module.exports = function(mongoose, CONFIG) {
    var schema = new mongoose.Schema({
        text: String,
        howWeWork: String,
        sessions: [{
            sessionType: {
                type: String,
            },
            price: {
                type: String,
            },
            noOfSessions: {
                type: String,
            }
        }],
        trainers: [{
            trainerId: {
                type: String,
            },
            name: {
                type: String,
            },
            type: {
                type: String,
            }
        }]


    });
    var coll = mongoose.model('sessions', schema);
    return coll;

}