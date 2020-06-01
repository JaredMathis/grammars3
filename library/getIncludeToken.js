
const u = require("wlj-utilities");

module.exports = getIncludeToken;

function getIncludeToken() {
    let result;
    u.scope(getIncludeToken.name, x => {
        result = "#include ";
    });
    return result;
}
