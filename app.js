const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3030;
}

app.get("/", (req, res) => {
    date = new Date();
    const dayName = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    today = dayName[date.getDay()];

    res.render("list", { day: today });
});

app.listen(port);
