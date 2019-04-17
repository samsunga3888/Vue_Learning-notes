/*
	模块化的目的，定义一次，反复调用。
*/

//01.定义一个模块，用来连接mongoDB数据库
var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/db_123",{useNewUrlParser:true});
mongoose.connection.on("open",function(){
	console.log("数据库连接成功!")
});



