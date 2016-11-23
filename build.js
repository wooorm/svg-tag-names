'use strict';

var fs = require('fs');
var jsdom = require('jsdom');
var bail = require('bail');
var list = require('./');

var count = 0;

[
  'https://www.w3.org/TR/SVG11/eltindex.html',
  'https://www.w3.org/TR/SVGTiny12/elementTable.html',
  'https://www.w3.org/TR/SVG2/eltindex.html'
].forEach(function (url, c, all) {
  jsdom.env(url, function (err, win) {
    bail(err);

    var nodes = win.document.querySelectorAll('.element-name');
    var length = nodes.length;
    var index = -1;
    var data;

    while (++index < length) {
      data = nodes[index].textContent.slice(1, -1);

      if (data && list.indexOf(data) === -1) {
        list.push(data);
      }
    }

    count++;

    if (count === all.length) {
      fs.writeFile('index.json', JSON.stringify(list.sort(), 0, 2) + '\n', bail);
    }
  });
});
