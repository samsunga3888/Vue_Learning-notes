//01_3.调用数据库连接模块
require("./tools/common_mongo");

var Student = require("./models/student");
Student.find({},function(err,docs){
	if(!err){
		console.log(docs);
	}
});

