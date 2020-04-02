'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let object = {};
  collectionA.forEach(key => {
    let extraValue = 0;
    let keyToAddExtraValue = '';
    
    if (key.indexOf('-') > -1) { 
      // if element includes "-"
      let keyCharArray = key.split("");
      keyToAddExtraValue = keyCharArray[0];
      extraValue = keyCharArray[2];
      if (!object[keyToAddExtraValue]) { 
        // if key already exists
        object[keyToAddExtraValue] = extraValue;
      } else {
        object[keyToAddExtraValue] += extraValue;
      }
    } else {
      if (!object[key]) { 
        // if key already exists
        object[key] = 1;
      } else {
        object[key] += 1
      }
    }
  });

  let objectArray = [];
  for (let [key, value] of Object.entries(object)) {
    objectArray.push({
      key,
      count: value
    });
  };

  const { value } = objectB;
  return objectArray.map(e => {
    if (value.includes(e.key)) {
      const minusValue = Math.floor(e.count / 3);
      return {
        key: e.key,
        count: e.count - minusValue
      }
    }
    return e;
  });
}
