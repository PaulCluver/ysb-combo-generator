// tslint:disable-next-line:no-implicit-dependencies
import * as chai from "chai";
import { StrikeManager } from "../src/strike-manager";
const expect = chai.expect;

describe("Strike", () => {
  it("should return a strike", () => {
    const strikeManager = new StrikeManager(
      1,
      "Lion Sweep - Rise",
      "Up",
      3,
      "Yang",
      "Out",
      3,
      "Yang",
      "YangYang",
      "Vertical Up - Horizontal Out"
    );

    // const result = strikeManager.GetStrikes();
    // expect(result[0].id).to.eq(1);
    // expect(result[0].name).to.eq("Lion Sweep - Rise");
    // expect(result[0].verticalOrientation).to.eq("Up");
    // expect(result[0].verticalValue).to.eq(3);
    // expect(result[0].verticalYinYang).to.eq("Yang");
    // expect(result[0].horizontalOrientation).to.eq("Out");
    // expect(result[0].horizontalValue).to.eq(3);
    // expect(result[0].horizontalYinYang).to.eq("Yang");
    // expect(result[0].overallYinYang).to.eq("YangYang");
    // expect(result[0].overallOrientation).to.eq("Vertical Up - Horizontal Out");
  });
});
