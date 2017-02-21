[![Build Status](https://travis-ci.org/misund/trailing-slash-it.svg?branch=master)](https://travis-ci.org/misund/trailing-slash-it)

`trailing-slash-it` appends a forward slash to a string. It will remove trailing
forward slashes if they exist already, before adding a trailing forward
slash. This prevents double slashing a string or path.

## Install

```
$ npm install --save trailing-slash-it
```

## Usage

```js
var trailingSlashIt = require('trailing-slash-it');

trailingSlashIt('foo'); // 'foo/'

trailingSlashIt('foo/'); // 'foo/'
trailingSlashIt('foo//'); // 'foo/'
trailingSlashIt('foo///'); // 'foo/'

trailingSlashIt('foo\\'); // 'foo/'
trailingSlashIt('foo\\\\'); // 'foo/'
trailingSlashIt('foo\\/\\/'); // 'foo/'
```

If you need to make sure that something does NOT have a trailing slash, you can
do that as well:

```js
import {
  trailingSlashIt,
  unTrailingSlashIt,
} from 'trailing-slash-it';

trailingSlashIt('foo'); // 'foo/'

unTrailingSlashIt('foo'); // 'foo'

unTrailingSlashIt('foo/'); // 'foo'
unTrailingSlashIt('foo//'); // 'foo'
unTrailingSlashIt('foo///'); // 'foo'

unTrailingSlashIt('foo\\'); // 'foo'
unTrailingSlashIt('foo\\\\'); // 'foo'
unTrailingSlashIt('foo\\/\\/'); // 'foo'
```

Based on WordPress' PHP function [trailingslashit()](https://github.com/WordPress/WordPress/blob/c7988f1f0311a8a3eadfe9a78c0c82971822d728/wp-includes/formatting.php#L2357-L2388).

## Changelog

0.3.0 - Strip backslashes as well as forward slashes.

## License

GNU GPLv3
