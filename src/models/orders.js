'use strict';

import uuid from 'uuid/v1';
import storage from '../lib/storage/filesystem';

class Order {
  constructor(config) {
    this.id = uuid();
    this.orderDate = new Date();
    this.item = config && config.item || '';
    this.itemQuantity = config && config.itemQuantity || 1;
  }

  save() {
    return storage.save(this);
  }

  static get(id) {
    return storage.get(id);
  }
}

export default Order;