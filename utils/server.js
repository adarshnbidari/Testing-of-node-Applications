const express=require('express');

var app=express();

app.get('/',(req,res)=>{
	res.status(404).res.send({
		error:"page not found",
		name:"todo"
	});
});

app.get('/users',(req,res)=>{
	res.send({
		name:"adarsh",
		age:21
	},{
		name:"bidari",
		age:22
	},{
		name:"anb",
		age:23
	});
});


app.listen(3000);

module.exports.app=app;