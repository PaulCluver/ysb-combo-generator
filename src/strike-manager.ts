// tslint:disable-next-line:no-reference
/// <reference path="../node_modules/@types/node/index.d.ts" />

import { Parser } from "csv-parse";
import { Strike } from "./strike";

export class StrikeManager {
  constructor(
    id: number,
    name: string,
    verticalOrientation: string,
    verticalValue: number,
    verticalYinYang: string,
    horizontalOrientation: string,
    horizontalValue: number,
    horizontalYinYang: string,
    overallYinYang: string,
    overallOrientation: string
  ) {
    const results: any = [];
    const strikes: any = [];
    const inputFile = "data/strikes.csv";
    const fs = require("fs");
    // tslint:disable-next-line:only-arrow-functions
    const result = fs.readFile(inputFile, function(err: string, data: string) {
      if (err) {
        // tslint:disable-next-line:no-console
        return console.error(err);
      }

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

      for (let i = 1; i < results.length; i++) {
        // tslint:disable-next-line:no-console
        console.log(results[i]);
      }

      // for (const item in results) {
      //   if (results.hasOwnProperty(item)) {
      //     const element = results[item];
      //     // tslint:disable-next-line:no-console
      //     console.warn("test: ", results[item]);
      //     strikes.push(
      //       new Strike(
      //         element[0],
      //         element[1],
      //         element[2],
      //         element[3],
      //         element[4],
      //         element[5],
      //         element[6],
      //         element[7],
      //         element[8],
      //         element[9]
      //       )
      //     );
      //   }
      // }
    });
  }

  // public GetStrikes(): any {
  //   return this.strikes;
  // }
}
