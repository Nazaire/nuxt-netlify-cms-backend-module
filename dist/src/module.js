"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const localFs_1 = require("../node_modules/netlify-cms-proxy-server/src/middlewares/localFs");
const options_1 = __importDefault(require("./options"));
const cmsModule = function (moduleOptions) {
    const options = options_1.default.call(this, moduleOptions);
    const cms = express_1.default();
    cms.use(morgan_1.default('combined'));
    cms.use(cors_1.default());
    cms.use(express_1.default.json({ limit: '50mb' }));
    localFs_1.registerMiddleware(cms);
    this.addServerMiddleware({
        path: options.path,
        handler: cms
    });
};
exports.meta = require('../../package.json');
exports.default = cmsModule;
