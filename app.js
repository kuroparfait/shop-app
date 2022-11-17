/*const fs = require('fs');
const http = require('http');*/
const ejs = require('ejs');
const express = require('express');
var app = express();

//const cat1_page = fs.readFileSync('./cat1.ejs','utf-8');
//const cat2_page = fs.readFileSync('./cat2.ejs','utf-8');

//var server = http.createServer(getFromClient);

app.listen(3000,()=>{
    console.log('Start server port:3000')
})

// ここまでメインプログラム ＝＝＝＝＝＝

// CreateServerの処理
app.get('/',(req,res) => {
    var content = ejs.render(thePages)
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(content);
    res.end();
})