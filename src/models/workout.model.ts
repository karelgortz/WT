import {Exercise} from "./exercise.model";
import {WorkoutExercise} from "./workout-exercise.modal";

export class Workout {
  public id?: string;
  public name?: string;
  public date?: any;

  constructor(id?: string, name?: string, date?: any) {
    this.id = id;
    this.name = name;
    this.date = date;
  }
}

