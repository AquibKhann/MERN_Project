const express = require("express");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors')


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'http://localhost:5173/',
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
    allowHeaders : [
      "Content-Type",
      'Authorization',
      'Cache-Control',
      'Expires',
      'Pragma'
    ],
    credentials : true
  })
);
app.use(cookieParser());
app.use(express.json());

mongoose.connect("mongodb+srv://aquibkhanstud:F39N47ycshhXUzrw@cluster0.heehf.mongodb.net/")
  .then(()=>console.log("Mongodb connected"))
  .catch((error)=>console.log(error));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
