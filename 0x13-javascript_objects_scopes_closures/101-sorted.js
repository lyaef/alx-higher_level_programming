#!/usr/bin/node

const dict = require('./101-data').dict;
const newDict = {};

Object.keys(dict).map(function (key) {
  if (!Array.isArray(newDict[dict[key]])) {
    newDict[dict[key]] = [];
  }
  newDict[dict[key]].push(key);
});

console.log(newDict);
Footer
[A[C[C[C[[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C
