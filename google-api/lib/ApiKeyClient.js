"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IAuthClient_1 = __importDefault(require("./IAuthClient"));
class ApiKeyClient extends IAuthClient_1.default {
    constructor(apiKey) {
        super();
        this._key = "";
        this._key = apiKey;
    }
    get key() {
        return this._key;
    }
    getAuthObject() {
        return this.key;
    }
}
exports.default = ApiKeyClient;
//# sourceMappingURL=ApiKeyClient.js.map