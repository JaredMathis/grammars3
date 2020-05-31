
const u = require("wlj-utilities");

module.exports = assertProofsAreValid;

function assertProofsAreValid(rules, proofs) {
    let result;
    u.scope(assertProofsAreValid.name, x => {
        u.assert(() => u.isArray(rules));
        u.assert(() => u.isArray(proofs));

        u.loop(proofs, p => u.assertIsStringArrayNested(() => p));
        
    });
    return result;
}
