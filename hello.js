const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
    console.log('Got input')
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))