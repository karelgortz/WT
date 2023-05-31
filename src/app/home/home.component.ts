import {Component, OnInit} from '@angular/core';
import {ExerciseService} from "../../services/exercise.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

  constructor(private exerciseService: ExerciseService){

  }

  ngOnInit(): void {

  }

}
