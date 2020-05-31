
const u = require("wlj-utilities");

module.exports = isValidSubstitution;

function isValidSubstitution(previous, current, left, right, index) {
    let result;
    u.scope(isValidSubstitution.name, x => {
        u.assertIsStringArray(previous);
        u.assertIsStringArray(current);
        u.assertIsStringArray(left);
        u.assertIsStringArray(right);
        u.assert(() => u.isInteger(index));

        result = {};

        // Leading up to the rule before and current should match.
        let previousBefore = previous.slice(0, index);
        u.merge(x, { previousBefore });
        let currentBefore = current.slice(0, index);
        u.merge(x, { currentBefore });
        if (!u.arraySequenceEquals(previousBefore, currentBefore)) {
            result.valid = false;
            result.message = 'before does not match';
            //u.merge(result, { previousBefore, currentBefore });
            return;
        }

        // The previous should match the rule left.
        let previousMatch = previous.slice(index, index + left.length);
        u.merge(x, { previousMatch });
        if (!u.arraySequenceEquals(previousMatch, left)) {
            result.valid = false;
            result.message = 'left does not match previous';
            return;
        }

        // The current should match the rule right.
        let currentMatch = current.slice(index, index + right.length);
        u.merge(x, { currentMatch });
        if (!u.arraySequenceEquals(currentMatch, right)) {
            result.valid = false;
            result.message = 'right does not match current';
            return;
        }

        // The afters should match.
        let previousAfter = previous.slice(index + left.length);
        u.merge(x, { previousAfter });
        let currentAfter = current.slice(index + right.length);
        u.merge(x, { currentAfter });
        if (!u.arraySequenceEquals(previousAfter, currentAfter)) {
            result.valid = false;
            result.message = 'after does not match';
            return;
        }

        result.valid = true;
    });
    return result;
}
