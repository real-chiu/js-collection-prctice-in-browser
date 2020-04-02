'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let object = {};

  //count for appearance of char and save into object
  collectionA.forEach(key => {
    if (!object[key]) {
      // if key already exists
      object[key] = 1;
    } else {
      object[key] += 1
    }
  });

  let objectArray = [];
  for (let [key, value] of Object.entries(object)) {
    objectArray.push({
      key,
      count: value
    });
  };

  const { value } = objectB;
  return objectArray.map(e => {
    if (value.includes(e.key)) {
      const minusValue = Math.floor(e.count / 3);
      return {
        key: e.key,
        count: e.count - minusValue
      }
    }
    return e;
  });
}
