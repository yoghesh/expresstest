
 var http = require('http');
var url = require('url');
 var server = http.createServer(function(req, res) {
 res.setHeader("Access-Control-Allow-Origin", "*");
	 var q = url.parse(req.url, true);
	 console.log(q.pathname);
   res.writeHead(200);
   if(req.url === '/boundary'){
   http.get('http://www.cricbuzz.com/cricket-series/api/stats/highlights-list?statsType=boundary&seriesType=IPL&seriesId=2676',
   (resp)=> {
	   resp.on('data',(chunk)=>{
		   res.write(chunk);
	   });
	   resp.on('end', ()=>{
		   	   res.end();
	   });
   });
   }
   else if(req.url === '/wickets'){
   http.get('http://www.cricbuzz.com/cricket-series/api/stats/zone?statsType=mostWickets&seriesType=IPL&seriesId=2676',
   (resp)=> {
	   resp.on('data',(chunk)=>{
		   res.write(chunk);
	   });
	   resp.on('end', ()=>{
		   	   res.end();
	   });
   });
   }
   else if(req.url === '/runs'){
   http.get('http://www.cricbuzz.com/cricket-series/api/stats/zone?statsType=mostRuns&seriesType=IPL&seriesId=2676',
   (resp)=> {
	   resp.on('data',(chunk)=>{
		   res.write(chunk);
	   });
	   resp.on('end', ()=>{
		   	   res.end();
	   });
   });
   }
   else if( q.pathname === '/match')
   {
	   var id = url.parse(req.url, true).query;
	   http.get('http://www.cricbuzz.com/match-api/'+id.id+'/commentary.json',
   (resp)=> {
	   resp.on('data',(chunk)=>{
		   res.write(chunk);
	   });
	   resp.on('end', ()=>{
		   	   res.end();
	   });
   });
   }
   else if( q.pathname === '/matchfull')
   {
	   var id = url.parse(req.url, true).query;
	   http.get('http://www.cricbuzz.com/match-api/'+id.id+'/commentary-full.json',
   (resp)=> {
	   resp.on('data',(chunk)=>{
		   res.write(chunk);
	   });
	   resp.on('end', ()=>{
		   	   res.end();
	   });
   });
   }
   else{
	   res.write('Hello');
	   res.end();
   }
   
   //res.end('Hello World');
 });
 server.listen(8080);
