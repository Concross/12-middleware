'use strict';

import express from 'express';
import morgan from 'morgan';
import error from './middleware/error';

let app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTER HERE

// app.use(error);

let isRunning = false;

module.exports = {
  start: (port) => {
    if (isRunning) {
      console.log(`Server is already running on port ${port}`);
    } else {
      app.listen(port, err => {
        if (err) { throw err; }
        isRunning = true;
        console.log(`Server is listening on port ${port}`);
      });
    }
  },
  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log(`Server has been shut down`);
    });
  },
};