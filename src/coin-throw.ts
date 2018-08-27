export class CoinThrow {
  public coinThrowValues: number[];
  public coinThrowSum: number;
  public coinThrowIndex: number = 0;
  public coinThrowLine: any;

  constructor(index: number, val: number[], sum: number) {
    this.coinThrowIndex = index;
    this.coinThrowValues = val;
    this.coinThrowSum = sum;
    this.coinThrowLine = this.oddOrEven(this.coinThrowSum);
  }

  public oddOrEven(coinThrowSum: number): string {
    if (coinThrowSum % 2 === 0) {
      return "solid";
    } else {
      return "broken";
    }
  }
}
