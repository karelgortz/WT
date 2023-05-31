import {Exercise} from "./exercise.model";

export class WorkoutExercise {
  public id?: string;
  public reps?: number;
  public sets?: number;
  public exercise?: Exercise;
  public weight?: number;
  public workoutId?: string;

  constructor(id?: string, reps?: number, sets?: number, exercise?: any, weight?: number, workoutId?: string) {
    this.reps = reps;
    this.sets = sets;
    this.exercise = exercise;
    this.weight = weight;
    this.workoutId = workoutId;
    this.id = id;
  }
}

