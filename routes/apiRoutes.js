module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const User = require ("../models/User.js").User

	//add any API routes here

	//adding user to db
 router.post("api/user", function(req, res){
	const newUser = req.body;
	User.create(newUser).then(function(data){
		res.json(data);
	})
 });
 //show user total sessions count
 router.get("/api/sessions", function(req, res){
	User.find().exec(function(err,data){
		if(err) throw err;
		res.json(data);
	});
 });

 //adding a session to the db
 router.put("/api/sessions",function(req,res){
	 const newSession = req.body;
	 User.findByIdAndUpdate(req.body._id,{$set:req.body}).exec(function(err,data){
		 if(err) throw err;
		 res.json("Session Updated");
	 });
 });
	
//clearing the sessions
router.delete("/api/sessions", function(req,res){
	const newSession = req.body;
	User.findByIdAndRemove(req.body._id).exec(function(err,data){
		if(err) return err;
		res.json("All Sessions deleted");
	});
});
	

	return router;
}

let seeds = [{
	name: "Ryan Compton",
	sessions: 10000000,
	date: Date.now
},{
	"name": "Joel Robinson",
	"sessions": 480,
	"date": Date.now
},{
	"name": "Mike Nelson",
	"sessions": 19,
	"date": Date.now
}]