const express = require('express');
const app = express();
const fs= require('fs');
fs.readFile('./workers.json', 'utf8', (err, data) => {
    app.get('/', function (req, res) {
        res.send(data);
      });


      
})
