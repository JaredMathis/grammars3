
const u = require("wlj-utilities");

const isProofLine = require("../../library/isProofLine.js");

u.scope(__filename, x => {
    u.assert(() => isProofLine('a'.split(' ')));
    u.assert(() => isProofLine('a a'.split(' ')));
    u.assert(() => isProofLine('a a a'.split(' ')));
    u.assert(() => !isProofLine('a | a a'.split(' ')));
});
