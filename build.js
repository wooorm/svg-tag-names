import fs from 'node:fs/promises'
import fetch from 'node-fetch'
import {fromHtml} from 'hast-util-from-html'
import {selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'
import {svgTagNames} from './index.js'

const urls = [
  'https://www.w3.org/TR/SVG11/eltindex.html',
  'https://www.w3.org/TR/SVGTiny12/elementTable.html',
  'https://www.w3.org/TR/SVG2/eltindex.html'
]

await Promise.all(urls.map((d) => get(d)))

const list = [...new Set(svgTagNames)].sort()

await fs.writeFile(
  'index.js',
  [
    '/**',
    ' * List of known SVG tag names.',
    ' *',
    ' * @type {Array<string>}',
    ' */',
    'export const svgTagNames = ' + JSON.stringify(list, null, 2),
    ''
  ].join('\n')
)

/**
 * @param {string} url
 */
async function get(url) {
  const response = await fetch(url)
  const text = await response.text()
  const tree = fromHtml(text)
  const nodes = selectAll('.element-name', tree)
  let index = -1

  while (++index < nodes.length) {
    const value = toString(nodes[index]).slice(1, -1)

    if (value) {
      svgTagNames.push(value)
    }
  }
}
