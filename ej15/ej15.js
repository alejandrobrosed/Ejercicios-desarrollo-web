const assert = require('node:assert').strict;
const fs = require('node:fs');

function readWords(path) {
    const data = fs.readFileSync(path, 'utf8');
    return data.split('\n');
}

function checkAnagram(word) {
    return false;
}

// assert.equal(true, checkAnagram('abc cba'))
// assert.equal(false, checkAnagram('abc cbb'))

assert.deepEqual(["A", "ABM", "ABM's", "ABMs"], readWords("palabras.txt"))

console.log('end')
