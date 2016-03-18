/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module svg-tag-names:script:build
 * @fileoverview Crawl the table of tag-names.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var fs = require('fs');
var path = require('path');
var https = require('https');
var cheerio = require('cheerio');
var bail = require('bail');
var list = require('..');

/*
 * Input / output locations.
 */

var svg11 = 'https://www.w3.org/TR/SVG11/eltindex.html';
var svgTiny12 = 'https://www.w3.org/TR/SVGTiny12/elementTable.html';
var svg2 = 'https://www.w3.org/TR/SVG2/eltindex.html';
var output = path.join(__dirname, '..', 'index.json');

var count = 0;

/**
 * Write.
 */
function done() {
    count++;

    if (count === 3) {
        fs.writeFile(output, JSON.stringify(list.sort(), 0, 2) + '\n', bail);
    }
}

/**
 * Load.
 *
 * @param {string} url - Resource to crawl.
 * @param {Function} next - Invoked with document.
 */
function load(url, next) {
    https.get(url, function (res, err) {
        var value = '';

        if (err) {
            return next(err);
        }

        res
            .setEncoding('utf8')
            .on('data', function (buf) {
                value += buf;
            }).on('end', function () {
                next(null, value);
            });
    });
}

/*
 * Crawl SVG 1.1.
 */

load(svg11, function (err, doc) {
    if (err) {
        bail(err);
    }

    cheerio.load(doc)('.element-name').each(function () {
        var data = this.children[0].data.slice(1, -1);

        if (list.indexOf(data) === -1) {
            list.push(data);
        }
    });

    done();
});

/*
 * Crawl SVG Tiny 1.2.
 */

load(svgTiny12, function (err, doc) {
    if (err) {
        bail(err);
    }

    cheerio.load(doc)('.element-name').each(function () {
        var data = this.children[0].data.slice(1, -1);

        if (list.indexOf(data) === -1) {
            list.push(data);
        }
    });

    done();
});

/*
 * Crawl SVG 2.
 */

load(svg2, function (err, doc) {
    if (err) {
        bail(err);
    }

    cheerio.load(doc)('.element-name span').each(function () {
        var data = this.children[0].data;

        if (list.indexOf(data) === -1) {
            list.push(data);
        }
    });

    done();
});
