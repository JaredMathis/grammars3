
const u = require("wlj-utilities");

const substitute = require("../../library/substitute.js");
const tokens = require("../../library/tokens.js");

u.scope(__filename, x => {
    u.assertIsEqualJson(() => substitute(tokens('a'), tokens('b'), tokens('c a d'), 0), false);
    u.assertIsEqualJson(() => substitute(tokens('a'), tokens('b'), tokens('c a d'), 1), tokens('c b d'));
    u.assertIsEqualJson(() => substitute(tokens('a'), tokens('b'), tokens('c a d'), 2), false);
    u.assertIsEqualJson(() => substitute(tokens('a'), tokens('a a'), tokens('a'), 0), tokens('a a'));
    u.assertIsEqualJson(() => substitute(tokens('a'), tokens('b c'), tokens('d a e'), 1), tokens('d b c e'));
    u.assertIsEqualJson(() => substitute(tokens('a'), tokens('b c'), tokens('d a e'), 0), false);
});
