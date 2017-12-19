var mongoose = require("./schema");
var seedData = require("./seeds");

var Menu = mongoose.model("Cuisine");

Menu.remove({}).then(function() {
  Menu.collection.insert(seedData).then(function() {
    process.exit();
  });
});