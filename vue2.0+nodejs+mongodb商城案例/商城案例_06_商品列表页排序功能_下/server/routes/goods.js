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


router.get("/", function (req,res,next) {
	
  let page = parseInt(req.query.page);
	let pageSize = parseInt(req.query.pageSize);
	let sort = parseInt(req.query.sort);
	let skip = (page-1)*pageSize;
	let params = {};
	//01_3.根据前台页面传入的价格区间，进行相应查询。
	let priceLevel = req.query.priceLevel;//获取到前台页面传入的数值
	let priceGt = '',priceLte = '';
	if(priceLevel!='all'){
		switch(priceLevel){
			case'0':priceGt = 0; priceLte = 100; break;//匹配前台页面传入的数值0
			case'1':priceGt = 100; priceLte = 500; break;//匹配前台页面传入的数值1
			case'2':priceGt = 500; priceLte = 1000; break;//匹配前台页面传入的数值2
			case'3':priceGt = 1000; priceLte = 5000; break;//匹配前台页面传入的数值3
		}
		//01_4.设置数据库查询条件
		params = {
			salePrice:{
				$gt:priceGt,//价格大于的范围
				$lte:priceLte//价格小于等于的范围
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

module.exports = router;
