import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExerciseListComponent} from "./exercise-list/exercise-list.component";
import {HomeComponent} from "./home/home.component";
import {WorkoutLoggerComponent} from "./workout-logger/workout-logger.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'logger', component: WorkoutLoggerComponent },
  { path: 'exercises', component: ExerciseListComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
