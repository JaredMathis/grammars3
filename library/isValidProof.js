
const u = require("wlj-utilities");
const isValidSubstitution = require('./isValidSubstitution');

module.exports = isValidProof;

function isValidProof(rules, proof) {
    let result;
    u.scope(isValidProof.name, x => {
        u.merge(x, {rules});
        u.merge(x, {proof});

        u.assert(() => u.isArray(rules));
        u.assert(() => u.isArray(proof));
        u.loop(proof, step => {
            u.assertIsStringArray(step);
        });

        result = {};
        result.valid = true;

        // For each proof step, starting at the second step.
        u.merge(x, {step:'processing proof steps'});
        u.loop(u.range(proof.length - 1, 1), (currentIndex) => {
            // Assume the step is invalid.
            let validStep = false;

            // Get the previous step and current step from the index.
            let previousIndex = currentIndex - 1;
            u.merge(x, {previousIndex});
            let previous = proof[previousIndex];
            u.merge(x, {previous});
            let current = proof[currentIndex];            

            let allS = [];
            u.loop(u.range(previous.length), previousIndex => {
                u.loop(rules, rule => {
                    if (validStep) {
                        return true;
                    }
                    let s = isValidSubstitution(
                        previous, current, rule.left, rule.right, previousIndex);
                    allS.push(s);
                    u.merge(x, {s});
                    u.assert(() => !validStep);
                    validStep = s.valid;
                });
                if (validStep) {
                    return true;
                }
            });

            u.merge(x, {allS});
            u.merge(x, {validStep});

            // If the step is not valid, the whole proof is not valid.
            if (!validStep) {
                result.valid = false;
                u.merge(result, {current,previous});
            }
        });
    });
    return result;
}
