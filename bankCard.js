const express = require('express');
const app = express();
const users = [  
{ "id":4123 ,"cardNumber": 112233445566 },
{ "id":4321 ,"cardNumber": 665544332211 },
{ "id":1234 ,"cardNumber": 123456789012},
{ "id":1234 ,"cardNumber": 123456789012},
{"id":1234 ,"cardNumber": 123456789012}
];
app.get('/user', function (req, res) {
  res.send(JSON.stringify(users.find((user) => user.id == req.params.id)));
});
app.get('/user/:id', function (req, res) {
  res.send(JSON.stringify(users.find((user) => user.id == req.params.id)));
});
app.listen(3003, function () {
    console.log('Example app listening on port 3003!');
  });
