const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")
const assert = require('chai').assert;

describe("#middle", () => {
  // One to two elements, returns empty array
  it("returns empty array when your array has one to two elements", () => {
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1, 2]), []);
  });

  // Uneven number returns one element
  it("returns one element when your array's length is an uneven number", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

   // Even number returns two elements
   it("returns two element when your array's length is an even number", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});