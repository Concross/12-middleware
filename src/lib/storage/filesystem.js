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

export default storage;