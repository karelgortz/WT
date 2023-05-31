import {Component, OnInit} from '@angular/core';
import {ExerciseService} from "../../../services/exercise.service";
import {Exercise} from "../../../models/exercise.model";
declare var $:any;

@Component({
  selector: 'exercise-list-detail',
  templateUrl: './exercise-list-detail.component.html'
})
export class ExerciseListDetailComponent implements OnInit{
  public exercise: Exercise = new Exercise();
  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit(): void {
  }

  showExerciseDetail(exercise: Exercise){
    console.log('etst')
    this.exercise = exercise;
    $('#exerciseDetail').modal('show')
  }

}
