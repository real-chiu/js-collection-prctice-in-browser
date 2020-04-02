'use strict';

function collectSameElements(collectionA, objectB) {
  const { value } = objectB;
  return collectionA.filter(e => value.includes(e));
}
