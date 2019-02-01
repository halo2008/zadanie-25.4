var express = require('express');
var app = express();
var stringify;
app.use(express.static('assets'));

app.get('/userform', function (req, res) {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  res.end(JSON.stringify(response));
  res.sendFile('/index.html');
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});
