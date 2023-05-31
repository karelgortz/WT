import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Workout} from "../../../models/workout.model";
import {NgForm} from '@angular/forms';
import {ExerciseService} from "../../../services/exercise.service";
import {Exercise} from "../../../models/exercise.model";
import {WorkoutExercise} from "../../../models/workout-exercise.modal";

declare var $:any;


@Component({
  selector: 'exercise-modal',
  templateUrl: './exercise.modal.component.html'
})
export class ExerciseModalComponent implements  OnInit{
  public currentWorkoutExercise: WorkoutExercise;
  public currentWorkout: Workout;
  public exercises: Exercise[] = [];
  public selectedExercise: Exercise = null;
z
  @Output() exerciseSaved: EventEmitter<any> = new EventEmitter<any>();
  @Output() exerciseCancelled: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('form') form: NgForm;

  constructor(private exerciseService: ExerciseService) {

  }
  ngOnInit(): void {
    this.currentWorkoutExercise = new WorkoutExercise()
  }

  show(exercise: WorkoutExercise, workout: Workout){
    this.currentWorkoutExercise = exercise;
    this.currentWorkout = workout;
    this.selectedExercise = exercise.exercise;
    console.log(this.currentWorkout)
    this.getExercises();
    $('#newExercise').modal('show');
  }

  close(){
    this.exerciseCancelled.emit(this.currentWorkout);
    this.currentWorkoutExercise = new WorkoutExercise();
    this.currentWorkout = new Workout();
    this.selectedExercise = null;
    this.form.reset();
    $('#newExercise').modal('hide');
  }

  onSubmit(f: NgForm) {
    let newWorkoutExercise: WorkoutExercise = f.value;
    newWorkoutExercise.workoutId = this.currentWorkout.id;
    newWorkoutExercise.exercise = this.selectedExercise;
    console.log(newWorkoutExercise)
    if (this.currentWorkoutExercise.id != null){
      this.exerciseService.updateWorkoutExercise(newWorkoutExercise).then(result => {
        this.exerciseSaved.emit(this.currentWorkout);
        this.close();
      })
    } else {
      newWorkoutExercise.id = this.currentWorkoutExercise.id;
      this.exerciseService.addWorkoutExercise(newWorkoutExercise).then(result => {
        this.exerciseSaved.emit(this.currentWorkout);
        this.close();
      })
    }
  }

  getExercises(){
    /*this.exerciseService.getExercises().then(result => {
      this.exercises = result;
    })*/
  }
}
