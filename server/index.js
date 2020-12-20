const express = require('express');
const db = require("./db/db");
const app = express();
const PORT = 3000;
// const cors = require("cors");
// app.use(cors());
app.get("/", (req, res) => {
    res.json({
        hey: "guys",
        welcome: "back",
    });
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
})