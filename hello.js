const express = require('express')
const app = express()
var router = express.Router();

const port = 3000
let bodyParser = require('body-parser');
let cors = require('cors');
router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());
app.use(bodyParser.json());
require('./routes/index')(app);
let mongoose = require('./dbconnection');
mongoose.init('mongodb+srv://dbuser:dbuser@cluster0-kpe8t.mongodb.net/health_application?retryWrites=true&w=majority');
require('./models').init()

app.use(cors({
    maxAge: 3600,
    credentials: true,
    methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
    headers: 'Access-Control-Allow-Origin, Access-Control-Expose-Headers,auth_token,x-access-token,agent_auth,user_auth,Origin, X-Requested-With, Content-Type, Accept, Authorization,ConnectionType,AgentCode',
    expose: ['Access-Control-Allow-Origin', 'Access-Control-Expose-Headers']
}));

app.use(bodyParser.urlencoded({
    parameterLimit: 1000000,
    limit: '500mb',
    extended: true
}));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))