import { CoinThrow } from "./coin-throw";

export class ThrowManager {
  public throws: CoinThrow[];

  constructor() {
    this.throws = new Array();
  }

  public throwCoins(numberOfThrows: number, numberOfCoins: number): void {
    for (let indexThrows = 0; indexThrows < numberOfThrows; indexThrows++) {
      const result = [];
      for (let indexCoins = 0; indexCoins < numberOfCoins; indexCoins++) {
        const randomNumber = Math.floor(Math.random() * (1 - 0 + 1) + 0);
        result.push(this.substituteRandomNumber(randomNumber));
      }

      var sum = result.reduce((a, b) => a + b, 0);
      this.throws.push(new CoinThrow(result, sum));
    }
  }

  public substituteRandomNumber(num: number) {
    switch (num) {
      case 0:
        return 2;
        break;
      default:
        return 3;
        break;
    }
  }
}
