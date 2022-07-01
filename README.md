<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# gswap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Interchange two vectors.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import gswap from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-gswap@esm/index.mjs';
```

#### gswap( x, y )

Interchanges two vectors `x` and `y`.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';

var x = array( new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
var y = array( new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );

gswap( x, y );

var xbuf = x.data;
// returns <Float64Array>[ 2.0, 6.0, -1.0, -4.0, 8.0 ]

var ybuf = y.data;
// returns <Float64Array>[ 4.0, 2.0, -3.0, 5.0, -1.0 ]
```

The function has the following parameters:

-   **x**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] or an array-like object.
-   **y**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] or an array-like object.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `gswap()` provides a higher-level interface to the [BLAS][blas] level 1 function [`gswap`][@stdlib/blas/base/gswap].
-   In general, for best performance, especially for large vectors, provide 1-dimensional [`ndarrays`][@stdlib/ndarray/array] whose underlying data type is either `float64` or `float32`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@esm/index.mjs';
import gswap from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-gswap@esm/index.mjs';

var rand1 = discreteUniform( 0, 100 );
var x = filledarrayBy( 10, 'generic', rand1 );
console.log( x );

var rand2 = discreteUniform( 0, 10 );
var y = filledarrayBy( 10, 'generic', rand2 );
console.log( y );

gswap( x, y );
console.log( x );
console.log( y );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/gswap`][@stdlib/blas/base/gswap]</span><span class="delimiter">: </span><span class="description">interchange two vectors.</span>
-   <span class="package-name">[`@stdlib/blas/dswap`][@stdlib/blas/dswap]</span><span class="delimiter">: </span><span class="description">interchange two double-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/sswap`][@stdlib/blas/sswap]</span><span class="delimiter">: </span><span class="description">interchange two single-precision floating-point vectors.</span>

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-gswap.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-gswap

[test-image]: https://github.com/stdlib-js/blas-gswap/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-gswap/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-gswap/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-gswap?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-gswap.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-gswap/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-gswap/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-gswap/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-gswap/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-gswap/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-gswap/main/LICENSE

[blas]: http://www.netlib.org/blas

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array/tree/esm

<!-- <related-links> -->

[@stdlib/blas/base/gswap]: https://github.com/stdlib-js/blas-base-gswap/tree/esm

[@stdlib/blas/dswap]: https://github.com/stdlib-js/blas-dswap/tree/esm

[@stdlib/blas/sswap]: https://github.com/stdlib-js/blas-sswap/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
