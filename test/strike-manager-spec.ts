// tslint:disable-next-line:no-implicit-dependencies
import * as chai from "chai";
import { StrikeManager } from "../src/strike-manager";
const expect = chai.expect;

describe("Strike", () => {
  it("should return the expected amount of strikes", () => {
    const strikeManager = new StrikeManager();

    const result = strikeManager.GetStrikes();
    // tslint:disable-next-line:no-unused-expression
    expect(result).to.not.be.null;
  });
});
