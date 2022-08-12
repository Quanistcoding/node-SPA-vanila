const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req,res)=>{
    let reqUrl = "." + req.url; 
    
    if(reqUrl === "./"){
        fs.readFile('./index.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end()
        })
    };
   
    if(/^.\/static/.test(reqUrl)){
        fs.readFile(reqUrl,(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end()
        })
    };

    if(/^.\/pages/.test(reqUrl)){
        fs.readFile(reqUrl,(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end()
        })
    };


}).listen(port);

console.log("listening on " + port)