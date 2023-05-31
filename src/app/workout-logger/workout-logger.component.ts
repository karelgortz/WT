import {Component, OnInit, ViewChild} from '@angular/core';
import {WorkoutModalComponent} from "./modals/workout.modal.component";
import {Workout} from "../../models/workout.model";
import {ExerciseService} from "../../services/exercise.service";
import {WorkoutExerciseOverviewModalComponent} from "./modals/workout-exercise-overview.modal.component";

@Component({
  selector: 'workout-logger',
  templateUrl: './workout-logger.component.html'
})
export class WorkoutLoggerComponent implements OnInit{
  public workouts?: Workout[];
  public workoutPromise: Promise<any>;
  @ViewChild("workoutModal") workoutModal?: WorkoutModalComponent;
  @ViewChild("workoutExerciseOverview") workoutExerciseOverview?: WorkoutExerciseOverviewModalComponent;

  constructor(private exerciseService: ExerciseService) {
  }

  openWorkoutModal(){
    this.workoutModal?.show(new Workout('', null))
  }

  ngOnInit(): void {
    this.getWorkouts();
  }

  getWorkouts(){
    this.workoutPromise = this.exerciseService.getWorkouts().then(result => {
      this.workouts = result
    })
  }

  showWorkoutExercises(workout: Workout){
    this.workoutExerciseOverview.show(workout);
  }

  deleteWorkout(workoutId: string){
    this.exerciseService.deleteWorkout(workoutId).then(result => {
      this.getWorkouts();
    })
  }
}
