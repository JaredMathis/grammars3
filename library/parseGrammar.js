
const u = require("wlj-utilities");

module.exports = parseGrammar;

function parseGrammar(lines) {
    let result;
    u.scope(parseGrammar.name, x => {
        result = {};
        result.rules = [];
        u.loop(lines, line => {
            let parts = line.split(' ');
            u.assert(() => parts.length === 2);

            result.rules.push({left:parts[0],right:parts[1]});
        });
    });
    return result;
}
