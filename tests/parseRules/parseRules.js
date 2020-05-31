
const u = require("wlj-utilities");

const parseRules = require("../../library/parseRules.js");

u.scope(__filename, x => {
    u.assertIsEqualJson(() => parseRules(
        ['a | a a', 'b | b a', '', 'a', 'a a', 'a a a']),
        [
            { left: ['a'], right: ['a', 'a'] },
            { left: ['b'], right: ['b', 'a'] }
        ]);
    // Cannot contain two rule separators
    u.assertThrows(() => parseRules(
        ['a | a | a', 'b | b a', '', 'a', 'a a', 'a a a']));
    // Rules must come first
    u.assertThrows(() => parseRules(
        ['a | a a', 'b | b a', '', 'a', 'a a', 'a a a', 'c | b a']));
});
