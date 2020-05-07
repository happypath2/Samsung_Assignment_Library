import {logger} from "./logger/"
var PORT = process.env['PORT'] || 5000;

var app = require('./app.js')();
logger.log({
    level: 'info',
    label: 'Library',
    message: 'started'
  });

console.log("Running @ http://localhost:"  + PORT + ". Press ^C to Terminate.");
app.listen(PORT);