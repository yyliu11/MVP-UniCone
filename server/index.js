var db = require('../database');

const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/orders', function (req, res) {
  var doc = {customer_name: req.body.customer_name,
             order_at: new Date(),
             cone: req.body.cone,
             flavor: req.body.flavor,
             sauce: req.body.sauce,
             topping: req.body.topping,
             ready: req.body.ready
            };

  db.save(doc);
  res.send('Order received!');
});


app.get('/orders', function (req, res) {
  db.getOrders(req.query.customer_name, function(err, results) {
    if (err) { throw err; }
    res.json(results);
  });
});

let port = 5000;

app.listen(port, function() {
  console.log(`🍦listening on port ${port}`);
});