var express = require('express');
var path = require('path');
var app = express();
var proxy = require('http-proxy').createProxyServer({});
var fs = require('fs');

// 静态文件输出
app.use(express.static(__dirname));

//所有静态资源需匹配到/static上
app.use('/static', express.static(__dirname));

app.listen(3000, function() {
    console.log('listen on 3000');
});