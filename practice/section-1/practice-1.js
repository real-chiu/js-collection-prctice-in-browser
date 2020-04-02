'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(e => collectionB.includes(e));
}
