var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var answers = require('./server/answers')

var app = new (require('express'))()
var port = 3030

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', function (req, res) {
  var response = '';
    req.on("data", function(chunk){
        response += chunk.toString();
    });
    req.on("end", function(){
      var data_response = response.split('=')
      var action = data_response[0]
      var response_param = data_response[1]
      answers(res, data_response, response_param, action)
    });
})
app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Server adress http://localhost:%s/ .", port, port)
  }
})
