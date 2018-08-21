export class CoinThrow {
  public coinThrowValues: number[];
  coinThrowSum: number;

  constructor(val: number[], sum: number) {
    this.coinThrowValues = new Array();
    this.coinThrowSum = sum;
    for (let index = 0; index < val.length; index++) {
      this.coinThrowValues.push(val[index]);
    }
  }
}
