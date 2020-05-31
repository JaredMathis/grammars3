
const u = require("wlj-utilities");

const isProofLine = require("../../library/isProofLine.js");

u.scope(__filename, x => {
    u.assert(() => isProofLine(('a')));
    u.assert(() => isProofLine(('a a')));
    u.assert(() => isProofLine(('a a a')));
    u.assert(() => !isProofLine(('a # a a')));
});
