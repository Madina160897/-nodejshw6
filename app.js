const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser")

app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get("/users", (req, res) =>{

    const users = JSON.parse(fs.readFileSync("users.json"));
    res.render("users.hbs", {
        users
    });
})


app.listen(8080);