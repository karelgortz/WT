export class Exercise {
  public difficulty?: string;
  public equipment?: string;
  public instructions?: string;
  public muscle?: string;
  public name?: string;
  public type?: string;
  public index?: number;

  constructor(difficulty?: string, equipment?: string, instructions?: string, muscle?: string, name?: string, type?: string, index?: number) {
    this.difficulty = difficulty;
    this.equipment = equipment;
    this.instructions = instructions;
    this.muscle = muscle;
    this.name = name;
    this.type = type;
    this.index = index;
  }
}

