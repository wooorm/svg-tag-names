import assert from 'node:assert/strict'
import test from 'node:test'
import {svgTagNames} from './index.js'

test('svgTagNames', function () {
  let index = -1

  assert.ok(Array.isArray(svgTagNames), 'should be an array')

  while (++index < svgTagNames.length) {
    assert.equal(
      typeof svgTagNames[index],
      'string',
      '`' + svgTagNames[index] + '`'
    )
  }
})
