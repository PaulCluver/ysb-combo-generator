import { CoinThrow } from "./coin-throw";

export class CoinThrowManager {
  private overAllResult: string[];

  public constructor() {
    this.overAllResult = [];
    const coinThrow = new CoinThrow();

    let validResult: boolean = false;
    while (validResult === false) {
      const tmp = coinThrow.ThrowCoins();

      if (
        (tmp.indexOf("0,1,0") === -1) === true &&
        (tmp.indexOf("0,1,1") === -1) === true &&
        (tmp.indexOf("0,0,0") === -1) === true
      ) {
        this.overAllResult = tmp;
        validResult = true;
      } else {
        validResult = false;
      }
    }
  }

  public GetOverAllResult(): any {
    return this.overAllResult;
  }
}
