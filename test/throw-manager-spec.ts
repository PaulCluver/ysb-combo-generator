import { ThrowManager } from "../src/throw-manager";
import * as chai from "chai";
import { throws } from "assert";

const expect = chai.expect;

describe("ThrowManager", () => {
  it("should return 6 throws of 3 coins", () => {
    const manager = new ThrowManager();
    manager.throwCoins(6, 3);
    expect(manager.throws.length).to.equal(6);
    expect(manager.throws[0].coinThrowValues.length).to.equal(3);
    expect(manager.throws[0].coinThrowSum).to.not.equal(-1);

    for (let index = 0; index < manager.throws.length; index++) {
      const element = manager.throws[index];
      console.warn(element);
    }
  });
});
