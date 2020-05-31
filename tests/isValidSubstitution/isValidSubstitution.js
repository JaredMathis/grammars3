
const u = require("wlj-utilities");

const isValidSubstitution = require("../../library/isValidSubstitution.js");

u.scope(__filename, x => {
    let i = 0;
    u.merge(x, { i: i++ });
    u.assertIsEqualJson(
        isValidSubstitution('a b c'.split(' '), 'a d c'.split(' '), ['b'], ['d'], 1),
        { "valid": true });
    u.merge(x, { i: i++ });
    u.assertIsEqualJson(
        isValidSubstitution('a b c'.split(' '), 'a d e'.split(' '), 'b'.split(' '), 'd'.split(' '), 1),
        { "valid": false, "message": "after does not match" });
    u.merge(x, { i: i++ });
    u.assertIsEqualJson(
        isValidSubstitution('a b c'.split(' '), 'a e c'.split(' '), 'b'.split(' '), 'd'.split(' '), 1),
        { "valid": false, "message": "right does not match current" });
    u.merge(x, { i: i++ });
    u.assertIsEqualJson(
        isValidSubstitution('e b c'.split(' '), 'a d c'.split(' '), 'b'.split(' '), 'd'.split(' '), 1),
        { "valid": false, "message": "before does not match" });
    u.merge(x, { i: i++ });
    u.assertIsEqualJson(
        isValidSubstitution('a e c'.split(' '), 'a d c'.split(' '), 'b'.split(' '), 'd'.split(' '), 1),
        { "valid": false, "message": "left does not match previous" });
    u.merge(x, { i: i++ });
    u.assertIsEqualJson(
        isValidSubstitution('a b b c'.split(' '), 'a d b c'.split(' '), 'b'.split(' '), 'd'.split(' '), 1),
        { "valid": true });
    u.merge(x, { i: i++ });
    u.assertIsEqualJson(
        isValidSubstitution('a b b c'.split(' '), 'a d d c'.split(' '), 'b b'.split(' '), 'd d'.split(' '), 1),
        { "valid": true });
    u.merge(x, { i: i++ });
    u.assertIsEqualJson(
        isValidSubstitution('a b b c'.split(' '), 'a d d d'.split(' '), 'b b c'.split(' '), 'd d d'.split(' '), 1),
        { "valid": true });
    u.merge(x, { i: i++ });
    u.assertIsEqualJson(
        isValidSubstitution('a c'.split(' '), 'a d d d'.split(' '), 'c'.split(' '), 'd d d'.split(' '), 1),
        { "valid": true });
    u.merge(x, { i: i++ });
    u.assertIsEqualJson(
        isValidSubstitution('a b b c'.split(' '), 'a d'.split(' '), 'b b c'.split(' '), 'd'.split(' '), 1),
        { "valid": true });
    u.merge(x, { i: i++ });
    u.assertIsEqualJson(isValidSubstitution('a 1 1'.split(' '), '1 a 1'.split(' '), 'a 1'.split(' '), '1 a'.split(' '), 0),
        { "valid": true });

});
