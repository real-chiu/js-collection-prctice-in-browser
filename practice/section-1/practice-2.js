'use strict';

function collectSameElements(collectionA, collectionB) {
  let flattenArray = collectionB.flat();
  return collectionA.filter(e => flattenArray.includes(e));
}
