
const u = require("wlj-utilities");

module.exports = validateGrammar;

function validateGrammar(grammar) {
    let result;
    u.scope(validateGrammar.name, x => {
        u.assertIsArray(() => grammar.rules);
        u.assertIsArray(() => grammar.proofs);

        assertGrammarRulesAreUnique(grammar.rules);
    });
    return result;
}
