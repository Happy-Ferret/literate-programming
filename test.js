/*global require */

var tests = require('literate-programming-cli-test')("node ../../index.js");

tests(
    ["fizzbuzz", "fizzbuzz.md"],
    ["fence", "-b . fence.md"],
    ["logs", "-b . logs.md"]
);
