const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  // An array with only one element should yield an empty array for its tail
  it("returns 0 for ['cat']", () => {
    assert.strictEqual(tail(["cat"]).length, 0);
  });

  // An empty array should yield an empty array for its tail
  it("returns an empty array for []", () => {
    assert.strictEqual(tail([]).length, 0);
  });
  
});