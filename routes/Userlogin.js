var loginController = require('../controllers/loginController')
module.exports = function(app) {
    app.get('/userlogin', function(req, res) {
        loginController.loginUsesr().then(function(data) {
            res.send(data)
        });

    })
}