const express = require('express');
const request = require('request');
const app = express();

app.get('/', (req, res)=>{
	res.json({
		state: "Success!"
	});
});

var server = app.listen('3000', '0.0.0.0', ()=>{
	var host = server.address().address;
   	var port = server.address().port;

	console.log(host, port);
	console.log("Server started on port 3000!");
});
