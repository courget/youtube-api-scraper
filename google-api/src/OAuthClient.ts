import IAuthClient from "./IAuthClient";

import { Credentials, OAuth2Client, TokenInfo } from "google-auth-library";
import { AuthPlus } from "googleapis/build/src/googleapis";

class OAuthClient extends IAuthClient {
  private _credentials: Credentials | null = null;
  public get credentials(): Credentials | null {
    return this._credentials;
  }

  private _oauth2Client: OAuth2Client;
  public get oauth2Client(): OAuth2Client {
    return this._oauth2Client;
  }

  constructor(clientId: string, clientSecret: string, redirectUri: string) {
    super();

    this._oauth2Client = new new AuthPlus().OAuth2(
      clientId,
      clientSecret,
      redirectUri
    );
  }

  public getAuthObject(): OAuth2Client {
    return this.oauth2Client;
  }

  public getAuthUrl(scopes: string[]): string {
    return this.oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: scopes,
    });
  }

  public async getToken(code: string): Promise<Credentials> {
    const { tokens } = await this.oauth2Client.getToken(code);
    return tokens;
  }

  public setCredentials(credentials: Credentials) {
    this._credentials = credentials;
    this.oauth2Client.setCredentials(credentials);
  }

  public async getInfo(): Promise<TokenInfo | null> {
    if (!this.credentials?.access_token) {
      return null;
    }

    try {
      return await this.oauth2Client.getTokenInfo(
        this.credentials.access_token
      );
    } catch (e) {
      return null;
    }
  }

  public async revokeToken(): Promise<void> {
    await this.oauth2Client.revokeCredentials();
  }
}

export default OAuthClient;
