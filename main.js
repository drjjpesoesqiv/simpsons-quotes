'use strict';

const express = require('express');
const fs = require('fs');

const port = 8080;
const host = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  fs.readFile('quotes.json', 'utf8', function (err, data) {
    if (err) throw err;
    var quotes = JSON.parse(data);
    var index  = Math.floor((Math.random() * quotes.length));
    res.send(quotes[index]);
  });
});

app.listen(port, host);
console.log(`listening on ${host}:${port}`);