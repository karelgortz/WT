import {Component, HostListener, OnInit} from '@angular/core';
import {ExerciseService} from "../../../services/exercise.service";
import {Exercise} from "../../../models/exercise.model";
declare var $:any;

@Component({
  selector: 'exercise-list-detail',
  templateUrl: './exercise-list-detail.component.html'
})
export class ExerciseListDetailComponent implements OnInit{
  public exercise: Exercise = new Exercise();
  public screenWidth: number;

  constructor(private exerciseService: ExerciseService) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
  }

  showExerciseDetail(exercise: Exercise){
    console.log('etst')
    this.exercise = exercise;
    $('#exerciseDetail').modal('show')
  }

  @HostListener('window:resize', [])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

}
