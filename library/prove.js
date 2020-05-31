
const u = require("wlj-utilities");
const substitute = require("./substitute");

module.exports = prove;

function prove(rules, start, goal, depth, proof) {
    let log = false;
    if (log) console.log('prove entered', {depth});
    let found = false;
    u.scope(prove.name, x => {
        u.merge(x, {rules});
        u.merge(x, {start});
        u.merge(x, {goal});
        u.merge(x, {depth});
        u.merge(x, {proof});

        u.assertIsArray(() => rules);
        u.assertIsStringArray(() => start);
        u.assertIsStringArray(() => goal);
        // We don't need to prove our premise.
        u.assert(() => start !== goal);
        u.assert(() => u.isInteger(depth));
        u.assert(() => 0 <= depth);
        if (u.isUndefined(proof)) {
            proof = [];
            proof.push(start);
        }
        u.assertIsStringArrayNested(proof);

        u.loop(u.range(start.length), index => {
            if (found) {
                return true;
            }
            u.loop(rules, rule => {
                if (found) {
                    return true;
                }
                let s = substitute(rule.left, rule.right, start, index);
                if (s === false) {
                    return;
                }
                proof.push(s);
                if (u.arraySequenceEquals(s, goal)) {
                    if (log) console.log('found', {s, proof});
                    found = true;
                    return;
                }
                if (depth > 1) {
                    if (log) console.log('calling prove');
                    let result = prove(rules, s, goal, depth-1, proof);
                    if (log) console.log('called prove', { result });
                    if (result !== false) {
                        found = true;
                        return;
                    }
                }
                proof.pop();
                if (log) console.log({ depth, proof })
            });
        });
    });

    if (log) console.log('prove leaving', { depth, proof });

    if (found) {
        return proof;
    }

    return false;
}
