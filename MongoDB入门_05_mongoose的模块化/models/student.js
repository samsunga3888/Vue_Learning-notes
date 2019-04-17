//01_1.定义student模型
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var stuSchema = new Schema({
	name:String,
	age:Number,
	gender:{
		type:String,
		default:"female"
	},
	address:String
});
//01_2.暴露模型，供其他模块调用
module.exports = mongoose.model("student",stuSchema);
