'use strict'

var fs = require('fs')
var https = require('https')
var bail = require('bail')
var concat = require('concat-stream')
var unified = require('unified')
var parse = require('rehype-parse')
var selectAll = require('hast-util-select').selectAll
var toString = require('hast-util-to-string')
var list = require('.')

var urls = [
  'https://www.w3.org/TR/SVG11/eltindex.html',
  'https://www.w3.org/TR/SVGTiny12/elementTable.html',
  'https://www.w3.org/TR/SVG2/eltindex.html'
]

var proc = unified().use(parse)

var count = 0

urls.forEach(each)

function each(url) {
  https.get(url, onconnection)
}

function onconnection(res) {
  res.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  selectAll('.element-name', proc.parse(buf)).forEach(add)

  count++

  if (count === urls.length) {
    fs.writeFile('index.json', JSON.stringify(list.sort(), 0, 2) + '\n', bail)
  }

  function add(node) {
    var data = toString(node).slice(1, -1)

    if (data && list.indexOf(data) === -1) {
      list.push(data)
    }
  }
}
