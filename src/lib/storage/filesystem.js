'use strict';

import fs from 'fs';

const storage = {};

const databaseDir = `${__dirname}/../../data`;

storage.save = (data) => {

  return new Promise((resolve, reject) => {
    if (!data.id) { reject('Unable to save file with no ID'); }

    let file = `${databaseDir}/${data.id}.json`;
    let text = JSON.stringify(data);

    fs.writeFile(file, text, err => {
      if (err) { reject(err); }
      resolve(data);
    });
  });
};

storage.get = (id) => {

  return new Promise((resolve, reject) => {
    if (!id) { reject('Unable to get file without proper ID'); }

    let file = `${databaseDir}/${id}.json`;

    fs.readFile(file, (err, data) => {
      if (err) { reject(err); }
      let obj = JSON.parse(data);
      resolve(obj);
    });
  });
};

export default storage;