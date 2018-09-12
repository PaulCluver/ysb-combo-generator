// tslint:disable-next-line:no-implicit-dependencies
import * as chai from "chai";
import { CoinThrowManager } from "../src/coin-throw-manager";
const expect = chai.expect;

describe("CoinThrow", () => {
  it("should not return specific guas", () => {
    const coinThrowManager = new CoinThrowManager();
    const result = coinThrowManager.GetOverAllResult();
    // tslint:disable-next-line:no-unused-expression
    expect(result.indexOf("0,0,0") === -1).to.be.true;
    // tslint:disable-next-line:no-unused-expression
    expect(result.indexOf("0,1,0") === -1).to.be.true;
    // tslint:disable-next-line:no-unused-expression
    expect(result.indexOf("0,1,1") === -1).to.be.true;
  });

  it("should return a result of the expected length", () => {
    const coinThrowManager = new CoinThrowManager();
    const result = coinThrowManager.GetOverAllResult();
    // tslint:disable-next-line:no-unused-expression
    expect(result.length).to.eq(6);
  });
});
