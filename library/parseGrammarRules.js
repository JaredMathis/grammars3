
const u = require("wlj-utilities");
const getRuleSeparator = require("./getRuleSeparator");

module.exports = parseGrammarRules;

function parseGrammarRules(lines) {
    let result;
    u.scope(parseGrammarRules.name, x => {
        result = [];
        u.loop(lines, line => {
            let parts = line.split(getRuleSeparator());
            u.assert(() => parts.length <= 2)
            if (parts.length === 2) {
                let left = parts[0].trim().split(' ');
                let right = parts[1].trim().split(' ');
                result.push({ left, right });
            }
        });
    });
    return result;
}
