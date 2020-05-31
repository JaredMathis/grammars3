
const u = require("wlj-utilities");

const assertGrammarRulesAreUnique = require("../../library/assertGrammarRulesAreUnique.js");
const parseGrammarRules = require("../../library/parseGrammarRules.js");

u.scope(__filename, x => {
    let rules = parseGrammarRules(
        ['a | a a', 'a | a a']);
    u.assertThrows(() => assertGrammarRulesAreUnique(rules));
    
    rules = parseGrammarRules(
        ['a | a a']);
    assertGrammarRulesAreUnique(rules);
});
