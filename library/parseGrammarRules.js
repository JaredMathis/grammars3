
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

                // Require rules to be unique
                let count = 0;
                u.loop(result, existing => {
                    let leftEquals = u.arraySequenceEquals(existing.left, rule.left);
                    let rightEquals = u.arraySequenceEquals(existing.right, rule.right);
                    if (leftEquals && rightEquals) {
                        count++;
                    }
                });
                u.assert(() => count === 1);
            } else {
                // We have something other than a rule.
                rules = false;
            }
        });
    });
    return result;
}
