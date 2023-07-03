const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const videoRoute = require("./routes/videos")
dotenv.config();

mongoose
    .connect(process.env.MONGO_ULR, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json());
app.use("/api/videos", videoRoute)
app.listen(process.env.PORT, () => {
    console.log("Backend server started");
});
