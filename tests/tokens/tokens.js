
const u = require("wlj-utilities");

const tokens = require("../../library/tokens.js");

u.scope(__filename, x => {
    // TODO: Fix broken test
    u.assertIsEqualJson(tokens('a a a'), ['a','a','a']);
});
