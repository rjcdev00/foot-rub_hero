const db = require("../models");

module.exports ={
    findByName: function(req,res) {
        db.User
        .findByUser(req.params.username)

    },
    
}