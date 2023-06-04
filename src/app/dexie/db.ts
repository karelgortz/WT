import Dexie, { Table } from 'dexie';
import {Exercise} from "../../models/exercise.model";
import {Workout} from "../../models/workout.model";
import {WorkoutExercise} from "../../models/workout-exercise.modal";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppDB extends Dexie {
  exercises!: Table<Exercise, number>;
  workouts!: Table<Workout, number>;
  workoutExercises!: Table<WorkoutExercise, number>

  constructor() {
    super('dexieDb');

    this.version(2).stores({
      exercises: 'name, difficulty, equipment, instructions, muscle, type, index',
      workouts: 'id, date, name',
      workoutExercises: 'reps, sets, weight, workoutId'
    });

    this.open()
      .then(data => console.log("DB Opened"))
      .catch(err => console.log(err.message));
  }
}

