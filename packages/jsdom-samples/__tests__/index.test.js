'use strict';

const jsdomSamples = require('../lib');
const assert = require('assert').strict;

assert.strictEqual(jsdomSamples(), 'Hello from jsdomSamples');
console.info("jsdomSamples tests passed");
