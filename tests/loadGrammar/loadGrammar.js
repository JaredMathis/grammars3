
const u = require("wlj-utilities");
const path = require('path');

const loadGrammar = require("../../library/loadGrammar.js");

u.scope(__filename, x => {
    let grammar = loadGrammar(path.join(__dirname, 'a.g'));
    
    u.assert(() => u.isDefined(grammar.rules));
    u.assertIsArray(() => grammar.rules);
    u.assertIsArray(() => grammar.proofs);
});
