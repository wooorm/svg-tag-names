import assert from 'node:assert'
import test from 'tape'
import {svgTagNames} from './index.js'

test('svgTagNames', function (t) {
  let index = -1

  t.ok(Array.isArray(svgTagNames), 'should be an array')

  t.doesNotThrow(() => {
    while (++index < svgTagNames.length) {
      assert.equal(
        typeof svgTagNames[index],
        'string',
        '`' + svgTagNames[index] + '`'
      )
    }
  }, 'should be an array of strings')

  t.end()
})
