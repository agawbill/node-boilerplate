const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
// const routes = require("./routes/product.routes");
const app = express();

mongoose.connect(`${keys.mongoURI}`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

const product = require("./routes/product.routes");
app.use("/products", product);

app.listen(3000, () => {
  console.log("Server is on 3000");
});
