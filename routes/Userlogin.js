var loginController = require('../controllers/loginController')
module.exports = function(app) {
    app.post('/userlogin', function(req, res, next) {
        loginController.loginUsesr(req.body).then(function(data) {
            res.send(data)
        });
    })

    app.post('/signup', function(req, res) {
        loginController.signUp(req.body).then(function(data) {
            res.send(data);
        });
    });

    app.get('/getActivePrograms', function(req, res) {
        loginController.getPrograms().then(function(data) {
            res.send(data);
        });
    })
    app.get('/getAllTrainers', function(req, res) {
        loginController.getAllTrainers().then(function(data) {
            res.send(data);
        });
    });

    app.get('/getAllDetails', function(req, res) {
        loginController.getSessionDetails().then(function(data) {
            res.send(data);
        });
    });

    app.post('/insertSessions', function(req, res) {
        loginController.insertSessions(req.body).then(function(data) {
            res.send(data);
        });
    });
}