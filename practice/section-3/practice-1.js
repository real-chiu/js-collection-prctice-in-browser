'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const { value } = objectB;
  return collectionA.map(e => {
    if (value.includes(e.key)) {
      return {
        key: e.key,
        count: e.count - 1
      }
    }
    return e;
  });
}
