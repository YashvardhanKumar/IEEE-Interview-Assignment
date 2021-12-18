const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const { Users, Meetings } = require("./models/userMeetingsSchema");
const { redirect } = require("express/lib/response");
const console = require("console");
const dotenv = require("dotenv")
const userRoutes = require("./routes/user")
const meetingRoutes = require("./routes/meetings")

dotenv.config()
const router = express.Router()

const http = require("http")

http.createServer((req, res)=>{

})

const port = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URL
  )
  .then(() => {
    console.log("Database connection open!");
  })
  .catch((err) => {
    console.log("Database error!");
    console.log(err);
  });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "styling")));
app.use('/users', userRoutes);
app.use('/meetings', meetingRoutes)

app.get("/", (req, res) => {
    res.render("index")
})



app.use((req, res, next)=>{
    res.status(404).send("<h1> Error 404 Not Found </h1>");
})


app.listen(port, () => {
  console.log(`server started at ${port}`);
});
