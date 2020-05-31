
const u = require("wlj-utilities");
const isProofLine = require("./isProofLine");
const tokens = require("./tokens");

module.exports = parseProofs;

function parseProofs(lines) {
    let result;
    u.scope(parseProofs.name, x => {
        u.assertIsStringArray(() => lines);

        result = [];
        let current = [];
        u.loop(lines, line => {
            if (line.length === 0) {
                processCurrent();
            }
            if (isProofLine(line)) {
                current.push(tokens(line));
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
