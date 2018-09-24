'use strict';

import requireAll from 'require-dir';

const models = requireAll('../models/');

let modelFinder = (req, res, next) => {
  try {
    let model = req && req.params && req.params.model;

    if (model && models[model] && models[model].default) {
      req.model = models[model].default;
      console.log(req.model);
      next();

    } else {
      throw new Error('modelFinder unable to find Model');

    }
  } catch (e) {
    console.error(e);
  }
};

export default modelFinder;