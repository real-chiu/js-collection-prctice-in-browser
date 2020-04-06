'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let objectOfCollectionA = {};

  //count for appearance of char and save into object
  collectionA.forEach(key => {
    if (!objectOfCollectionA[key]) {
      // if key already exists
      objectOfCollectionA[key] = 1;
    } else {
      objectOfCollectionA[key] += 1
    }
  });

  let separatedObjectArray = separateKeyAndValueInObjectOfCollectionA(objectOfCollectionA);

  return minusCountofObjectArray(objectB, separatedObjectArray);
  
}

function separateKeyAndValueInObjectOfCollectionA(objectOfCollectionA) {
  let separatedObjectArray = [];
  for (let [key, value] of Object.entries(objectOfCollectionA)) {
    separatedObjectArray.push({
      key,
      count: value
    });
  };
  return separatedObjectArray;
}

function minusCountofObjectArray(objectB, separatedObjectArray) {
  const { value: valueOfObjectB } = objectB;
  
  return separatedObjectArray.map(element => {
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