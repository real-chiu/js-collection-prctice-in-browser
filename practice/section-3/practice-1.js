'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const { value: valueOfObjectB } = objectB;
  return collectionA.map(element => {
    if (valueOfObjectB.includes(element.key)) {
      return {
        key: element.key,
        count: element.count - 1
      }
    }
    return element;
  });
}
