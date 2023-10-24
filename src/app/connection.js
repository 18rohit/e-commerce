import mongoose from "mongoose";

export default async function connectDB() {
  const { username = "rohitkumar", password = "simplepass" } = process.env;
  try {
    await mongoose.connect(
      "mongodb+srv://" +
        username +
        ":" +
        password +
        "@cluster0.kjmwuhh.mongodb.net/productDB?retryWrites=true&w=majority"
    );
    console.log("CONNECTED");
  } catch (err) {
    console.log("Error: ", err);
  }
}
