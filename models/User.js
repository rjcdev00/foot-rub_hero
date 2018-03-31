const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
// mongoose.connect('mongodb://localhost/foot-rub-hero-development');


// ***should these each be in their own model?****
const User = new Schema({
	name:{  
		type:String,
		trim: true,
		required: "Name required."
	}
	
	,
	sessions: {
		type: Number,
		trim: true
	}
	// date: {
	// 	type: Date,
	// 	default: Date.now
	// }

});
//passport-local-mongoose creates a 'username' and some password fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);