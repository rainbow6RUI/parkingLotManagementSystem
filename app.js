/**
 * Created by Messi on 2017/2/28.
 */
var express = require("express");
var app = express();
app.use("/",express.static(__dirname));
var router = express.Router();
router.post("/home",function (req,res) {
    res.json();
});
app.use("/",router);
var port = 5555;
app.listen(port);
console.log("Server running at"+port);