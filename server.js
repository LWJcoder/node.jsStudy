/**
 * Created by Joh on 2016/10/10.
 */
var http = require('http');
var path = require('path');
var fs = require('fs');

var hostname = 'localhost';
var port = 3000;
//创建服务器
var server = http.createServer(function (req, res) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    //res.writeHead(200, {'Content-Type': 'text/plain'}
    console.log('req for :'+ req.url+ 'by method '+ req.method);
    if(req.method == 'GET'){
        var fileUrl;
        if(req.url == '/')
            fileUrl = '/index.html';
        else
            fileUrl = req.url;

        var filePath = path.resolve('./public'+fileUrl);
        var fileExt = path.extname(filePath);
        if(fileExt == ".html"){
            fs.exists(filePath, function(exists){
               if (!exists){
                   res.writeHead(404,{'Content-Type': 'text/html'});
                   res.end('<h1>Error 404'+ fileUrl+"no exists</h1>");
                   console.log('filePath:'+filePath);
                   return;
               }

               res.writeHead(200, {'Content-Type':'text/html'});
                console.log('filePath:'+filePath);
                fs.createReadStream(filePath).pipe(res);

            });
        } else{
            res.writeHead(404,{'Content-Type': 'text/html'});
            res.end('<h1>'+fileUrl+' not a html file,</h1>');

        }

    }
    else {
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.end('<h1>'+req.method+'not supported</h1>');

    }

})

// 终端打印如下信息
server.listen(port, hostname, function(){
    console.log('Server running at :'+hostname+ ': '+port);
});
