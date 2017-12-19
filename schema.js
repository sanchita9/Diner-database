var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/3000');
var Schema = mongoose.Schema;

const MenuSchema = new Schema ({
  
  name: {
  type: String,
  trim: true,
  required: true
},

    price: {
    	type: Number,
    	required: true
},
	ingredients: [String]
});

 var ChefSchema = new Schema ({
  username: {
  type: String,
  trim: true,
  required: "Username is required"
 },

password: {
	type: String,
	trim: true,
	required: "Password is required",
	validate: [
      function(input) {
      	return input.length >=6;
      };
      "Password should be longer."
	]
},
photoUrl: {

},

email: {
	type: String,
	unique: true,
	match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
},
skills: {
	type: Number,
	type: [String]
}

userCreated: {
	type: Date,
	default: Date.now
}
});

var CusineSchema = new Schema ({
	title: String,
	menus:  [DinerSchema, ChefSchema]
})



mongoose.model("Menu", MenuSchema);
mongoose.model("Chef", ChefSchema);
mongoose.model("Cuisine", CuisineSchema);
module.exports = mongoose;