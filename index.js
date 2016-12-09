var express = require('express');
var app = express() ;



app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === 'Osboha_verify') {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});
