import { Strike } from "./strike";

export class StrikeManager {
  private strikes: any = [];
  public constructor() {
    this.BuildStrikes();
  }

  public GetStrikes(): any {
    return this.strikes;
  }

  public GetRandomStrikesByBinaryNotation(seq: string): any {
    const strikesByBinaryNotation: any = [];
    for (const strike in this.strikes) {
      if (this.strikes.hasOwnProperty(strike)) {
        const element = this.strikes[strike];
        if (element.id !== "") {
          if (element.binaryRepresentation === seq) {
            strikesByBinaryNotation.push(element);
          }
        }
      }
    }
    const random = Math.floor(
      Math.random() * strikesByBinaryNotation.length + 1
    );

    return strikesByBinaryNotation[random];
  }

  private BuildStrikes(): any {
    this.strikes = [];
    const results: any = [];
    const fs = require("fs");
    const data = fs.readFileSync("data/strikes.csv");
    let lines = [];
    lines = data.toString().split("\n");
    const headers = lines[0].split(",");
    for (let i = 1; i < lines.length; i++) {
      const obj: any = {};
      const currentLine = lines[i].split(",");

      for (let j = 0; j < headers.length; j++) {
        if (currentLine[j] !== undefined) {
          obj[headers[j]] = currentLine[j];
        }
      }

      results.push(obj);
    }

    for (const item in results) {
      if (results.hasOwnProperty(item)) {
        const element = results[item];

        this.strikes.push(
          new Strike(
            element.ID,
            element.Strike,
            element.BinaryRepresentation,
            element.VerticalOrientation,
            element.VerticalValue,
            element.VerticalYinYang,
            element.HorizontalOrientation,
            element.HorizontalValue,
            element.HorizontalYinYang,
            element.OverallYinYang,
            element.OverallOrientation
          )
        );
      }
    }
  }
}
