'use strict';

import uuid from 'uuid/v1';
import storage from '../lib/storage/filesystem';

class Customer {
  constructor(config) {
    this.id = uuid();
    this.orderHistory = [];
    this.age = config && config.age || null;
    this.gender = config && config.gender || '';
    this.ethnicity = config && config.ethnicity || '';
    this.salary = config && config.salary || 0;
  }

  save() {
    return storage.save(this);
  }

  static get(id) {
    return storage.get(id);
  }
}

export default Customer;