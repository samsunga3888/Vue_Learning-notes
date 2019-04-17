var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/db_123",{useNewUrlParser:true});
mongoose.connection.on("open",function(){
	console.log("数据库连接成功!")
});

var Schema = mongoose.Schema;
var stuSchema = new Schema({
	name:String,
	age:Number,
	gender:{
		type:String,//gender对象的类型是string
		default:"female"//默认值是女性
	},
	address:String
});

var StuModel = mongoose.model("student",stuSchema);

//01.向数据库增加2条数据
/*StuModel.create([
	{
		name:"沙和尚",
		age:38,
		gender:"male",
		address:"流沙河"
	}
],function(err){
	if(!err){
		console.log("插入数据成功！")
	}
});*/

//02.查询所有符合条件的文档记录,返回数据类型为数组
/*StuModel.find({},function(err,docs){
	if(!err){
		console.log(docs[1].name);
	}
});*/

//02_1.通过设置投影参数，查询所有符合条件的文件记录。两种方式：1,{name:1,_id:0} 2,"name -_id"
/*StuModel.find({},"name -_id",function(err,docs){
	if(!err){
		console.log(docs);
	}
});*/

//02_2.通过设置option参数，查询所有符合条件的文件记录。两种方式：skip和limit
/*StuModel.find({},"name -_id",{skip:1, limit:1}, function(err,docs){
	if(!err){
		console.log(docs);
	}
});*/

//02_3.查询符合条件的第一个文档记录,返回数据类型为对象
/*StuModel.findOne({},function(err,doc){
	if(!err){
		console.log(doc.name);
	}
});*/

//02_4.根据文档的id属性查询文档
/*StuModel.findById("5c99e7c95181921ee8b46ab1",function(err,doc){
	if(!err){
		console.log(doc instanceof StuModel);//通过find()方法查询返回的对象doc就是Document文档对象。Document文档对象就是Model的实例。
	}
});*/

//03.修改符合条件的一个文档
/*StuModel.updateOne({name:"唐僧"},{$set:{age:20}},function(err,doc){
	if(!err){
		console.log("修改成功!");
	}
});*/

//04.删除文档记录

/*StuModel.deleteOne({name:"唐僧"},function(err){
	if(!err){
		console.log("删除成功！");
	}
});*/

//05.统计文档数量
StuModel.countDocuments({},function(err,count){
	if(!err){
		console.log(count);
	}
});




