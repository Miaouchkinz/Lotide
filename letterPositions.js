const assertArraysEqual = require('./assertArraysEqual');
const eqArrays  = require('./eqArrays');

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

module.exports = letterPositions;

// TEST
// console.log(letterPositions("hello"));
// assertArraysEqual(letterPositions("hello").e, [1]);