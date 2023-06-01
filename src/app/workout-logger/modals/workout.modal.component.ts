import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Workout} from "../../../models/workout.model";
import {NgForm} from '@angular/forms';
import {ExerciseService} from "../../../services/exercise.service"

declare var $:any;


@Component({
  selector: 'workout-modal',
  templateUrl: './workout.modal.component.html'
})
export class WorkoutModalComponent implements  OnInit{
  public currentWorkout: Workout;

  @Output() workoutSaved: EventEmitter<any> = new EventEmitter<any>();
  @Output() workoutCancelled: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('form') form: NgForm;

  constructor(private exerciseService: ExerciseService) {

  }
  ngOnInit(): void {
    this.currentWorkout = new Workout()
  }

  show(workout: Workout){
    this.currentWorkout = workout;
    $('#newWorkout').modal('show')
  }

  cancel(){
    this.workoutCancelled.emit();
    this.close();
  }
  close(){
    this.currentWorkout = new Workout();
    this.form.reset();
    $('#newWorkout').modal('hide')
  }

  onSubmit(f: NgForm) {
    const newWorkout: Workout = f.value;
    if (this.currentWorkout.id != null){
      newWorkout.id = this.currentWorkout.id;
      this.exerciseService.updateWorkout(newWorkout).then(result => {
        this.workoutSaved.emit();
        this.close();
      })
    } else {
      this.exerciseService.addWorkout(newWorkout).then(result => {
        this.workoutSaved.emit();
        this.close();
      })
    }
  }
}
