// tslint:disable-next-line:no-implicit-dependencies
import * as chai from "chai";
import { CoinThrowManager } from "../src/coin-throw-manager";
import { CurriculumManager } from "../src/curriculum-manager";
const expect = chai.expect;

describe("Integration", () => {
  it("should integate correctly", () => {
    const coinThrowManager = new CoinThrowManager();
    const curriculumManager = new CurriculumManager();

    const coinThrowResult = coinThrowManager.GetOverAllResult();
    const curriculumManagerResult = curriculumManager.GetCurriculum(
      coinThrowResult
    );
    // tslint:disable-next-line:no-unused-expression
    expect(curriculumManager).is.not.null;
  });
});
