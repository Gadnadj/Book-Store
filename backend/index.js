const express = require("express");
const app = express();

const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
require("dotenv").config();

//J9oYfI0JY4H7x9tY

async function main() {
  await mongoose.connect(process.env.DB_URL);
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
