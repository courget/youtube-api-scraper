"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IAuthClient_1 = __importDefault(require("./IAuthClient"));
const googleapis_1 = require("googleapis/build/src/googleapis");
class OAuthClient extends IAuthClient_1.default {
    constructor(clientId, clientSecret, redirectUri) {
        super();
        this._credentials = null;
        this._oauth2Client = new new googleapis_1.AuthPlus().OAuth2(clientId, clientSecret, redirectUri);
    }
    get credentials() {
        return this._credentials;
    }
    get oauth2Client() {
        return this._oauth2Client;
    }
    getAuthObject() {
        return this.oauth2Client;
    }
    getAuthUrl(scopes) {
        return this.oauth2Client.generateAuthUrl({
            access_type: "offline",
            scope: scopes,
        });
    }
    getToken(code) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tokens } = yield this.oauth2Client.getToken(code);
            return tokens;
        });
    }
    setCredentials(credentials) {
        this._credentials = credentials;
        this.oauth2Client.setCredentials(credentials);
    }
    getInfo() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!((_a = this.credentials) === null || _a === void 0 ? void 0 : _a.access_token)) {
                return null;
            }
            try {
                return yield this.oauth2Client.getTokenInfo(this.credentials.access_token);
            }
            catch (e) {
                return null;
            }
        });
    }
    revokeToken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.oauth2Client.revokeCredentials();
        });
    }
}
exports.default = OAuthClient;
//# sourceMappingURL=OAuthClient.js.map