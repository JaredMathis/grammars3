
const u = require("wlj-utilities");

module.exports = loadGrammar;

function loadGrammar(fileName) {
    let result;
    u.scope(loadGrammar.name, x => {
        const text = u.readFile(fileName);
        const lines = u.splitByEOL(text);
        const grammar = parseGrammar(lines);
    });
    return result;
}
