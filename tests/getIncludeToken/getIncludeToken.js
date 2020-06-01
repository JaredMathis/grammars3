
const u = require("wlj-utilities");

const getIncludeToken = require("../../library/getIncludeToken.js");

u.scope(__filename, x => {
    u.assert(() => getIncludeToken() === "#include ");
});
