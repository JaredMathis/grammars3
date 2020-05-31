
const u = require("wlj-utilities");

const isProofLine = require("../../library/isProofLine.js");
const tokens = require("../../library/tokens.js");

u.scope(__filename, x => {
    u.assert(() => isProofLine(tokens('a')));
    u.assert(() => isProofLine(tokens('a a')));
    u.assert(() => isProofLine(tokens('a a a')));
    u.assert(() => !isProofLine(tokens('a | a a')));
});
