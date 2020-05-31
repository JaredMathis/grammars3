
const u = require("wlj-utilities");

const parseProofs = require("../../library/parseProofs.js");

u.scope(__filename, x => {
    u.assertIsEqualJson(() => parseProofs(
        ['a | a a', 'b | b a', '', 'a', 'a a', 'a a a']),
        [
            [['a'], ['a','a'], ['a','a','a']],
        ]);
});
