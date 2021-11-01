import fs from 'node:fs'
import https from 'node:https'
import {bail} from 'bail'
import concatStream from 'concat-stream'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import {selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'
import {svgTagNames} from './index.js'

const urls = [
  'https://www.w3.org/TR/SVG11/eltindex.html',
  'https://www.w3.org/TR/SVGTiny12/elementTable.html',
  'https://www.w3.org/TR/SVG2/eltindex.html'
]

const proc = unified().use(rehypeParse)
let count = 0
let index = -1

while (++index < urls.length) {
  https.get(urls[index], onconnection)
}

/**
 * @param {import('http').IncomingMessage} response
 */
function onconnection(response) {
  response.pipe(concatStream(onconcat)).on('error', bail)
}

/**
 * @param {Buffer} buf
 */
function onconcat(buf) {
  const nodes = selectAll('.element-name', proc.parse(buf))
  let index = -1

  while (++index < nodes.length) {
    const value = toString(nodes[index]).slice(1, -1)

    if (value && !svgTagNames.includes(value)) {
      svgTagNames.push(value)
    }
  }

  count++

  if (count === urls.length) {
    fs.writeFile(
      'index.js',
      'export const svgTagNames = ' +
        JSON.stringify(svgTagNames.sort(), null, 2) +
        '\n',
      bail
    )
  }
}
