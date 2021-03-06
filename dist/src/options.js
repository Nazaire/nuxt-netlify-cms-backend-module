"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deepmerge_1 = __importDefault(require("deepmerge"));
exports.defaults = {
    path: '/admin'
};
function initOptions(moduleOptions) {
    return deepmerge_1.default.all([exports.defaults, this.options.cms || {}, moduleOptions || {}]);
}
exports.default = initOptions;
