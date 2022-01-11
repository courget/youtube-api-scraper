import IAuthClient from "./IAuthClient";
import { Credentials, OAuth2Client, TokenInfo } from "google-auth-library";
declare class OAuthClient extends IAuthClient {
    private _credentials;
    get credentials(): Credentials | null;
    private _oauth2Client;
    get oauth2Client(): OAuth2Client;
    constructor(clientId: string, clientSecret: string, redirectUri: string);
    getAuthObject(): OAuth2Client;
    getAuthUrl(scopes: string[]): string;
    getToken(code: string): Promise<Credentials>;
    setCredentials(credentials: Credentials): void;
    getInfo(): Promise<TokenInfo | null>;
    revokeToken(): Promise<void>;
}
export default OAuthClient;
