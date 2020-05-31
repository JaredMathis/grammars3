
const u = require("wlj-utilities");

const parseGrammar = require("../../library/parseGrammar.js");

u.scope(__filename, x => {
    u.assertIsEqualJson(() => parseGrammar(
        ['a # a a']),
        {
            rules: [{ left: ['a'], right: ['a', 'a'] }],
            proofs: [],
        })
    u.assertIsEqualJson(() => parseGrammar(
        ['a # a a', 'b # b a']),
        {
            rules: [
                { left: ['a'], right: ['a', 'a'] },
                { left: ['b'], right: ['b', 'a'] },
            ],
            proofs: []
        })
    u.assertIsEqualJson(() => parseGrammar(
        ['a # a a', 'b # b a', '', 'a', 'a a', 'a a a']),
        {
            rules: [
                { left: ['a'], right: ['a', 'a'] },
                { left: ['b'], right: ['b', 'a'] }
            ],
            proofs: [[['a'], ['a', 'a'], ['a', 'a', 'a']]]
        });
});
