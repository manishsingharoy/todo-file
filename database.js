const mongoose = require("mongoose");
const MONGO_URI = `mongodb+srv://singharoymanish14:admin@cluster0.ffpl2mh.mongodb.net/?retryWrites=true&w=majority`;
const connectDatabase = async () => {
  await mongoose
    .connect(MONGO_URI, {})
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDatabase;