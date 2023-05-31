import { Injectable } from '@angular/core';
import {Exercise} from "../models/exercise.model";
import {WorkoutExercise} from "../models/workout-exercise.modal";
import {Workout} from "../models/workout.model";

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  constructor() { }

  public exerciseConverter: any = {
    toFirestore: (exercise: any) => {
      return {
        difficulty: exercise.difficulty,
        equipment: exercise.equipment,
        instructions: exercise.instructions,
        muscle: exercise.muscle,
        name: exercise.name,
        type: exercise.type,
      };
    },
    fromFirestore: (snapshot: any, options: any) => {
      const data = snapshot.data(options);
      return new Exercise(data.difficulty, data.equipment, data.instructions, data.muscle, data.name, data.type);
    }
  };


  public workoutExerciseConverter: any = {
    toFirestore: (workoutExercise: any) => {
      return {
        reps: workoutExercise.reps,
        sets: workoutExercise.sets,
        exercise: {
          difficulty: workoutExercise.exercise.difficulty,
          equipment: workoutExercise.exercise.equipment,
          instructions: workoutExercise.exercise.instructions,
          muscle: workoutExercise.exercise.muscle,
          name: workoutExercise.exercise.name,
          type: workoutExercise.exercise.type,
        },
        weight: workoutExercise.weight,
        workoutId: workoutExercise.workoutId
      };
    },
    fromFirestore: (snapshot: any, options: any) => {
      const data = snapshot.data(options);
      return new WorkoutExercise(snapshot.id, data.reps, data.sets, data.exercise, data.weight, data.workoutId);
    }
  };

  public workoutConverter: any = {
    toFirestore: (workout: any) => {
      return {
        id: workout.id,
        name: workout.name,
        date: workout.date
      };
    },
    fromFirestore: (snapshot: any, options: any) => {
      const data = snapshot.data(options);
      return new Workout(snapshot.id, data.name, data.date);
    }
  };

}
