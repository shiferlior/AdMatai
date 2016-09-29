/// <reference path="./typings/main.d.ts" />
express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.send('This is a person');
});
module.exports = router;
//# sourceMappingURL=router.js.map