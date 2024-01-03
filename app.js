const express = require("express");
require("dotenv").config();
const {connectToMongoDB} = require("./models/index");
const genreRouter = require("./routes/genre");
const PORT = process.env.PORT || 3000;
const app = express();


connectToMongoDB();

app.use(express.json());


app.use("/",(req,res)=>{
    res.status(200).send("Welcome to Your Home of Genres")
});

app.use(genreRouter);
app.use("*",(req,res)=>{
    res.status(404).send("Resource not found")
});


app.listen(PORT,()=> console.log(`Server running at port ${PORT}`));