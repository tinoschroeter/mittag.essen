import express from "express";
import morgan from "morgan";
import ejs from "ejs";
import fs from "fs";

import recipe from "./recipe.js";

const file = fs.readFileSync("./data.json");
const app = express();

const data = JSON.parse(file.toString());

app.set("view engine", "ejs");
app.use(morgan("combined"));
app.use(express.static("www"));

app.use("/", express.static("www"));
app.get("/sen/:item", recipe(data));
app.get("/api", (req, res) => res.json(data));
app.get("*", (req, res) => res.render("404"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
