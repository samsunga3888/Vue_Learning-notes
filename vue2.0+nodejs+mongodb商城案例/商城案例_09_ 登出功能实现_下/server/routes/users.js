var express = require('express');
var router = express.Router();
var User = require('./../models/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post("/login",function(req,res,next){
	var param = {
		userName:req.body.userName,
		userPwd:req.body.userPwd
	}
	
	User.findOne(param, function(err,doc){
		if(err){
			res.json({
				status:"1",
				msg:err.message
			});
		}else{
			if(doc){
				
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

//01.用户从前端页面调用登出logout后端接口
router.post("/logout", function(req,res,next){
	res.cookie("userId","",{//userId为空
		path:"/",
		maxAge:-1//设置cookie为失效状态
	});
	res.json({//返回给前端页面cookie已失效的状态
		status:"0",
		msg:'',
		result:''
	})
});

});


module.exports = router;
