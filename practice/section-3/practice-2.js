'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const { value } = objectB;
  return collectionA.map(e => {
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
