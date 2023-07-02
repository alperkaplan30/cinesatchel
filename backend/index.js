const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
    .connect(process.env.MONGO_ULR, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log("Backend server started");
});