let mongoose = require("mongoose");
let personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  email: { type: String, unique: true, required: true, lowercase: true },
  favoriteFoods: [String],
});
module.exports = mongoose.model("Person", personSchema);
