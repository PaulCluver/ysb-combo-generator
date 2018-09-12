export class Strike {
  private id: number;
  private name: string;
  private binaryRepresentation: string;
  private verticalOrientation: string;
  private verticalValue: number;
  private verticalYinYang: string;
  private horizontalOrientation: string;
  private horizontalValue: number;
  private horizontalYinYang: string;
  private overallYinYang: string;
  private overallOrientation: string;

  constructor(
    id: number,
    name: string,
    binaryRepresentation: string,
    verticalOrientation: string,
    verticalValue: number,
    verticalYinYang: string,
    horizontalOrientation: string,
    horizontalValue: number,
    horizontalYinYang: string,
    overallYinYang: string,
    overallOrientation: string
  ) {
    this.id = id;
    this.name = name;
    this.binaryRepresentation = binaryRepresentation;
    this.verticalOrientation = verticalOrientation;
    this.verticalValue = verticalValue;
    this.verticalYinYang = verticalYinYang;
    this.horizontalOrientation = horizontalOrientation;
    this.horizontalValue = horizontalValue;
    this.horizontalYinYang = horizontalYinYang;
    this.overallYinYang = overallYinYang;
    this.overallOrientation = overallOrientation;
  }
}
