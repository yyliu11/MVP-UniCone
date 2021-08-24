const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/db");
// mongoose.connect('mongodb://localhost/db').then(() => {
//   console.log("Connected to Database");
//   }).catch((err) => {
//       console.log("Not Connected to Database ERROR! ", err);
//   });
autoIncrement.initialize(connection);

let orderSchema = new Schema({
  customer_name: { type: Schema.Types.ObjectId, ref: 'Customer' },
  order_at: String,
  cone: String,
  flavor: String,
  sauce: String,
  topping: String
});

orderSchema.plugin(autoIncrement.plugin, 'Order');
let Order = connection.model('Order', orderSchema);

// let getRepos = function(cb) {
//   Repo.find({}, cb).sort({'forks_count': 1}).limit(3);
// }

let save = function(order) {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var instance = new Order(order);
  instance.save().then (() => console.log('--------------------saved'));

};

module.exports.save = save;
// module.exports.getRepos = getRepos;