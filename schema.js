var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/3001');
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
	descriptions: { 
		type: Array,
	required: true
},
photoUrl: {
	
},
});

 const ChefSchema = new Schema ({
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
phoneNumber: {
	type: Number
},

email: {
	type: String,
	unique: true,
	match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
},
skills: {
	yearsExp: {type: Number, required:true},
	skillSet: {type: [String], required : true}
},

userCreated: {
	type: Date,
	default: Date.now()
},
});

 const DinerSchema = new Schema ({
  username: {
  type: String,
  trim: true,
  required: "Username is required"
 },
 name: {
 	type: String
 }

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

phoneNumber: {
	type: Number
},

email: {
	type: String,
	unique: true,
	match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
},
address: {
	state: String,
	city: String,
	zipcode: Number,
	street: String
},
order : {
	type: String,
	numberOfPeople: Number,
},
paymemt: {
	type: String,
	cardNumber: Number,
	trim: true,
	unique: true,
	required: "Credit card number is required"
}

 });

const MenuModel = mongoose.model("Menu", MenuSchema);
const DinerModel = mongoose.model("Diner", DinerSchema);
const ChefModel = mongoose.model("Chef", ChefSchema);


module.exports = {MenuModel, ChefModel, DinerModel};
