var express = require('express');
var router = express.Router();
//03.引入user数据库模型Schema
var User = require('./../models/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//03_1.接收从页面前台传入的数据，并进行数据库查询
router.post("/login",function(req,res,next){
	var param = {
		userName:req.body.userName,
		userPwd:req.body.userPwd
	}
	//03_2.进行数据库查询
	User.findOne(param, function(err,doc){
		if(err){
			res.json({
				status:"1",
				msg:err.message
			});
		}else{
			if(doc){
				//03_5.将cookie保存在前端页面。有被伪造的风险，同时浏览器可能会禁用cookie
				res.cookie("userId",doc.userId,{//设置cookie的名称和数值
					path:'/',//设置cookie的存放位置
					maxAge:1000*60*60,//设置cookie的存活周期为1小时
					
				});
				
				res.json({
					status:'0',
					msg:'',
					result:{
						userName:doc.userName,
						
						
					}
				});
			}
		}
	});
});


module.exports = router;
