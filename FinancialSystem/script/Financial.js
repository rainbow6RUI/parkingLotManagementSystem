/**
 * Created by babyleon on 2017/2/28.
 */
var express = require('express');
var app = express();
app.use('/',express.static(__dirname));
var router = express.Router();


router.post("/Financial",function (req,res) {
    var object = [
        {
            Title:"",//工资情况
            Person:"",//申请人
            approve:"",//批准人
            Time:"",//申请时间
            money:"",//申请资金
            Income:"",
        }
    ];
    res.json(
        object
    )
});

app.use("/",router);
var port = 2008;
app.listen(port);
console.log("server is listening" + port);