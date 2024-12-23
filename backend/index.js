const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//routes
app.use("/", (req, res) => {
  res.send("Welcome to my server!");
});

app.listen(port, () => {
  console.log(`Exemple app listening on port ${port}`);
});
