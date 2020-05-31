
const u = require("wlj-utilities");

module.exports = assertGrammarRulesAreUnique;

function assertGrammarRulesAreUnique(rules) {
    let result;
    u.scope(assertGrammarRulesAreUnique.name, x => {
        u.assertIsArray(() => rules);

        u.loop(rules, rule => {
            let count = 0;
            u.loop(rules, existing => {
                let leftEquals = u.arraySequenceEquals(existing.left, rule.left);
                let rightEquals = u.arraySequenceEquals(existing.right, rule.right);
                if (leftEquals && rightEquals) {
                    count++;
                }
            });
            u.merge(x,{rule});
            u.assert(() => count === 1);
        });
    });
    return result;
}
