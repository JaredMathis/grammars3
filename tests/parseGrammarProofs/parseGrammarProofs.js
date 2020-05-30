
const u = require("wlj-utilities");

const parseGrammarProofs = require("../../library/parseGrammarProofs.js");

u.scope(__filename, x => {
    u.assertIsEqualJson(() => parseGrammarProofs(
        ['a | a a', 'b | b a', '', 'a', 'a a', 'a a a']),
        [
            [['a'], ['a','a'], ['a','a','a']],
        ]);
});
