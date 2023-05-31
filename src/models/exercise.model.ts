export class Exercise {
  public difficulty?: string;
  public equipment?: string;
  public instructions?: string;
  public muscle?: string;
  public name?: string;
  public type?: string;

  constructor(difficulty?: string, equipment?: string, instructions?: string, muscle?: string, name?: string, type?: string) {
    this.difficulty = difficulty;
    this.equipment = equipment;
    this.instructions = instructions;
    this.muscle = muscle;
    this.name = name;
    this.type = type;
  }
}

