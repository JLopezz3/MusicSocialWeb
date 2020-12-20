const express = require('express');
const db = require("./db/db");
const app = express();
const PORT = 3000;
// const cors = require("cors");
// app.use(cors());

// app.get("/", (req, res) => {
//     res.json({
//         yo: "guys",
//         welcome: "back",
//         du: "ma"
//     });
// });

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
})