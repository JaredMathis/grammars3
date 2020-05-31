
const u = require("wlj-utilities");

const isValidProof = require("../../library/isValidProof.js");

u.scope(__filename, x => {
    let rules;
    let proof;

    rules = [{ left: 'a'.split(' '), right: 'a a'.split(' ') }];
    proof = [
        'a'.split(' '),
        'a a'.split(' '),
        'a a a'.split(' ')
    ];
    u.assert(() => isValidProof(rules, proof));

    rules = [{ left: 'a'.split(' '), right: 'b'.split(' ') }];
    proof = [
        'a a a'.split(' '),
        'a a b'.split(' '),
        'b a b'.split(' '),
        'b b b'.split(' ')
    ];
    u.assert(() => isValidProof(rules, proof));

    rules = [
        { left: 'a'.split(' '), right: 'b'.split(' ') },
        { left: 'b'.split(' '), right: ''.split(' ') }
    ];
    proof = [
        'a a a'.split(' '),
        'a a b'.split(' '),
        'b a b'.split(' '),
        'b b b'.split(' '),
        'b b'.split(' '),
        'b'.split(' '),
        ''.split(' ')
    ];
    u.assert(() => isValidProof(rules, proof));
});
