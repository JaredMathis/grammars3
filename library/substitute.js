
const u = require("wlj-utilities");

module.exports = substitute;

function substitute(left, right, previous, index) {
    let result;
    u.scope(substitute.name, x=> {
        u.merge(x, {left});
        u.merge(x, {right});
        u.merge(x, {previous});
        u.merge(x, {index});

        u.assertIsStringArray(left);
        u.assertIsStringArray(right);
        u.assertIsStringArray(previous);
        u.assert(() => u.isArrayIndex(previous, index));

        if (index + left.length > previous.length) {
            result = false;
            return;
        }

        let actualLeft = previous.slice(index, index + left.length);
        u.merge(x, {actualLeft});
        u.assert(() => actualLeft.length === left.length);
        if (!u.arraySequenceEquals(actualLeft, left)) {
            result = false;
            return;
        }

        let remaining = previous.slice(index + left.length);

        let before = previous.slice(0, index);
        result = before.concat(right).concat(remaining);
    });
        
    return result;
}
