const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  // An array with only one element should yield an empty array for its tail
  it("returns 0 for ['cat']", () => {
    assert.deepEqual(tail(["cat"]), []);
  });

  // An empty array should yield an empty array for its tail
  it("returns an empty array for []", () => {
    assert.deepEqual(tail([]), []);
  });

  // returns the end of the array minus the first element
  it("returns ['cat', 'dog', 'fish'] for ['cow', 'cat', 'dog', 'fish']", () => {
    assert.deepEqual(tail(['cow', 'cat', 'dog', 'fish']), ['cat', 'dog', 'fish']);
  });
});