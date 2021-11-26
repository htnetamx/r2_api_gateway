var express = require('express');
var app = express();
var router = require('./routers/router')
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Microservices - Release 2.0 - API Gateway")
})

app.use(router)
app.listen(3009, () => {
    console.log("API Gateway is running on port 3009");
});
