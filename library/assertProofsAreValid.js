
const u = require("wlj-utilities");
const isValidProof = require("./isValidProof");

module.exports = assertProofsAreValid;

function assertProofsAreValid(rules, proofs) {
    let result;
    u.scope(assertProofsAreValid.name, x => {
        u.assert(() => u.isArray(rules));
        u.assert(() => u.isArray(proofs));

        let newRules = rules.slice(0);
        u.loop(proofs, proof => {
            u.assertIsStringArrayNested(() => proof);

            let ivp = isValidProof(newRules, proof);
            u.assert(() => ivp.valid === true);
            newRules.push({ left: proof[0], right: u.arrayLast(proof) });
        });
    });
    return result;
}
