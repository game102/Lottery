var express = require("express")
var path = require("path");
var app = express();
//express目录/web_mobile
app.use(express.static(path.join(process.cwd(), "web_mobile")));   
app.listen(6080);

app.get("/dianmeng", function(request, responses){
	responses.send("Good Luck!");
});