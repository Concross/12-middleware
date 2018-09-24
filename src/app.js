'use strict';

import express from 'express';
import morgan from 'morgan';
import modelFinder from './middleware/modelFinder';
import customerRouter from './api/customersRouter';
import orderRouter from './api/ordersRouter';
import notFound from './middleware/notFound';

let app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customerRouter);
app.use(orderRouter);
app.use(modelFinder);
app.use(notFound);

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