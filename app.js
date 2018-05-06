const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/sepatu');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", require("./src/routes/index"));
app.use("/data", require("./src/routes/datas"));


app.listen(process.env.PORT || 4000, () =>
  console.log("listening on port 4000")
);
