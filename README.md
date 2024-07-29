<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# where

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Take elements from either one of two arrays depending on a condition.



<section class="usage">

## Usage

```javascript
import where from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-where@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-base-where/tags). For example,

```javascript
import where from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-where@v0.0.2-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { assign } from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-where@deno/mod.js';
```

#### where( condition, x, y )

Takes elements from either `x` or `y` depending on a condition.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5, 6, 7, 8 ];

var condition = [ true, false, true, false ];

var z = where( condition, x, y );
// returns [ 1, 6, 3, 8 ]
```

The function supports the following parameters:

-   **condition**: array of values indicating whether to take an element from either `x` or `y`. If a condition element is truthy, the function takes a respective element from `x`; otherwise, the function takes a respective element from `y`. If non-empty, must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with the resolved output array length.
-   **x**: first input array. If `condition` is non-empty, must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with the resolved output array length.
-   **y**: second input array. If `condition` is non-empty, must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with the resolved output array length.

When all input arrays are non-empty, the function supports broadcasting single-element arrays to the resolved output array length, which is equal to the maximum length of all provided input arrays.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5 ];

var condition = [ true, false, true, false ];

var z = where( condition, x, y );
// returns [ 1, 5, 3, 5 ]

z = where( condition, y, x );
// returns [ 5, 2, 5, 4 ]

z = where( [ true ], x, y );
// returns [ 1, 2, 3, 4 ]

z = where( [ false ], x, y );
// returns [ 5, 5, 5, 5 ]

z = where( condition, [ 1 ], y );
// returns [ 1, 5, 1, 5 ]
```

If `condition` is an empty array, the function returns an empty array.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5, 6, 7, 8 ];

var condition = [];

var z = where( condition, x, y );
// returns []
```

#### where.assign( condition, x, y, out, stride, offset )

Takes elements from either `x` or `y` depending on a condition and assigns the values to elements in a provided output array.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5, 6, 7, 8 ];

var out = [ 0, 0, 0, 0 ];
var condition = [ true, false, true, false ];

var arr = where.assign( condition, x, y, out, 1, 0 );
// returns [ 1, 6, 3, 8 ]

var bool = ( arr === out );
// returns true
```

The function supports the following parameters:

-   **condition**: array of values indicating whether to take an element from either `x` or `y`. If a condition element is truthy, the function takes a respective element from `x`; otherwise, the function takes a respective element from `y`. If non-empty, must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with the output array.
-   **x**: first input array. If `condition` is non-empty, must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with the output array.
-   **y**: second input array. If `condition` is non-empty, must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with the output array.
-   **out**: output array.
-   **stride**: output array stride.
-   **offset**: output array offset.

The function supports broadcasting single-element arrays to the output array length.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5 ];

var condition = [ true, false, true, false ];

var out = [ 0, 0, 0, 0 ];
var arr = where.assign( condition, x, y, out, 1, 0 );
// returns [ 1, 5, 3, 5 ]

out = [ 0, 0, 0, 0 ];
arr = where.assign( condition, y, x, out, 1, 0 );
// returns [ 5, 2, 5, 4 ]

out = [ 0, 0, 0, 0 ];
arr = where.assign( [ true ], x, y, out, 1, 0 );
// returns [ 1, 2, 3, 4 ]

out = [ 0, 0, 0, 0 ];
arr = where.assign( [ false ], x, y, out, 1, 0 );
// returns [ 5, 5, 5, 5 ]

out = [ 0, 0, 0, 0 ];
arr = where.assign( condition, [ 1 ], y, out, 1, 0 );
// returns [ 1, 5, 1, 5 ]
```

When `condition` is an empty array, the function returns the output array unchanged.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5, 6, 7, 8 ];

var out = [ 0, 0, 0, 0 ];
var condition = [];

var arr = where.assign( condition, x, y, out, 1, 0 );
// returns [ 0, 0, 0, 0 ]

var bool = ( arr === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-bernoulli@deno/mod.js';
import where from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-where@deno/mod.js';

var opts = {
    'dtype': 'generic'
};

// Generate an array of indicator values:
var condition = bernoulli( 20, 0.9, opts );
console.log( condition );

// Generate an array of random values:
var x = discreteUniform( condition.length, 0, 10, opts );
console.log( x );

// Define an array containing a broadcasted "missing" value:
var y = [ NaN ];

// Return an array with randomly placed missing values:
var z = where( condition, x, y );
console.log( z );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-where.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-where

[test-image]: https://github.com/stdlib-js/array-base-where/actions/workflows/test.yml/badge.svg?branch=v0.0.2
[test-url]: https://github.com/stdlib-js/array-base-where/actions/workflows/test.yml?query=branch:v0.0.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-where/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-where?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-where.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-where/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-where/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-where/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-where/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-where/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-where/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-where/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-where/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-where/main/LICENSE

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/deno

</section>

<!-- /.links -->
