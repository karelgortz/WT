import {Component, OnInit} from '@angular/core';
import {ExerciseService} from "../../services/exercise.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class navbarComponent implements OnInit{
  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit(): void {
  }
}
