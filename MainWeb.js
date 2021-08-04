const express = require('express')
const app = express()
const port = 3000;
const path = require('path')

app.get('/serverList', function(req, res) {
    res.sendFile(path.join(__dirname, 'serverList.html'))
});

app.listen(port)