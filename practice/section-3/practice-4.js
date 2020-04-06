'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let objectOfCollectionA = {};
  collectionA.forEach(keyOfCollectionA => {
    let extraValue = 0;
    let keyToAddExtraValue = '';
    
    if (keyOfCollectionA.indexOf('-') > -1) { 
      let keyCharArray = keyOfCollectionA.split("");
      keyToAddExtraValue = keyCharArray[0];
      extraValue = keyCharArray[2];
      if (!objectOfCollectionA[keyToAddExtraValue]) { 
        objectOfCollectionA[keyToAddExtraValue] = extraValue;
      } else {
        objectOfCollectionA[keyToAddExtraValue] += extraValue;
      }
    } else {
      if (!objectOfCollectionA[keyOfCollectionA]) { 
        objectOfCollectionA[keyOfCollectionA] = 1;
      } else {
        objectOfCollectionA[keyOfCollectionA] += 1
      }
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