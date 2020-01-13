# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gabrichard/lotide`

**Require it:**

`const _ = require('@gabrichard/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `head(array)`: find and return the first element of an array.
*  `tail(array)`: removes the first element and returns the remainder of the array.
*  `middle(array)`: returns the middle index elemenst of a given array.
*  `assertEqual(actual, expected)`: a test to compare primitive values to verify that your function is returning the expected outcome.
*  `assertArraysEqual(actual, expected)`: a test to compare arrays to verify that your function is returning the expected outcome.
*  `assertObjectEqual(actual, expected)`: a test to compare objects to verify that your function is returning the expected outcome.
*  `countLetters(string)`: counts the occurence of given letter(s) in a string.
*  `countOnly(allItems, itemsToCount)`: takes in a collection of items and return counts for a specific subset of those items.
*  `eqArrays(firstArray, secondArray)`: compares two arrays to ensure they are equal.
*  `eqObjects(object1, object2)` : compares two objects to ensure they are equal.
*  `findKey(object, callback)`: Rakes in an object and a callback. Scans the object and returns the first key for which the callback returns a truthy value. 
*  `findKeyByValue(object, keyValue)`: finds the key of a given value for an object.
*  `letterPositions(sentence)`: returns all the indices in the string where each character is found.
*  `map(array, callback)`: performs a callback function on each element of a given array.
*  `takeUntil(array, callback)`: return a slice of the array until the callback function returns true
*  `without(givenArray, removeElements)`: return a subset of agiven array, removing unwanted elements.
*  `flatten(array)` : flattens nested arrays into a single array.