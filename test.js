import test from 'tape'
import {svgTagNames} from './index.js'

test('svgTagNames', function (t) {
  let index = -1

  t.ok(Array.isArray(svgTagNames), 'should be an `array`')

  while (++index < svgTagNames.length) {
    t.equal(
      typeof svgTagNames[index],
      'string',
      '`' + svgTagNames[index] + '` should be a string'
    )
  }

  t.end()
})
