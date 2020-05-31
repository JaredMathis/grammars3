
const u = require("wlj-utilities");

const assertProofsAreValid = require("../../library/assertProofsAreValid.js");
const parseGrammar = require("../../library/parseGrammar.js");

u.scope(__filename, x => {
    let grammar;

    grammar = parseGrammar(`
a # a a

a a
a a a
`);
u.merge(x,()=>grammar.rules);
u.merge(x,()=>grammar.proofs);
assertProofsAreValid(grammar.rules, grammar.proofs);

grammar = parseGrammar(`
a # a a

a a a
a a a
`);
u.merge(x,()=>grammar.rules);
u.merge(x,()=>grammar.proofs);
u.assertThrows(() => assertProofsAreValid(grammar.rules, grammar.proofs));

    let rulesLengthBefore;
grammar = parseGrammar(`
a # a a

a
a a
a a a
`);
rulesLengthBefore = grammar.rules.length;
u.merge(x,()=>grammar.rules);
u.merge(x,()=>grammar.proofs);
assertProofsAreValid(grammar.rules, grammar.proofs);
u.assertIsEqualJson(() => rulesLengthBefore, grammar.rules.length);

// Can a grammar file learn grammar rules as it does proofs?
grammar = parseGrammar(`
a # a a

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
u.merge(x,()=>grammar.rules);
u.merge(x,()=>grammar.proofs);
assertProofsAreValid(grammar.rules, grammar.proofs);

grammar = parseGrammar(`
a # b

a a a
a a b
b a b
b b b
`);
u.merge(x,()=>grammar.rules);
u.merge(x,()=>grammar.proofs);
assertProofsAreValid(grammar.rules, grammar.proofs);

grammar = parseGrammar(`
a # b

a a a
a a b
b a b
b b b
`);
u.merge(x,()=>grammar.rules);
u.merge(x,()=>grammar.proofs);
assertProofsAreValid(grammar.rules, grammar.proofs);
});
