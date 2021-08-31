let mongoose = require("mongoose");
const connectionStr = "mongodb://127.0.0.1:27017/contact";

const Person = require("./model/Person");
// Database Connection
mongoose
  .connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      `Database connection successful at http://${mongoose.connection.host}:${mongoose.connection.port}`
    );
  })
  .catch((err) => {
    console.error("Database connection error");
  });

/*const item = {
  name: "ahmed",
  age: 33,
  email: "ahmed@gmail.com",
  favoriteFoods: ["pasta", "chicken", "rice"],
};

Person.create(item, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});*/

/*const person = new Person({
  name: "Amr",
  age: 20,
  email: "amr@gmail.com",
  favoriteFoods: ["rice"],
});

person.save((err, data) => {
  if (err) console.log(err);
  console.log(data);
});*/
/*let arrayOfPeople = [
  {
    name: "Sara",
    age: 40,
    email: "sara@gmail.com",
    favoriteFoods: ["pasta", "cheese"],
  },

  {
    name: "Hager",
    age: 25,
    email: "hager@gmail.com",
    favoriteFoods: ["KFC", "Pizza"],
  },
];

Person.create(arrayOfPeople, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});*/

/*Person.find({ name: "Hager" }, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});*/

/*Person.findOne({ favoriteFoods: "Chicken" }, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});*/

/*Person.findById(Person.personId, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});*/

/*var foodToAdd = "hamburger";
Person.findById("612e2b9a9be1c4f91525c852", (err, data) => {
  data.favoriteFoods.push(foodToAdd);
  data.save();
  if (err) console.log(err);
  console.log(data);
});*/

/*var ageToSet = 20;

Person.findOneAndUpdate(
  { name: "Hager" },
  { $set: { age: ageToSet } },
  { new: true },
  (err, data) => {
    if (err) console.log(err);
    console.log(data);
  }
);*/

/*Person.findByIdAndRemove("612e2b9a9be1c4f91525c852", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});*/

/*Person.remove("Sara", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});*/

var foodToSearch = "Pizza";
Person.find({ favoriteFoods: foodToSearch })
  .sort({ name: "desc" })
  .limit(2)
  .select("-age")
  .exec((err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
