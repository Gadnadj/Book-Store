const express = require("express");
const app = express();

const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  app.use("/", (req, res) => {
    res.send("Welcome to my server!");
  });
}

main()
  .then(() => console.log("Mongodb Connect successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Exemple app listening on port ${port}`);
});
