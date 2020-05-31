
const u = require("wlj-utilities");

const assertProofsAreValid = require("../../library/assertProofsAreValid.js");
const parseGrammar = require("../../library/parseGrammar.js");

u.scope(__filename, x => {
    let grammar;
grammar = parseGrammar(`
a | a a

a
a a
a a a
`);
assertProofsAreValid(grammar.rules, grammar.proofs);

// Can a grammar file learn grammar rules as it does proofs?
grammar = parseGrammar(`
a | a a

a
a a
a a a

a a
a a a a
a a a a a a

a a a a
a a a a a a a a
a a a a a a a a a a a a
`);
assertProofsAreValid(grammar.rules, grammar.proofs);

grammar = parseGrammar(`
a | b

a a a
a a b
b a b
b b b
`);
assertProofsAreValid(grammar.rules, grammar.proofs);

grammar = parseGrammar(`
a | b

a a a
a a b
b a b
b b b
`);
assertProofsAreValid(grammar.rules, grammar.proofs);
});
