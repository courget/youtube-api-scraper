import IAuthClient from "./IAuthClient";

class ApiKeyClient extends IAuthClient {
  private _key: string = "";
  public get key(): string {
    return this._key;
  }

  constructor(apiKey: string) {
    super();

    this._key = apiKey;
  }

  public getAuthObject(): string {
    return this.key;
  }
}

export default ApiKeyClient;
