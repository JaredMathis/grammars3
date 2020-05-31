
const u = require("wlj-utilities");
const parseGrammar = require("./parseGrammar");

module.exports = loadGrammar;

function loadGrammar(fileName) {
    let result;
    u.scope(loadGrammar.name, x => {
        const text = u.readFile(fileName);
        const lines = u.splitByEOL(text);
        result = parseGrammar(lines);
    });
    return result;
}
