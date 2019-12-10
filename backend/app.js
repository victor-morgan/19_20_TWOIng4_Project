var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var sensorsRouter = require("./routes/sensors");
var measuresRouter = require("./routes/measures");

mongoose.Promise = global.Promise;
const connexionString = 'mongodb+srv://LouisGece:YorF-788@cluster0-5kzkb.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(connexionString, {
    useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connecté")
});

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/sensors", sensorsRouter);
app.use("/measures", measuresRouter);

module.exports = app;
