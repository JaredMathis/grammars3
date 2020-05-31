
const u = require("wlj-utilities");
const parseProofs = require("./parseProofs");
const parseGrammarRules = require("./parseGrammarRules");

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
        result.rules = parseGrammarRules(lines);
        result.proofs = parseProofs(lines);
    });
    return result;
}
