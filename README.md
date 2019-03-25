# Lottery in js c# c++ python

CocosCreator1.5.2 Unity180306 Unreal?

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### CocosCreator版本

测试地址www.dianmeng.us:6080

```
上传代码
git init
git add .
git commit -m 'commit'
git remote add origin https://github.com/game102/Lottery.git
git push -f origin master

拿代码
cd /opt/creator_server
git clone https://github.com/game102/Lottery.git

安装nodejs
cd /opt
wget https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz
sudo tar xf node-v10.1.0-linux-x64.tar.xz

配置node路径
vim ~/.profile
Add the following lines to the end:
# NodeJS
export NODEJS_HOME=/opt/node-v10.15.3-linux-x64/bin
export PATH=$NODEJS_HOME:$PATH

Refresh profile by:
. ~/.profile

Also add the lines inside ~/.bashrc file to the end of the file by:
vim ~/.bashrc
# NodeJS         
export NODEJS_HOME=/opt/node-v10.15.3-linux-x64/bin
export PATH=$NODEJS_HOME:$PATH

版本
node -v
npm version

安装项目express环境
cd /opt/creator_server/Lottery/lottery12_creator/build
npm install express
检查配置
cat webserver.js

var express = require("express")
var path = require("path");
var app = express();
//express目录/web_mobile
app.use(express.static(path.join(process.cwd(), "web-mobile")));   
app.listen(6080);

app.get("/dianmeng", function(request, responses){
	responses.send("Good Luck!");
});


使用PM2管理webserver
PM2 is a production process manager for Node.js applications
安装
npm install pm2@latest -g
启动      
pm2 start /opt/creator_server/Lottery/lottery12_creator/build/webserver.js
查看
ps -ef | grep node
杀掉
kill 3880(pid)
查看PM2启动服务
pm2 list
查看0号服务信息
pm2 desc 0
查看日志
pm2 monit (Ctrl+C)退出
开启/停止服务
pm2 start/stop 0(id)
 
补充
$ pm2 start app.js --name my-api # 命名进程
$ pm2 list               # 显示所有进程状态
$ pm2 monit              # 监视所有进程
$ pm2 logs               #  显示所有进程日志
$ pm2 stop all           # 停止所有进程
$ pm2 restart all        # 重启所有进程
$ pm2 reload all         # 0秒停机重载进程 (用于 NETWORKED 进程)
$ pm2 stop 0             # 停止指定的进程
$ pm2 restart 0          # 重启指定的进程
$ pm2 startup            # 产生 init 脚本 保持进程活着
$ pm2 web                # 运行健壮的 computer API endpoint (http://localhost:9615)
$ pm2 delete 0           # 杀死指定的进程
$ pm2 delete all         # 杀死全部进程 


集群-针对Weberver提高web请求并发处理
pm2 start app.js -i max
Max means that PM2 will auto detect the number of available CPUS and run as many
processes as possible 也可以自己设置


编写sh
vim pm2_start.sh
pm2 start apps/center_server/center_server.js
pm2 start apps/system_server/system_server.js
pm2 start apps/game_server/game_server.js
pm2 start apps/gateway/gateway.js
pm2 start apps/webserver/webserver.js -i 4  //启动4个instance

给这个shell脚本一个可执行权限;
chmod a+x pm2_start.sh  
./pm2_start.sh
```

### Unity版本

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

### Unreal版本

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```
