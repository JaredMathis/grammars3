
const u = require("wlj-utilities");
const parseProofs = require("./parseProofs");
const parseRules = require("./parseRules");

module.exports = parseGrammar;

/**
 * This should have minimum validation.
 * @param {*} lines 
 */
function parseGrammar(input) {
    let result;
    u.scope(parseGrammar.name, x => {
        let lines;
        if (u.isString(input)) {
            lines = u.splitByEOL(input);
        } else {
            lines = input;
        }
        u.assertIsStringArray(() => lines);

        result = {};
        result.rules = parseRules(lines);
        result.proofs = parseProofs(lines);
    });
    return result;
}
