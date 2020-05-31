
const u = require("wlj-utilities");

module.exports = getRuleSeparator;

function getRuleSeparator() {
    let result;
    u.scope(getRuleSeparator.name, x => {
        result = " # ";
    });
    return result;
}
