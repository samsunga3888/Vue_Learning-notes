//01.建立购物车数据库Schema

let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({//字段需要与数据库对应一致
	"userId":String,
	"userName":String,
	"userPwd":String,
	"orderList":Array,
	"cartList":[
		{
			"productId":String,
			"productName":String,
			"salePrice":String,
			"productImage":String,
			"checked":String,
			"productNum":String
		}
	],
	"addressList":Array
});

module.exports = mongoose.model("user",userSchema);