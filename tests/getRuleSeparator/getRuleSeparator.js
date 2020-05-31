
const u = require("wlj-utilities");

const getRuleSeparator = require("../../library/getRuleSeparator.js");

u.scope(__filename, x => {
    u.assert(getRuleSeparator() === ' # ');
});
