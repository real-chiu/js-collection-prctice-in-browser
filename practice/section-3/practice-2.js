'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const { value: valueOfObjectB } = objectB;
  return collectionA.map(element => {
    if (valueOfObjectB.includes(element.key)) {
      const minusValue = Math.floor(element.count / 3);
      return {
        key: element.key,
        count: element.count - minusValue
      }
    }
    return element;
  });
}
