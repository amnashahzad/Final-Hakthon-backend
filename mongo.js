const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.y22q1ja.mongodb.net/data"
  )

  .then(() => {
    console.log("mongoDB connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true
},
  password: {
    type: String,
    require: true,
  },
  token: {
    type: String,
    required: true,
  },
});

const Resultss = mongoose.model("Resultss", newSchema);
module.exports = Resultss;


