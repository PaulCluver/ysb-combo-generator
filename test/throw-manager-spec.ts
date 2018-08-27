// tslint:disable-next-line:no-implicit-dependencies
import * as chai from "chai";
import { Gua } from "../src/gua";
import { ThrowManager } from "../src/throw-manager";

const expect = chai.expect;

describe("ThrowManager", () => {
  it("should return 6 throws of 3 coins", () => {
    const manager = new ThrowManager();
    manager.throwCoins(6, 3);
    expect(manager.throws.length).to.equal(6);
    expect(manager.throws[0].coinThrowValues.length).to.equal(3);
    expect(manager.throws[0].coinThrowSum).to.not.equal(-1);
    // tslint:disable-next-line:no-console
    console.warn(manager.throws);
    const bottomGua = new Gua(
      manager.throws[0].coinThrowLine,
      manager.throws[1].coinThrowLine,
      manager.throws[2].coinThrowLine
    );
    const topGua = new Gua(
      manager.throws[3].coinThrowLine,
      manager.throws[4].coinThrowLine,
      manager.throws[5].coinThrowLine
    );
    // tslint:disable-next-line:no-console
    console.warn(bottomGua);
    // tslint:disable-next-line:no-console
    console.warn(topGua);
  });
});
