
const u = require("wlj-utilities");

const assertRulesAreUnique = require("../../library/assertRulesAreUnique.js");
const parseRules = require("../../library/parseRules.js");

u.scope(__filename, x => {
    let rules = parseRules(
        ['a | a a', 'a | a a']);
    u.assertThrows(() => assertRulesAreUnique(rules));
    
    rules = parseRules(
        ['a | a a']);
    assertRulesAreUnique(rules);
});
