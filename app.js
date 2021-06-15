
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var api = require('./routes/api');
var app = express();
app.use(logger('dev'))
console.log('logger succesful');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'public'),{inde:false}));
var cors = require('cors');
app.use(cors())
app.use('/api', api);

//==================== CATCH 404 ====================//
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//==================== ERROR HANDLER ====================//
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  console.log(err);
  res.json('Not found');
});


//==================== EXPORT EXPRESS INSTANCE ====================//
module.exports = app;
