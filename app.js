/**
 * Created by Messi on 2017/2/28.
 */
var express = require("express");
var app = express();
app.use("/",express.static(__dirname));
var router = express.Router();

router.post("/Financial",function (req,res) {
    var object = [
        {
            Title:"给梅旭的工资",//工资情况
            Person:"梅旭",//申请人
            approve:"陈益民",//批准人
            Time:"2017-2-28",//申请时间
            money:233,  //申请资金
            received:"梅旭",//收款人
            type:"工资",
            id:""
        },{
            Title:"给何瑞阳的工资",//工资情况
            Person:"何瑞阳",//申请人
            approve:"梅西",//批准人
            Time:"2017-2-29",//申请时间
            money:666,  //申请资金
            received:"何瑞阳",//收款人
            type:"工资"
        },
        {
            Title:"给张三的工资",//工资情况
            Person:"张三",//申请人
            approve:"李四",//批准人
            Time:"2017-3-29",//申请时间
            money:998,  //申请资金
            received:"张三",//收款人
            type:"工资"
        }
    ];
    res.json(
        object
    )
});

app.use("/",router);
var port = 5555;
app.listen(port);
console.log("Server running at"+port);