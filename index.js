var express = require('express');
var app = express();
var tunnel = require('node-local-tunnel');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
module.exports.options = {
    localBase: 'http://localhost:3000/*'
};
tunnel.init();
tunnel.client(options);
app.use(tunnel.server());
app.get('/', function(req,res){
	res.send('Hello world');
});


app.listen(3000, server_ip, function(){
	console.log("Application started in " + server_ip + " "  + server_port);
});