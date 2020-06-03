/**
List of standard SVG tags.

@example
```
import svgTags = require('svg-tag-names');

console.log(svgTags);
//=> ['a', 'circle', 'clipPath', …]
```
*/
declare const svgTags: readonly keyof SVGElementTagNameMap;

export = svgTags;
