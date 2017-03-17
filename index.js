//built in requires
const path = require('path');

//npm requires
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const app = express();

//my modules
const routes = require('./routes')

//nunjucks stuff
nunjucks.configure('views', { noCache: true });
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

//middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// setting up server
app.listen(3000, function(){
  console.log('listening on 3000');
})

//routes
app.use('/', routes);

//static routing
app.use(express.static(path.join(__dirname, '/public')));

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Resource not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render('error', {error: err});
});
