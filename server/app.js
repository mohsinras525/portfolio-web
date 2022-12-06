var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
// const fileUpload = require('express-fileupload');
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});
const upload = multer({ storage: storage })

// importing database connection
const connectDatabase = require('./config/connectDb')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const projectRoutes = require('./routes/projectRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
// app.use(fileUpload({
//   useTempFiles:true,
//   limits:{fileSize: 50 * 2024 * 1024}
// }))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors()) 
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static('uploads'))
app.post("/uploadimage", upload.single("image"), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  try {
    const host = req.hostname;
    const filePath = process.env.URL + req.file.filename;
    console.log(req.file, req.body)
    return res.status(200).json({
       url: filePath
      })
  } catch (e){
    return res.status(200).json(e)
  }
})
// dotenv setup
require('dotenv').config({ path: './config/config.env' })

// connecting o a database
connectDatabase()


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/project', projectRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
