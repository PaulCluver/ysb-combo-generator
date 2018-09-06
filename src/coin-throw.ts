export class CoinThrow {
  private overAllResult: string[];
  constructor() {
    this.overAllResult = [];
    this.ThrowCoins();
  }

  private ThrowCoins(): any {
    for (let indexThrows = 0; indexThrows < 6; indexThrows++) {
      const loopResult = [];
      for (let indexCoins = 0; indexCoins < 3; indexCoins++) {
        const randomNumber = Math.floor(Math.random() * (1 - 0 + 1) + 0);
        loopResult.push(randomNumber.toString());
      }

      let seq = "";
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < loopResult.length; index++) {
        seq += loopResult[index];
      }

      if (
        seq === "111" ||
        seq === "001" ||
        seq === "100" ||
        seq === "011" ||
        seq === "101"
      ) {
        this.overAllResult.push(loopResult.toString());
      }
    }
    // tslint:disable-next-line:no-console
    console.warn("overAllResult: ", this.overAllResult);
    // tslint:disable-next-line:no-console
    console.warn("overAllResult.length: ", this.overAllResult.length);
  }
}
