const express = require('express');
const db = require("./db/db");
const app = express();
const PORT = 3000;
// const cors = require("cors");
// app.use(cors());
app.get("/", (req, res) => {
    db.query("select * FROM heroku_fcf45fc874be4c6.a;")
})

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`);
})
