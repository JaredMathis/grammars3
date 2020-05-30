
const u = require("wlj-utilities");
const isProofLine = require("./isProofLine");

module.exports = parseGrammarProofs;

function parseGrammarProofs(lines) {
    let result;
    u.scope(parseGrammarProofs.name, x => {
        u.assertIsStringArray(() => lines);

        result = [];
        let current = [];
        u.loop(lines, line => {
            if (line.length === 0) {
                processCurrent();
            }
            let tokens = line.split(' ');
            if (isProofLine(tokens)) {
                current.push(tokens);
            }
        });
        processCurrent();

        function processCurrent() {
            if (current.length === 0) {
                return;
            }
            result.push(current);
            current = [];
        }
    });
    return result;
}
