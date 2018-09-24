const debug = require('debug')('api');

import express from 'express';
import Order from '../models/orders';
import modelFinder from '../middleware/modelFinder';

let router = express.Router();
router.param('model', modelFinder);

let baseRoute = '/api/v1';

router.post(`${baseRoute}/:model`, (req, res, next) => {
  debug('post');

  if (!req.body) {
    next();

  } else {
    let order = new req.model(req.body);

    order.save()
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

    Order.get(req.params.id)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(next);
  }
});

router.put(`${baseRoute}/:model/:id/:orderNum`, (req, res, next) => {
  debug('put');

  if (!req.body) {
    next();

  } else {

    Order.put(req.params.id, req.params.orderNum)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(next);
  }
});

export default router;