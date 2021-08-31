require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('_middleware/error-handler');
const logger = require('morgan');
const RateLimit = require('express-rate-limit');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// log every request
app.use(logger('dev'));

// Configure Request Rate Limiter
var limiter = new RateLimit({
  windowMs: 60 * 1000, // 1 minute window in milliseconds
  max: 200, // limit each IP to 200 requests per windowMs
  delayMs: 0,  // disable delaying - full speed until the max limit is reached
  statusCode: 429
})
app.all('*', limiter);

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

// api root
app.use('/user', require('./controllers/user.controller'));


// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 7500;
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
