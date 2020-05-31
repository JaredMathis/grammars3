
const u = require("wlj-utilities");

const prove = require("../../library/prove.js");
const parseGrammar = require("../../library/parseGrammar.js");

u.scope(__filename, x => {
    let proof;
    let grammar;

    grammar = parseGrammar(`a | a a

a
a a
a a a`);
    u.assert(() => grammar.proofs.length === 1);
    proof = grammar.proofs[0];
    u.assertIsEqualJson(() => prove(grammar.rules, 'a'.split(' '), 'a a a'.split(' '), 5), proof);

    grammar = parseGrammar(`a | a a
a | b

a
a a
a a a
b a a
b b a
b b b`);
    u.assert(() => grammar.proofs.length === 1);
    proof = grammar.proofs[0];
    u.assertIsEqualJson(() => prove(grammar.rules, 'a'.split(' '), 'b b b'.split(' '), 5), proof);
});
