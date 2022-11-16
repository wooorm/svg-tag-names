# svg-tag-names

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of known SVG tag names.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`svgTagNames`](#svgtagnames)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a list of SVG tag names.
It includes all tag names from [SVG 1.1][svg11], [SVG Tiny 1.2][svgtiny12], and
[SVG 2][svg2].
The repo is includes scripts to regenerate the data from the specs.

## When should I use this?

You can use this package when you need to know what tag names are allowed in
any version of SVG.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install svg-tag-names
```

In Deno with [`esm.sh`][esmsh]:

```js
import {svgTagNames} from 'https://esm.sh/svg-tag-names@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {svgTagNames} from 'https://esm.sh/svg-tag-names@3?bundle'
</script>
```

## Use

```js
import {svgTagNames} from 'svg-tag-names'

console.log(svgTagNames.length) // => 94

console.log(svgTagNames.slice(0, 20))
```

Yields:

```js
[
  'a',
  'altGlyph',
  'altGlyphDef',
  'altGlyphItem',
  'animate',
  'animateColor',
  'animateMotion',
  'animateTransform',
  'animation',
  'audio',
  'canvas',
  'circle',
  'clipPath',
  'color-profile',
  'cursor',
  'defs',
  'desc',
  'discard',
  'ellipse',
  'feBlend'
]
```

## API

This package exports the identifier `svgTagNames`.
There is no default export.

### `svgTagNames`

List of known (lowercase) SVG tag names (`Array<string>`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/html-tag-names`](https://github.com/wooorm/html-tag-names)
    — list of HTML tag names
*   [`wooorm/mathml-tag-names`](https://github.com/wooorm/mathml-tag-names)
    — list of MathML tag names
*   [`wooorm/svg-element-attributes`](https://github.com/wooorm/svg-element-attributes)
    — map of SVG elements to attributes
*   [`wooorm/html-element-attributes`](https://github.com/wooorm/html-element-attributes)
    — map of HTML elements to attributes
*   [`wooorm/aria-attributes`](https://github.com/wooorm/aria-attributes)
    — list of ARIA attributes

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://github.com/wooorm/svg-tag-names/workflows/main/badge.svg

[build]: https://github.com/wooorm/svg-tag-names/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/svg-tag-names.svg

[coverage]: https://codecov.io/github/wooorm/svg-tag-names

[downloads-badge]: https://img.shields.io/npm/dm/svg-tag-names.svg

[downloads]: https://www.npmjs.com/package/svg-tag-names

[size-badge]: https://img.shields.io/bundlephobia/minzip/svg-tag-names.svg

[size]: https://bundlephobia.com/result?p=svg-tag-names

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[svg11]: https://www.w3.org/TR/SVG11/eltindex.html

[svgtiny12]: https://www.w3.org/TR/SVGTiny12/elementTable.html

[svg2]: https://www.w3.org/TR/SVG2/eltindex.html
