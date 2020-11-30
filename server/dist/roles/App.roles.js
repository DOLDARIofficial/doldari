"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = exports.AppRoles = void 0;
const nest_access_control_1 = require("nest-access-control");
var AppRoles;
(function (AppRoles) {
    AppRoles["USER"] = "user";
    AppRoles["GUEST"] = "guest";
})(AppRoles = exports.AppRoles || (exports.AppRoles = {}));
exports.roles = new nest_access_control_1.RolesBuilder();
exports.roles.grant(AppRoles.GUEST)
    .createAny('profile');
exports.roles.grant(AppRoles.USER)
    .readOwn('profile', ['*']);
//# sourceMappingURL=App.roles.js.map