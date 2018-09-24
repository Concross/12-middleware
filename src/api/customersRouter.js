'use strict';

const debug = require('debug')('api');

import express from 'express';
import Customer from '../models/customers';
import modelFinder from '../middleware/modelFinder';

let router = express.Router();
router.param('model', modelFinder);

let baseRoute = '/api/v1';

router.post(`${baseRoute}/:model`, (req, res, next) => {
  debug('post');

  if (!req.body) {
    next();

  } else {
    let customer = new req.model(req.body);

    customer.save()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(next);
  }
});

router.get(`${baseRoute}/:model/:id`, (req, res, next) => {
  debug('get one');

  if (!req.body) {
    next();

  } else {

    Customer.get(req.params.id)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(next);
  }

});


export default router;