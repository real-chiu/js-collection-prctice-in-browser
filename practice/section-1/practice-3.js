'use strict';

function collectSameElements(collectionA, objectB) {
  const { value: valueOfObjectB } = objectB;
  return collectionA.filter(element => valueOfObjectB.includes(element));
}
