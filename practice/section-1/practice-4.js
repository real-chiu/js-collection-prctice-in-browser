'use strict';

function collectSameElements(collectionA, objectB) {
  const { value } = objectB;
  let filteredCollectionA = collectionA.filter(e => value.includes(e.key));
  return filteredCollectionA.map(e => e.key);
}
