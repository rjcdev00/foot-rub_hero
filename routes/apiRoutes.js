module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();


	//add any API routes here

	//adding user to db
 router.post("api/user", function(req, res){
	const newUser = req.body;
 });
 //show user total sessions count
 router.get("/api/sessions", function(req, res){

 });

 //adding a session to the db
 router.put("/api/sessions",function(req,res){
	 const newSession = req.body;
 });
	
//clearing the sessions
router.delete("/api/sessions", function(req,res){
	const newSession = req.body;
});
	

	return router;
}

let seeds = [{
	name: "Ryan Compton",
	sessions: 10000000,
	date: Date.now
},{
	name: "Joel Robinson",
	sessions: 480,
	date: Date.now
},{
	name: "Mike Nelson",
	sessions: 19,
	date: Date.now
}]