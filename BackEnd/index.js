const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())

const uname = "Muthu";
const pass = 444;

// Get method
app.get("/", (req, res) => {
    if (req.query.username === uname && req.query.password == pass) {
        res.send(true);
    } else {
        res.send(false);
    }
})

// Post Method
// app.use(express.urlencoded({ extended: true }))

// app.use(express.json())
// app.post("/", (req, res) => {
//     if (req.body.username === uname && req.body.password == pass) {
//         res.send(true);
//     } else {
//         res.send(false);
//     }
// })

app.listen(5050, () => {
    console.log("Port 5050 running...");
})