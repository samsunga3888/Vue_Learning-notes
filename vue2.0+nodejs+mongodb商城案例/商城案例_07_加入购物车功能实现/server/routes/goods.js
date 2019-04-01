var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

mongoose.connect('mongodb://127.0.0.1:27017/imoocmail', {useNewUrlParser: true});

mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
});

//查询商品列表信息功能。包括分页，根据价格区间排序功能。
router.get("/", function (req,res,next) {	
  let page = parseInt(req.query.page);
	let pageSize = parseInt(req.query.pageSize);
	let sort = parseInt(req.query.sort);
	let skip = (page-1)*pageSize;
	let params = {};
	let priceLevel = req.query.priceLevel;
	let priceGt = '',priceLte = '';
	if(priceLevel!='all'){
		switch(priceLevel){
			case'0':priceGt = 0; priceLte = 100; break;
			case'1':priceGt = 100; priceLte = 500; break;
			case'2':priceGt = 500; priceLte = 1000; break;
			case'3':priceGt = 1000; priceLte = 5000; break;
		}
		
		params = {
			salePrice:{
				$gt:priceGt,
				$lte:priceLte
			}
		}
	}
	
	let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
	goodsModel.sort({'salePrice':sort});
	  goodsModel.exec(function (err,doc) {
		  if(err){
			  res.json({
				status:'1',
				msg:err.message
			  });
		  }else{
			  res.json({
				  status:'0',
				  msg:'',
				  result:{
					  count:doc.length,
					  list:doc
				  }
			  });
		  }
	  })
});

//02.添加加入购物车功能。向数据库提交数据，应该使用post方式。
router.post("/addCart", function(req,res,next){
	
	let userId = '100000077';//02_1.假设用户已经登录
	//02_2.获取从前台页面传入的用户选择的商品的id
	let productId = req.body.productId;//post方式取得参数应该使用req.body
	let User = require('../models/user');
	
	User.findOne({userId:userId}, function(err,userDoc){//02_3.查询当前用户是否存在
		if(err){
			res.json({
				status:"1",//mongoose的api
				msg:err.message//mongoose的api
			})
		}else{
			//02_4.判断购物车内是否已有数据。
			if(userDoc){
				let goodsItem = '';
				userDoc.cartList.forEach(function(item){//遍历查询该用户的购物车
					if(item.productId == productId){//查询到存在重复的商品
						goodsItem = item;
						item.productNum ++;//商品数量自增1
					}
				});
				if(goodsItem){
					userDoc.save(function(err2,doc2){//将用户加入购物车内的商品信息，保存到数据库
							if(err2){
								res.json({
									status:"1",
									msg:err2.message
								})
							}else{
								res.json({//保存成功
									status:'0',
									msg:'',
									result:'successed'
								})
							}
						})
				}else{
					//02_5.将用户选中的商品加入购物车内
					Goods.findOne({productId:productId},function(err1,doc1){//查询用户选中的商品
							if(err1){
								res.json({
									status:"1",
									msg:err1.message
								})
							}else{
								if(doc1){
									doc1.productNum = 1;//购物内对应的商品数量+1
									doc1.checked = 1;//购物车内应对商品为选中状态
									userDoc.cartList.push(doc1);//将用户选中的商品加入购物车内
									userDoc.save(function(err2,doc2){//将用户加入购物车内的商品信息，保存到数据库
										if(err2){
											res.json({
												status:"1",
												msg:err2.message
											})
										}else{
											res.json({//保存成功
												status:'0',
												msg:'',
												result:'successed'
											})
										}
									});
								}
							}
						});
				};
			}
		}
	});
	
})






module.exports = router;
