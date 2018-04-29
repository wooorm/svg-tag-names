'use strict'

var test = require('tape')
var svgTagNames = require('.')

test('svgTagNames', function(t) {
  t.ok(Array.isArray(svgTagNames), 'should be an `array`')

  svgTagNames.forEach(function(tagName) {
    t.equal(typeof tagName, 'string', '`' + tagName + '` should be a string')
  })

  t.end()
})
