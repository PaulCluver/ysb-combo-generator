import { StrikeManager } from "../src/strike-manager";

export class CurriculumManager {
  private strikeManager: StrikeManager;

  private curriculum: any = [];
  public constructor() {
    this.strikeManager = new StrikeManager();
    this.curriculum = [];
  }

  public GetCurriculum(coinThrowResult: any): any {
    const strikeResult = this.strikeManager.GetStrikes();
  }
}
