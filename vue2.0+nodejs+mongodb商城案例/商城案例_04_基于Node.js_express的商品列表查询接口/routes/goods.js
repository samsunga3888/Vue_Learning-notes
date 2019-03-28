var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//02_1.引入数据库Schema
var Goods = require('../models/goods');

//02_2.连接MongoDB数据库
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
	
	//03.通过浏览器传过来的参数，来确定当前是在第几页
  let page = parseInt(req.query.page);
	
	//03_1.通过浏览器传过来的参数，来确定当前一页有多少条数据
	let pageSize = parseInt(req.query.pageSize);
	
	//03_2.通过接收来自前端页面的数值，来确定排序方式，升序还是降序。
	let sort = parseInt(req.query.sort);
	
	//03_3分页的公式=（当前的页码-1）*pageSzie
	let skip = (page-1)*pageSize;
	
	//03_4.假设数据库查询的条件是全部
	let params = {};
	
	//03_5.查询全部数据，并跳过skip条数据，每页显示limit条数据
	let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
	
	//03_6.对数据库中所有数据的金额进行排序
	goodsModel.sort({'salePrice':sort});
	
	//03_7.通过模型的exec方式，来执行上面的find和sort方法
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
