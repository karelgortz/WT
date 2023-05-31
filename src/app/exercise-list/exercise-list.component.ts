import {Component, OnInit, ViewChild, HostListener} from '@angular/core';
import {ExerciseService} from "../../services/exercise.service";
import {Exercise} from "../../models/exercise.model";
import {ExerciseListDetailComponent} from "./exercise-list-detail/exercise-list-detail.component";
import {WorkoutExercise} from "../../models/workout-exercise.modal";
import {Page} from "../../models/page.model";
import firebase from "firebase/compat";
import DocumentReference = firebase.firestore.DocumentReference;

@Component({
  selector: 'exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit{
  public exercises: Exercise[] = [];
  public screenWidth: number;
  public page: Page;
  @ViewChild("exerciseListDetail") exerciseListDetail?: ExerciseListDetailComponent;

  constructor(private exerciseService: ExerciseService) {
    this.screenWidth = window.innerWidth;
  }
  ngOnInit(): void {
    this.page = new Page(159, 0, 10)
    this.getExercises();
  }

  getExercises(){
    let exercises = [];
    this.exerciseService.getExercises(this.page).then(result => {
      this.exercises = result;
      console.log(this.exercises)
    })
  }

  showExerciseDetail(exercise: Exercise){
    console.log(exercise)
    this.exerciseListDetail?.showExerciseDetail(exercise);
  }



  @HostListener('window:resize', [])
  onResize() {
    this.screenWidth = window.innerWidth;
  }


  handlePageChange (event: any): void {
    this.page = event;
    console.log(this.page)
    this.getExercises();
  }
}
