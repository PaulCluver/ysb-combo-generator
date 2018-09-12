import { StrikeManager } from "../src/strike-manager";

export class CurriculumManager {
  private strikeManager: StrikeManager;

  private curriculum: any = [];
  public constructor() {
    this.strikeManager = new StrikeManager();
    this.curriculum = [];
  }

  public GetCurriculum(coinThrowResult: any): any {
    const strikesByBinaryNotation: any = [];
    for (const value in coinThrowResult) {
      if (coinThrowResult.hasOwnProperty(value)) {
        let seq = "";
        const element = coinThrowResult[value].split(",");
        for (const item in element) {
          if (element.hasOwnProperty(item)) {
            seq += element[item];
          }
        }
        strikesByBinaryNotation.push(
          this.strikeManager.GetRandomStrikesByBinaryNotation(seq)
        );
      }
    }
    return strikesByBinaryNotation;
  }
}
