var db = require('../database');

const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

// app.post('/orders', function (req, res) {
//   // TODO - your code here!

//   getRepo.getReposByUsername(req.body.username, function(data) {

//     for (var i = 0; i < data.length; i++) {
//       var doc = {repo_name: data[i].name,
//                  owner_name: data[i].owner.login,
//                  owner_id: data[i].owner.id,
//                  html_url: data[i].html_url,
//                  updated_at: data[i].updated_at,
//                  forks_count: data[i].forks_count
//                 };
//       db.save(doc);
//     }
//   });
// });


app.get('/orders', function (req, res) {
 res.send('Hello from server!')
  // db.getRepos(function(err, results) {
  //   if (err) { throw err; }
  //   res.json(results);
  // });
});

let port = 5000;

app.listen(port, function() {
  console.log(`🍦listening on port ${port}`);
});