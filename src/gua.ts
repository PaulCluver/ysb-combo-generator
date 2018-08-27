export class Gua {
  public name: string;
  public animal: string;
  private compare: string;

  constructor(bottomLine: string, middleLine: string, topLine: string) {
    this.compare = bottomLine + "_" + middleLine + "_" + topLine;
    this.name = "";
    this.animal = "";

    switch (this.compare) {
      case "sold_solid_solid":
        this.name = "Qian";
        this.animal = "Lion";
        break;
      case "broken_solid_broken":
        this.name = "Kan";
        this.animal = "Snake";
        break;
      case "broken_broken_solid":
        this.name = "Gen";
        this.animal = "Bear";
        break;
      case "solid_broken_broken":
        this.name = "Zhen";
        this.animal = "Dragon";
        break;
      case "broken_solid_solid":
        this.name = "Xun";
        this.animal = "Phoenix";
        break;
      case "solid_broken_solid":
        this.name = "Li";
        this.animal = "Rooster";
        break;
      case "solid_solid_broken":
        this.name = "Dui";
        this.animal = "Monkey";
        break;
      case "broken_broken_broken":
        this.name = "Kun";
        this.animal = "Unicorn";
        break;
      default:
        break;
    }
  }
}
