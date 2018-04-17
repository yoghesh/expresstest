var express = require('express');
var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

app.get('/', function(req,res){
	res.send('Hello world');
});


app.listen(server_port, server_ip, function(){
	console.log("Application started in " + server_ip + " "  + server_port);
});