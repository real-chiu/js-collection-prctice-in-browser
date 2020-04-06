'use strict';

function collectSameElements(collectionA, objectB) {
  const { value: valueOfObjectB } = objectB;
  let filteredCollectionA = collectionA.filter(element => valueOfObjectB.includes(element.key));
  return filteredCollectionA.map(element => element.key);
}
