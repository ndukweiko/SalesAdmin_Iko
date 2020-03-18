var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var CustomerSchema = new Schema({

CustomerName: {type: String, required:true},
ItemDescription:{type:String, required:true},
ItemPrice:{type:String, required:true},
Quantity:{type:String, required:true},
MerchantName:{type:String, required:true},	
MerchantAddress:{type:String, required:true}
});
CustomerSchema.index({CustomerName:1, ItemDescription:1},{unique:true});
module.exports = mongoose.model("Customers", CustomerSchema);
