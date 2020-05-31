
const u = require("wlj-utilities");

const assertRulesAreUnique = require("../../library/assertRulesAreUnique.js");
const parseGrammarRules = require("../../library/parseGrammarRules.js");

u.scope(__filename, x => {
    let rules = parseGrammarRules(
        ['a | a a', 'a | a a']);
    u.assertThrows(() => assertRulesAreUnique(rules));
    
    rules = parseGrammarRules(
        ['a | a a']);
    assertRulesAreUnique(rules);
});
