
const u = require("wlj-utilities");

module.exports = tokens;

function tokens(input) {
    let result;
    u.scope(tokens.name, x => {
        u.assertIsString(() => input);

        result = input.split(' ');
    });
    return result;
}
