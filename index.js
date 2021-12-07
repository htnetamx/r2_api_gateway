var express = require('express');
var cors = require('cors');
var app = express();
var router = require('./routers/router')
var bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Microservices - Release 2.0 - API Gateway")
})

app.use(router)
app.listen(3009, () => {
    console.log("API Gateway is running on port 3009");
});
