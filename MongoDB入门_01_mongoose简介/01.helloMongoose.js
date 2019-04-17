
//01.下载安装Mongoose
//npm install mongoose --save
//01_1.在项目中引入mongoose
var mongoose = require("mongoose");
//01_2.连接Mongoose数据库
//mongoose.connect('mongodb://数据库的ip地址:端口号/数据库名',{useNewUrlParser:true})
//端口号是默认的27017时可以忽略不谢。
mongoose.connect("mongodb://127.0.0.1/db_demo",{useNewUrlParser:true});
//01_3.监听MongoDB数据库的连接状态
//mongoose.connection.once("open",function(){});
//mongoose.connection.once("close",function(){});
mongoose.connection.on("open",function(){
	console.log("数据库连接成功!")
});
//01_4.断开数据库连接（一般不需要调用）
//MongoDB数据库，一般情况下，只需要连接一次。除非项目停止。
mongoose.disconnect();
mongoose.connection.on("close",function(){
	console.log("数据库连接已断开！")
})

