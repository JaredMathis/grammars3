
const u = require("wlj-utilities");
const getRuleSeparator = require("./getRuleSeparator");
const tokens = require("./tokens");

module.exports = parseRules;

function parseRules(lines) {
    let result;
    u.scope(parseRules.name, x => {
        // Rules are processed, first.
        let rules = true;
        result = [];
        u.loop(lines, line => {
            let parts = line.split(getRuleSeparator());
            u.assert(() => parts.length <= 2)
            if (parts.length === 2) {
                // All rules should be processed first.
                u.assert(() => rules);
                let left = tokens(parts[0]);
                let right = tokens(parts[1]);
                let rule = { left, right };
                result.push(rule);
            } else if (line === "") {
                // Empty lines are okay to have with the initial rules
            } else {
                // We have something other than a rule.
                rules = false;
            }
        });
    });
    return result;
}
