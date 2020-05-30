
const u = require("wlj-utilities");
const getRuleSeparator = require("./getRuleSeparator")

module.exports = isProofLine;

function isProofLine(tokens) {
    let result;
    u.scope(isProofLine.name, x => {
        u.assertIsStringArray(() => tokens);

        let containsEmptyString = tokens.indexOf('') >= 0;
        let containsRuleSeparator = tokens.indexOf(getRuleSeparator()) >= 0;
        result = !containsEmptyString && !containsRuleSeparator;
    });
    return result;
}
