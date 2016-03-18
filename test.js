/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module svg-tag-names
 * @fileoverview Test suite for `svg-tag-names`.
 */

'use strict';

/* eslint-env node */

/*
 * Module dependencies.
 */

var test = require('tape');
var svgTagNames = require('./index.js');

/*
 * Tests.
 */

test('svgTagNames', function (t) {
    t.ok(
        Array.isArray(svgTagNames),
        'should be an `array`'
    );

    svgTagNames.forEach(function (tagName) {
        t.equal(
            typeof tagName,
            'string',
            '`' + tagName + '` should be a string'
        );
    });

    t.end();
});
