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
}