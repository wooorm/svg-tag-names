// Dependencies:
var svgTagNames = require('./index.js');

// Slicing the first 20:
var first = svgTagNames.slice(0, 20);
// Yields:
console.log('js', require('util').inspect(first));

// And `length`:
var length = svgTagNames.length;
// Yields:
console.log('js', String(length));
