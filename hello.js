const express = require('express')
const app = express()
const port = 3000
const db = require('./dbconnection')
let cors = require('cors');
require('./routes/index')(app);


db.init('mongodb://localhost:27017/health_application', function(err, data) {
    console.log(err, data)
})

require('./models').init();
app.use(cors({
    maxAge: 3600,
    credentials: true,
    methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
    headers: 'Access-Control-Allow-Origin, Access-Control-Expose-Headers,auth_token,x-access-token,agent_auth,user_auth,Origin, X-Requested-With, Content-Type, Accept, Authorization,ConnectionType,AgentCode',
    expose: ['Access-Control-Allow-Origin', 'Access-Control-Expose-Headers']
}));



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))