var http=require("http");
var host="127.0.0.1";
var port=1337;
var server=http.createServer(function(request, response){
	console.log("Request recieved"+ request.url);
});
server.listen(port, host, function(){
	console.log("Listening"+ host+":"+port);
});