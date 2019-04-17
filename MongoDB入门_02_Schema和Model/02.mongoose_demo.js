
var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/db_123",{useNewUrlParser:true});
mongoose.connection.on("open",function(){
	console.log("数据库连接成功!")
});

//01.将mongoose.Schema赋值给一个变量
var Schema = mongoose.Schema;
//01_1.创建Schema对象
var stuSchema = new Schema({
	name:String,
	age:Number,
	//gender:String,//尽量不使用布尔值，不便于将来扩展。例如，男、女和保密
	gender:{
		type:String,//gender对象的类型是string
		default:"female"//默认值是女性
	},
	address:String
});
//01_2.通过Schema来创建Model。Model代表的是数据库中的集合，通过Model才能对数据库进行操作。
//mongoose.model(modelName,schema);modelName就是要映射的集合名,并自动将集合名变成复数。
var StuModel = mongoose.model("student",stuSchema);
//01_3.向数据库中插入一个文档
StuModel.create({
	name:"孙悟空",
	age:18,
	gender:"male",
	address:"花果山"
},function(err){
	if(!err){
		console.log("插入数据成功！");
	}
});



