import {Component, OnInit, ViewChild, HostListener} from '@angular/core';
import {ExerciseService} from "../../services/exercise.service";
import {Exercise} from "../../models/exercise.model";
import {ExerciseListDetailComponent} from "./exercise-list-detail/exercise-list-detail.component";
import {Page} from "../../models/page.model";
import { AppDB } from '../dexie/db';


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

  constructor(private exerciseService: ExerciseService, private dbService: AppDB) {
    this.screenWidth = window.innerWidth;
  }
  ngOnInit(): void {
    this.page = new Page(159, 0, 10)
    this.getExercises();
    this.exerciseService.searchExercises().then(result =>{
      console.log(result)
      this.dbService.table('exercises').bulkPut(result)
        .then(data => console.log(data))
        .catch(err => console.log(err.message));
    })
  }

    getExercises(){
      if (navigator.onLine){
        console.log('online')
        this.exerciseService.getExercises(this.page).then(result => {
          this.exercises = result;
        })
        }else {
          this.exerciseService.getOfflineExercises(this.page).then(result => {
            console.log(result)
            this.exercises = result;
            console.log(result.values())
          })
      }
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
