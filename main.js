const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000,function(){ 
    console.log("Server listening on port: 3000"
)});

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'/css/')));

app.get('/tirex', function(req,res){
    res.sendFile(path.join(__dirname,'./index.html'));
    console.log("index");
});

app.get('/search',function(req,res){
    res.sendFile(path.join(__dirname,'./search.html'));
    console.log("search");
})

app.get('/search/img',function(req,res){
    res.sendFile(path.join(__dirname,'./img.html'));
    console.log("img");
})

app.get('/search/video',function(req,res){
    res.sendFile(path.join(__dirname,'./videos.html'));
    console.log("video");
})