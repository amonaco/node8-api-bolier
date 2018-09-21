const express = require('express');
const app = express();

const winston = require('winston');
const expressWinston = require('express-winston');

// move to file
global.config = { "root": "/root/node/boiler", "port": 3000 };

// winston logger
app.use(expressWinston.logger({
  transports: [ new winston.transports.Console({ json: true }) ]
}));

// load routes
require('./config/routes')(app);

// disable these headers
app.disable('etag');
app.disable('x-powered-by');

app.listen(config.port, () => console.log(`app listening!`));
