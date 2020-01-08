const assertArraysEqual = function(firstArray, secondArray) {
  let isSame = true;
  if (firstArray.length !== secondArray.length) {
    isSame = false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      isSame = false;
    }
  }
  if (isSame === true) {
    console.log(`✅✅✅ Assertion Passed: these arrays are equal!`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: these arrays are not equal!`);
  }
};

const eqArrays  = function(firstArray, secondArray) {
  let isSame = true;
  if (firstArray.length !== secondArray.length) {
    isSame = false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      isSame = false;
    }
  }
  return isSame;
};

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(/\s+/g,'');
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

// TEST
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);