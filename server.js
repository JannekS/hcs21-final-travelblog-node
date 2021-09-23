require('dotenv').config();

const express = require("express");
const router = require("./router");
const path = require("path");
const cors = require("cors");


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    console.log("Some random user just requested the homepage...");
    res.send("Hello World!");
})

app.use(router);
// SAME AS
// app.use("/", router);

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});