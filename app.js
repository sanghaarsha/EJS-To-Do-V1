const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(express.static("public"));
app.set("view engine", "ejs");

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3030;
}
// Global array for list-items of To-Do
const todos = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

// For default List
app.get("/", (req, res) => {
    let day = date.getDate(); // from date module

    res.render("list", {
        listTitle: day,
        todoArray: todos,
    });
});

// For woork list
app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "work",
        todoArray: workItems,
    });
});

app.post("/", (req, res) => {
    let newTodo = req.body.newTodo;

    if (req.body.list === "work") {
        workItems.push(newTodo);
        res.redirect("/work");
    } else {
        todos.push(newTodo);
        res.redirect("/");
    }
});

app.listen(port);
