var express = require('express')
var app = express();
var controllers = require('./controllers');

app.set('port', (process.env.PORT || 8000))

app.use(express.static(__dirname+'/../client'));
app.use(express.static(__dirname+'/../../'));

app.post('/login',controllers.loginController)

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
