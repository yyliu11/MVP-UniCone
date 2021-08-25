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
  customer_name: String,
  order_at: String,
  cone: String,
  flavor: String,
  sauce: String,
  topping: String
});

orderSchema.plugin(autoIncrement.plugin, 'Order');
let Order = connection.model('Order', orderSchema);

let getOrders = function(cb) {
  Order.find({}, cb);
}

let save = function(order) {
  var instance = new Order(order);
  instance.save().then (()=> console.log('---------saved')).catch(err => console.log(err))
};

module.exports.save = save;
module.exports.getOrders = getOrders;