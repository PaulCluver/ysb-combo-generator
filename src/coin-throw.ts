export class CoinThrow {
  constructor() {
    this.ThrowCoins();
  }

  public ThrowCoins(): string[] {
    const result = [];
    for (let indexThrows = 0; indexThrows < 6; indexThrows++) {
      const loopResult = [];
      for (let indexCoins = 0; indexCoins < 3; indexCoins++) {
        const randomNumber = Math.floor(Math.random() * (1 - 0 + 1) + 0);
        loopResult.push(randomNumber.toString());
      }
      result.push(loopResult.toString());
    }
    return result;
  }
}
