import IAuthClient from "./IAuthClient";
declare class ApiKeyClient extends IAuthClient {
    private _key;
    get key(): string;
    constructor(apiKey: string);
    getAuthObject(): string;
}
export default ApiKeyClient;
