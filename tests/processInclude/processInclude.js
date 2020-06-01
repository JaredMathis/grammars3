
const u = require("wlj-utilities");
const path = require('path');

const processInclude = require("../../library/processInclude.js");
const loadGrammar = require("../../library/loadGrammar.js");

u.scope(__filename, x => {
    let files = ['c.g'];
    let lookup = {};
    u.loop(files, f=>{
        let grammar = loadGrammar(path.join(__dirname, f));
        lookup[f] = grammar;
    });

    let input = u.readFile(path.join(__dirname, 'd.g'));
    let output = processInclude(u.splitByEOL(input), lookup);

    u.assertIsStringArray(() => output);
    u.assertIsEqualJson(output, () => ['e # e e', 'e # f']);
});
