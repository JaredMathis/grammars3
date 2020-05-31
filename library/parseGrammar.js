
const u = require("wlj-utilities");
const parseGrammarProofs = require("./parseGrammarProofs");
const parseGrammarRules = require("./parseGrammarRules");

module.exports = parseGrammar;

/**
 * This should have minimum validation.
 * @param {*} lines 
 */
function parseGrammar(lines) {
    let result;
    u.scope(parseGrammar.name, x => {
        result = {};
        result.rules = parseGrammarRules(lines);
        result.proofs = parseGrammarProofs(lines);
    });
    return result;
}
