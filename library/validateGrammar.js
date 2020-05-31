
const u = require("wlj-utilities");

module.exports = validateGrammar;

function validateGrammar(grammar) {
    let result;
    u.scope(validateGrammar.name, x => {
        u.assertIsArray(() => grammar.rules);
        u.assertIsArray(() => grammar.proofs);

        assertRulesAreUnique(grammar.rules);
        assertProofsAreValid(grammar.rules, grammar.proofs);
    });
    return result;
}
