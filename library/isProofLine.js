
const u = require("wlj-utilities");
const getRuleSeparator = require("./getRuleSeparator")

module.exports = isProofLine;

function isProofLine(line) {
    let result;
    u.scope(isProofLine.name, x => {
        u.assertIsString(() => line);

        let isEmptyString = line === "";
        let containsRuleSeparator = line.indexOf(getRuleSeparator()) >= 0;
        result = !isEmptyString && !containsRuleSeparator;
    });
    return result;
}
