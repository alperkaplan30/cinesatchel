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

app.use(express.json());
app.use("/api/videos", videoRoute)
app.listen(process.env.PORT, () => {
    console.log("Backend server started");
});

app.use(express.static(__dirname));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
