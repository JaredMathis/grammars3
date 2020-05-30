
const u = require("wlj-utilities");

const parseGrammar = require("../../library/parseGrammar.js");

u.scope(__filename, x => {
    // TODO
    u.assertIsEqualJson(() => parseGrammar(
        ['a aa']), 
        {rules:[{left:'a',right:'aa'}]})
    u.assertIsEqualJson(() => parseGrammar(
        ['a aa', 'b ba']),
        {rules:[{left:'a',right:'aa'},{left:'b',right:'ba'}]})
});
