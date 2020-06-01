
const u = require("wlj-utilities");
const getIncludeToken = require("./getIncludeToken");
const getRuleSeparator = require("./getRuleSeparator");
const tokens = require("./tokens");

module.exports = processInclude;

/**
 * This is a "pre-processing" function.
 * It takes some #include sections and expands them
 * into grammar rules.
 * The input is an array of strings (lines).
 * The output is an array of strings (lines).
 * @param {*} lines 
 * @param {*} lookup 
 */
function processInclude(lines, lookup) {
    let result;
    u.scope(processInclude.name, x => {
        const ruleSeparator = getRuleSeparator();

        u.assertIsStringArray(lines);
        result = [];
        u.merge(x,{result});
        let including;
        let replacements;
        let grammar;
        u.loop(lines, line => {
            if (line.startsWith(getIncludeToken())) {
                // We should have an empty line before an include.
                u.assert(() => !including);
                let parts = tokens(line);
                u.assert(parts.length === 2);
                let name = parts[1];
                u.assert(() => lookup.hasOwnProperty(name));
                including = true;
                replacements = {};
                grammar = lookup[name];
            } else if (line === '') {
                processIncludeInner();
            } else {
                if (including) {
                    let parts = line.split(ruleSeparator);
                    let left = parts[0];
                    let right = tokens(parts[1]);
                    replacements[left] = right;
                }
            }
        });
        processIncludeInner();
        
        function processIncludeInner() {
            if (including) {
                including = false;
                
                u.loop(grammar.rules, rule => {
                    let left = rule.left.map(substitute);
                    let right = rule.right.map(substitute);
                    u.merge(x, {left,right});
                    let r = left.join(" ") + ruleSeparator + right.join(" ");
                    result.push(r)
                });
            }
        }

        function substitute(token) {
            u.merge(x,{token});
            // TODO
            u.assert(() => replacements.hasOwnProperty(token));
            let r = replacements[token];
            // TODO: When length is greater than 1
            u.assert(() => r.length === 1);
            return r[0];
        }
    });
    return result;
}
