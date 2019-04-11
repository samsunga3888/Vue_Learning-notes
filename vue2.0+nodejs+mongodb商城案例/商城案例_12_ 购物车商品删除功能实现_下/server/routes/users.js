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


router.get("/cartList", function(req,res,next){
	let userId = req.cookies.userId;
	User.findOne({userId:userId},function(err,doc){
		if(err){
			res.json({
				status:'1',
				msg:err.message,
				result:''
			});
		}else{
			if(doc){
				res.json({
					status:'0',
					msg:'',
					result:doc.cartList
				});
			}
		}
	});
});

//01.编写购物车确认删除弹框后台接口
router.post("/cartDel", function(req,res,next){
	let userId = req.cookies.userId,productId = req.body.productId;
	User.update({userId:userId},{$pull:{'cartList':{'productId':productId}}},function(err,doc){
		if(err){
			res.json({
				status:'1',
				msg:err.message,
				result:''
			});
		}else{
			res.json({
				status:'0',
				msg:'',
				result:'suc'
			});
		}
	});
});


module.exports = router;
