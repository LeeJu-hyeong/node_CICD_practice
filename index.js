const express = require('express');
const request = require('request');
const app = express();

app.get('/', (req, res)=>{
	res.json({
		state: "Success!"
	});
});

app.get('/calculate/:id', (req, res)=>{
	var n = Number(req.param.id);
	var sum = n * (n+1) / 2;
	var power = n * n;
	res.json({
		number: n,
		sigmaFromOneToNumber: sum,
		power: power
	});
});

app.get('/api/test', (req, res)=>{
	res.json({
		apiName: "node.js deploy test",
		state: "success"
	});
});

var server = app.listen('3000', '0.0.0.0', ()=>{
	var host = server.address().address;
   	var port = server.address().port;

	console.log(host, port);
	console.log("Server started on port 3000!");
});
