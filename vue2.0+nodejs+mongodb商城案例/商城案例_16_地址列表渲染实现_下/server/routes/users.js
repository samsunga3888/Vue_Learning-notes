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


router.post("/cartEdit", function(req,res,next){
	let userId = req.cookies.userId,
		productId = req.body.productId,
		productNum = req.body.productNum,
		checked = req.body.checked;
	//第一个花括号{需要修改哪条数据}，第二个花括号{需要修改的具体内容}	
	User.update({"userId":userId,"cartList.productId":productId},{"cartList.$.productNum":productNum,"cartList.$.checked":checked},
		function(err,doc){
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

router.post("/editCheckAll", function (req,res,next) {
  var userId = req.cookies.userId,
      checkAll = req.body.checkAll?'1':'0';
  User.findOne({userId:userId}, function (err,user) {
    if(err){
      res.json({
        status:'1',
        msg:err.message,
        result:''
      });
    }else{
      if(user){
        user.cartList.forEach((item)=>{
          item.checked = checkAll;
        })
        user.save(function (err1,doc) {
            if(err1){
              res.json({
                status:'1',
                msg:err1,message,
                result:''
              });
            }else{
              res.json({
                status:'0',
                msg:'',
                result:'suc'
              });
            }
        })
      }
    }
  });
});

//01.编写数据库接口查询用户地址列表信息
router.get("/addressList",function(req,res,next){
	let userId = req.cookies.userId;
	User.findOne({userId:userId},function(err,doc){
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
				result:doc.addressList
			});
		}
	});
});


module.exports = router;
