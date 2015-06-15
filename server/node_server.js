var http=require("http");
var host="127.0.0.1";
var port=1337;
var fs=require('fs');
var index_page=fs.readFileSync('../index.html');
var server=http.createServer(function(request, response){
	console.log("Request recieved"+ request.url);
	response.setHeader("Content-Type", "text/html");
	response.writeHeader("200", "OK");
	response.end(index_page);
});
server.listen(port, host, function(){
	console.log("Listening"+ host+":"+port);
});