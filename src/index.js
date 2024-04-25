const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('login'));

mongoose.connect('mongodb://localhost:27017/abhinav');
const db = mongoose.connection;

db.on('error', () => console.log("Error in connecting to database"));
db.once('open', () => console.log("Connected to database"));

app.post("/index", (req, res) => {
    const { fname, lname, password, yourMail } = req.body;

    const data = {
        fname,
        lname,
        password,
        yourMail
    };

    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record inserted");
    });
    return res.redirect('index1.html');
});
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    return res.redirect('index.htm');
});

const PORT = 3600;
app.listen(PORT, () => {
    console.log("Listening at port", PORT);
});
