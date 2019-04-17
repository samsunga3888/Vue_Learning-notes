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

//01.创建一个document
var stu = new StuModel({
	name:"本博巴",
	age:48,
	gender:"male",
	address:"碧波谭"
});
//01_1.调用document.save方法，将创建的数据存入数据库
/*stu.save(function(err){
	if(!err){
		console.log("保存成功！");
	}
});*/


StuModel.findOne({},function(err,doc){
	if(!err){
		//01_2.调用document.update方法,更新一条数据
		//第一种修改方式
		/*doc.updateOne({$set:{age:38}},function(err){
			if(!err){
				console.log("修改成功！");
			}
		});*/
		//第二种修改方式
		/*doc.age = 10;
		doc.save();*/
		//01_3.调用document.remove方法,删除一条数据
		/*doc.remove(function(err){
			if(!err){
				console.log("数据删除成功！");
			}
		});*/
		//01_4.调用document.get方法,获取文档中的指定属性值
		/*console.log(doc.get("name"));
		console.log(doc.name);*/
		//01_4.调用document.set方法,设置文档中的指定属性值
		/*console.log(doc.set("name","你好"));
		console.log(doc.name = "hello");*/
		//01_5.调用document.id方法,获取文档的_id属性值
		/*console.log(doc.id);
		console.log(doc._id);*/
		//01_6.调用document.toObject方法,将文档对象转换为一个普通的JS对象
		//用于数据库里面的敏感数据不展示在前台页面
		doc = doc.toObject();
		delete doc.address;
		console.log(doc);
		
	}
});


