"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
const config_1 = require("./config");
app_1.default.listen(config_1.port, () => {
    console.log(`server running on port : ${config_1.port}`);
}).on('error', (e) => {
    console.log(e);
});
