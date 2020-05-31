
const u = require("wlj-utilities");
const getRuleSeparator = require("./getRuleSeparator");

module.exports = parseGrammarRules;

function parseGrammarRules(lines) {
    let result;
    u.scope(parseGrammarRules.name, x => {
        // Rules are processed, first.
        let rules = true;
        result = [];
        u.loop(lines, line => {
            let parts = line.split(getRuleSeparator());
            u.assert(() => parts.length <= 2)
            if (parts.length === 2) {
                // All rules should be processed first.
                u.assert(() => rules);
                let left = parts[0].trim().split(' ');
                let right = parts[1].trim().split(' ');
                let rule = { left, right };
                result.push(rule);
            } else {
                // We have something other than a rule.
                rules = false;
            }
        });
    });
    return result;
}
