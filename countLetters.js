// AssertEqual tweaked to check objects
const assertEqual = function(actual, expected) {
  for (let key in actual) {
    if (actual[key] !== expected[key]) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`); // FALSE
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); // TRUE
};

const countLetters = function(string) {
  string = string.replace(/\s+/g,'');
  console.log(string);
  const results = {};
  for (const letters of string) {
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }
  console.log(results);
  return results;
};

// TEST
assertEqual(countLetters("hello there"), {h: 2, e: 3, l: 2, o: 1, t: 1, r: 1});
assertEqual(countLetters("hello there"), {h: 2, e: 3, l: 2, o: 1, t: 1, r: 1});
assertEqual(countLetters("orange apples"), {o: 1, r: 1, a: 2, n: 1, g: 1, e: 2, p: 2, l: 1, s: 1});
assertEqual(countLetters("meow"), {m: 1, e: 1, o: 1, w: 1});
