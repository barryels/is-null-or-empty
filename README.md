# is-null-or-empty

[![Build Status](https://travis-ci.org/barryels/is-null-or-empty.svg?branch=master)](https://travis-ci.org/barryels/is-null-or-empty)

A simple null, undefined or empty string checker.

Mostly using this project to test out [tape](https://github.com/substack/tape), [covert](https://github.com/substack/covert) and [npm scoped publishing](https://docs.npmjs.com/misc/scope)


## Usage

First, install the package using npm:

```
npm install is-null-or-empty --save
```

Then, require the package and use it like so:

```
var isNullOrEmpty = require('is-null-or-empty');

console.log(isNullOrEmpty("")); // true
console.log(isNullOrEmpty(null)); // true
console.log(isNullOrEmpty(undefined)); // true

console.log(isNullOrEmpty("Hello World")); // false
```
