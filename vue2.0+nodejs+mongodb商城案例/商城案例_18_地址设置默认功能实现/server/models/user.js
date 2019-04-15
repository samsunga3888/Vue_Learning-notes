
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
	//01.修改Schema对应的数据类型
	"addressList":[
		{
			"addressId":String,
			"userName":String,
			"streetName":String,
			"postCode":Number,
			"tel":Number,
			"isDefault":Boolean
		}
	],
});

module.exports = mongoose.model("user",userSchema);