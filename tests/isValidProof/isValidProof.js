
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
    u.merge(x, { rules, proof });
    u.assertIsEqualJson(
        () => isValidProof(rules, proof),
        { valid: true });

    rules = [{ left: 'a'.split(' '), right: 'b'.split(' ') }];
    proof = [
        'a a a'.split(' '),
        'a a b'.split(' '),
        'b a b'.split(' '),
        'b b b'.split(' ')
    ];
    u.merge(x, { rules, proof });
    u.assertIsEqualJson(
        () => isValidProof(rules, proof),
        { valid: true });

    rules = [{ left: 'a'.split(' '), right: 'b'.split(' ') }];
    proof = [
        'a a c'.split(' '),
        'b a b'.split(' '),
        'b b b'.split(' ')
    ];
    u.merge(x, { rules, proof });
    u.assertIsEqualJson(
        () => isValidProof(rules, proof),
        {
            "valid": false,
            "current": ["b", "a", "b"],
            "previous": ["a", "a", "c"]
        });

    rules = [
        { left: 'a'.split(' '), right: 'b'.split(' ') },
        { left: 'b'.split(' '), right: [] }
    ];
    proof = [
        'a a a'.split(' '),
        'a a b'.split(' '),
        'b a b'.split(' '),
        'b b b'.split(' '),
        'b b'.split(' '),
        'b'.split(' '),
        []
    ];
    u.merge(x, { rules, proof });
    u.assertIsEqualJson(
        () => isValidProof(rules, proof),
        { valid: true });
});
