import fs from 'fs'
import https from 'https'
import {bail} from 'bail'
import concat from 'concat-stream'
import unified from 'unified'
import parse from 'rehype-parse'
// @ts-ignore
import select from 'hast-util-select'
// @ts-ignore
import toString from 'hast-util-to-string'
import {svgTagNames} from './index.js'

var urls = [
  'https://www.w3.org/TR/SVG11/eltindex.html',
  'https://www.w3.org/TR/SVGTiny12/elementTable.html',
  'https://www.w3.org/TR/SVG2/eltindex.html'
]

var proc = unified().use(parse)
var count = 0
var index = -1

while (++index < urls.length) {
  https.get(urls[index], onconnection)
}

/**
 * @param {import('http').IncomingMessage} response
 */
function onconnection(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

/**
 * @param {Buffer} buf
 */
function onconcat(buf) {
  var nodes = select.selectAll('.element-name', proc.parse(buf))
  var index = -1
  /** @type {string} */
  var value

  while (++index < nodes.length) {
    value = toString(nodes[index]).slice(1, -1)

    if (value && !svgTagNames.includes(value)) {
      svgTagNames.push(value)
    }
  }

  count++

  if (count === urls.length) {
    fs.writeFile(
      'index.js',
      'export var svgTagNames = ' +
        JSON.stringify(svgTagNames.sort(), null, 2) +
        '\n',
      bail
    )
  }
}
