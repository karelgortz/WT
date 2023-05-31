import {Component, ViewChild} from '@angular/core';
import {Workout} from "../../../models/workout.model";
import {ExerciseService} from "../../../services/exercise.service";
import {WorkoutExercise} from "../../../models/workout-exercise.modal";
import {ExerciseModalComponent} from "./exercise.modal.component";

declare var $:any;


@Component({
  selector: 'workout-exercise-overview',
  templateUrl: './workout-exercise-overview.modal.component.html'
})
export class WorkoutExerciseOverviewModalComponent {
  public currentWorkout: Workout;
  public workoutExercises: WorkoutExercise[] = [];
  @ViewChild("exerciseModal") exerciseModal?: ExerciseModalComponent;

  constructor(private exerciseService: ExerciseService) {

  }

  close(){
    $('#exerciseOverview').modal('hide')
    this.currentWorkout = new Workout();
    this.workoutExercises = [];
  }

  getWorkoutExercises(){
    this.exerciseService.getWorkoutExercises(this.currentWorkout.id).then(result => {
      this.workoutExercises = result
    })
  }

  show(workout: Workout){
    this.currentWorkout = workout;
    this.getWorkoutExercises();
    $('#exerciseOverview').modal('show')
  }

  showExerciseModal(){
    this.exerciseModal.show(new WorkoutExercise(), this.currentWorkout)
    this.close();
  }

  deleteWorkoutExercise(weId: string){
    this.exerciseService.deleteWorkoutExercise(weId).then(result => {
      this.getWorkoutExercises();
    })
  }
}
