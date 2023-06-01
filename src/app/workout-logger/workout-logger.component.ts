import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {WorkoutModalComponent} from "./modals/workout.modal.component";
import {Workout} from "../../models/workout.model";
import {ExerciseService} from "../../services/exercise.service";
import {WorkoutExerciseOverviewModalComponent} from "./modals/workout-exercise-overview.modal.component";
import {ColumnMode, DatatableComponent} from "@swimlane/ngx-datatable";

@Component({
  selector: 'workout-logger',
  templateUrl: './workout-logger.component.html'
})
export class WorkoutLoggerComponent implements OnInit, AfterViewInit{
  public workouts?: Workout[];
  public workoutPromise: Promise<any>;
  public screenWidth: number;
  public colMode: ColumnMode;
  @ViewChild("workoutModal") workoutModal?: WorkoutModalComponent;
  @ViewChild("workoutExerciseOverview") workoutExerciseOverview?: WorkoutExerciseOverviewModalComponent;

  constructor(private exerciseService: ExerciseService) {
    this.screenWidth = window.innerWidth;
    if (window.innerWidth < 450){
      this.colMode = ColumnMode.standard;
    } else {
      this.colMode = ColumnMode.flex;
    }
  }

  openWorkoutModal(){
    this.workoutModal?.show(new Workout('', null))
  }

  ngOnInit(): void {
    this.getWorkouts();
  }

  ngAfterViewInit() {

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

  @HostListener('window:resize', [])
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 450){
      this.colMode = ColumnMode.standard;
    } else {
      this.colMode = ColumnMode.flex;
    }
  }
}
