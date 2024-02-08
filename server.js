const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 8080;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const connectDatabase=require("./database");
connectDatabase();

app.get("/", function (req, res) {
    const htmlFilepath = path.join(__dirname, "view", "index.html");
    res.sendFile(htmlFilepath);
});

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}/`);
});