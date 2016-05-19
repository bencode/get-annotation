# get-annotation


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]


从源码中解析注解字段


```
const body = `
/*
 *
 * @entry
 *
 * @path: /a/b-c/hello
 *
 * @lessbuild: false
 *
 * @ignore: true
 *
 * @webpack.entry
 *
 * @server.url: http://www.google.com
 *
 * @count: 1234
 * @price: 12.34
 */
...some code
`

const getAnnotation = require('get-annotation');

getAnnotation(body, 'entry')            // true
getAnnotation(body, 'path')             // '/a/b-c/hello'
getAnnotation(body, 'lessbuild')        // false
getAnnotation(body, 'ignore')           // true
getAnnotation(body, 'webpack.entry')    // true
getAnnotation(body, 'server.url')       // 'http://www.google.com'
getAnnotation(body, 'count')            // 1234
getAnnotation(body, 'price')            // 12.34
```

[npm-image]: https://img.shields.io/npm/v/get-annotation.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/get-annotation
[travis-image]: https://img.shields.io/travis/bencode/get-annotation/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/bencode/get-annotation
[coveralls-image]: https://img.shields.io/codecov/c/github/bencode/get-annotation.svg?style=flat-square
[coveralls-url]: https://codecov.io/github/bencode/get-annotation?branch=master

