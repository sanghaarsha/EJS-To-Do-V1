const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3030;
}

let todos = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", (req, res) => {
    let date = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let day = date.toLocaleDateString("en-US", options);

    res.render("list", { day: day, todoArray: todos });
});

app.post("/", (req, res) => {
    newTodo = req.body.newTodo;
    todos.push(newTodo);
    res.redirect("/");
});

app.listen(port);
