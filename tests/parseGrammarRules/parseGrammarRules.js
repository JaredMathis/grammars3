
const u = require("wlj-utilities");

const parseGrammarRules = require("../../library/parseGrammarRules.js");

u.scope(__filename, x => {
    u.assertIsEqualJson(() => parseGrammarRules(
        ['a | a a', 'b | b a', '', 'a', 'a a', 'a a a']),
        [
            { left: ['a'], right: ['a', 'a'] },
            { left: ['b'], right: ['b', 'a'] }
        ]);
    // Cannot contain two rule separators
    u.assertThrows(() => parseGrammarRules(
        ['a | a | a', 'b | b a', '', 'a', 'a a', 'a a a']));
    // Rules must come first
    u.assertThrows(() => parseGrammarRules(
        ['a | a a', 'b | b a', '', 'a', 'a a', 'a a a', 'c | b a']));
});
