var express = require('express');
var router = express.Router();
//01_5.引入时间日期工具插件
require('./../util/util.js')
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

router.post("/setDefault",function(req,res,next){
	let userId = req.cookies.userId,
		addressId = req.body.addressId;
	if(!addressId){
		res.json({
			status:'1003',
			msg:'addressId is null',
			result:''
		});
	}else{
		User.findOne({userId:userId},function(err,doc){
				if(err){
					res.json({
						status:'1',
						msg:err.message,
						result:''
					});
				}else{
					let addressList = doc.addressList;
					addressList.forEach((item)=>{
						if(item.addressId == addressId){
							item.isDefault = true;
						}else{
							item.isDefault = false;
						}
					});
					doc.save(function(err1,doc1){
						if(err1){
							res.json({
								status:'1',
								msg:err1.message,
								result:''
							});
						}else{
							res.json({
								status:'0',
								msg:'',
								result:''
							});
						};
					});
				}
			});	
	};
});

router.post("/delAddress", function (req,res,next) {
  var userId = req.cookies.userId,addressId = req.body.addressId;
  User.update({
    userId:userId
  },{
    $pull:{
      'addressList':{
        'addressId':addressId
      }
    }
  }, function (err,doc) {
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
          result:''
        });
      }
  });
});

//01_3.编写支付后台接口
router.post("/payMent", function(req,res,next){
	var userId = req.cookies.userId,
		addressId = req.body.addressId,
		orderTotal = req.body.orderTotal;
	User.findOne({userId:userId}, function(err,doc){
		if(err){
			res.json({
				status:'1',
				msg:err.message,
				result:''
			})
		}else{
			let address = '',goodsList = [];
			//获取当前用户的地址信息
			doc.addressList.forEach((item)=>{
			   if(addressId==item.addressId){
			     address = item;
			   }
			})
			//获取用户购物车的购买商品
			doc.cartList.filter((item)=>{
			  if(item.checked=='1'){
			    goodsList.push(item);
			  }
			});
			//01_5.将购买信息写入数据库
			var platform = '622';
			var r1 = Math.floor(Math.random()*10);
			var r2 = Math.floor(Math.random()*10);
			var sysDate = new Date().Format('yyyyMMddhhmmss');
			var createDate = new Date().Format('yyyy-MM-dd hh:mm:ss');
			var orderId = platform+r1+sysDate+r2;
			var order = {
			   orderId:orderId,
			   orderTotal:orderTotal,
			   addressInfo:address,
			   goodsList:goodsList,
			   orderStatus:'1',
			   createDate:createDate
			};
			
			doc.orderList.push(order);
			
			doc.save(function (err1,doc1) {
			   if(err1){
			     res.json({
			       status:"1",
			       msg:err.message,
			       result:''
			     });
			   }else{
			     res.json({
			       status:"0",
			       msg:'',
			       result:{
			         orderId:order.orderId,
			         orderTotal:order.orderTotal
			       }
			     });
			   }
			});
		}
	});
	
});

module.exports = router;
