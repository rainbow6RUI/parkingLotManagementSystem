/**
 * Created by Messi on 2017/2/28.
 */
var express = require("express");
var app = express();
app.use("/",express.static(__dirname));
var router = express.Router();

router.get("/data",function (req,res) {
    var financial = [
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
    var carInfo = [
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第一车库",
            models:"劳斯莱斯幻影",
            carnumber:"川R-00000",
            typeofout:"入门",
            timeofout:"2017-01-01 10:54",
            info:"入门",
            eletags:"20030084",
            operator:"003"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第一车库",
            models:"宾利慕尚",
            carnumber:"川R-00004",
            typeofout:"出门",
            timeofout:"2017-03-03 13:54",
            info:"出门",
            eletags:"20030004",
            operator:"003"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第一车库",
            models:"劳斯莱斯幻影",
            carnumber:"川R-00001",
            typeofout:"出门",
            timeofout:"2017-01-03 14:54",
            info:"出门",
            eletags:"20030024",
            operator:"004"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第二车库",
            models:"法拉利",
            carnumber:"川R-66666",
            typeofout:"入门",
            timeofout:"2016-01-03 16:54",
            info:"入门",
            eletags:"200300010",
            operator:"002"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第一车库",
            models:"法拉利",
            carnumber:"川R-77777",
            typeofout:"出门",
            timeofout:"2016-01-03 18:12",
            info:"出门",
            eletags:"200300008",
            operator:"007"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第三车库",
            models:"法拉利",
            carnumber:"川R-23237",
            typeofout:"入门",
            timeofout:"2016-08-03 18:12",
            info:"入门",
            eletags:"200300090",
            operator:"001"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第一车库",
            models:"大众途观",
            carnumber:"川R-89898",
            typeofout:"出门",
            timeofout:"2016-04-03 18:12",
            info:"出门",
            eletags:"200300002",
            operator:"002"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第一车库",
            models:"布加迪威龙",
            carnumber:"川R-33333",
            typeofout:"出门",
            timeofout:"2016-11-03 13:12",
            info:"出门",
            eletags:"200300078",
            operator:"001"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第一车库",
            models:"奥拓",
            carnumber:"川R-10101",
            typeofout:"入门",
            timeofout:"2016-04-03 09:12",
            info:"入门",
            eletags:"200300080",
            operator:"003"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第一车库",
            models:"凯迪拉克",
            carnumber:"川R-66666",
            typeofout:"入门",
            timeofout:"2016-04-03 11:12",
            info:"入门",
            eletags:"200300080",
            operator:"003"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第一车库",
            models:"奥迪Q7",
            carnumber:"川R-78787",
            typeofout:"出门",
            timeofout:"2016-04-03 11:12",
            info:"出门",
            eletags:"200300897",
            operator:"004"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第一车库",
            models:"奥迪Q3",
            carnumber:"川R-46464",
            typeofout:"入门",
            timeofout:"2016-04-03 11:12",
            info:"入门",
            eletags:"200300453",
            operator:"001"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第一车库",
            models:"奥迪Q7",
            carnumber:"川R-56894",
            typeofout:"出门",
            timeofout:"2016-04-03 12:12",
            info:"出门",
            eletags:"200300568",
            operator:"006"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第一车库",
            models:"迈凯伦",
            carnumber:"川R-56894",
            typeofout:"出门",
            timeofout:"2016-04-03 12:12",
            info:"出门",
            eletags:"200350568",
            operator:"003"
        },
        {
            clicks:"ion-arrow-right-b",
            detail:"明细",
            memberGarages:"第三车库",
            models:"奥迪Q8",
            carnumber:"川R-56894",
            typeofout:"出门",
            timeofout:"2016-04-03 12:12",
            info:"出门",
            eletags:"200300568",
            operator:"006"
        }
    ];
    res.json({
            financial:financial,
            carInfo:carInfo
    }

    )
});

app.use("/",router);
var port = 5555;
app.listen(port);
console.log("Server running at"+port);