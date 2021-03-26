'use strict'

var test = require('tape')
var svgTagNames = require('.')

test('svgTagNames', function (t) {
  var index = -1

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
