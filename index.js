// var express = require('express');
// var app = express();
// var tunnel = require('node-local-tunnel');
// var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
// var server_ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
// app.get('*', function(req,res){
	// res.send('Hello world');
// });


// app.listen(server_port, server_ip, function(){
	// console.log("Application started in " + server_ip + " "  + server_port);
// });

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello World');
});
server.listen(8080);