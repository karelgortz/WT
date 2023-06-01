import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HomeComponent} from "./home/home.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ExerciseService} from "../services/exercise.service";
import {ExerciseListComponent} from "./exercise-list/exercise-list.component";
import {ExerciseListDetailComponent} from "./exercise-list/exercise-list-detail/exercise-list-detail.component";
import {WorkoutLoggerComponent} from "./workout-logger/workout-logger.component";
import {navbarComponent} from "./navbar/navbar.component";
import {AppComponent} from "./app.component";
import {WorkoutModalComponent} from "./workout-logger/modals/workout.modal.component";
import {FormsModule} from "@angular/forms";
import {WorkoutExerciseOverviewModalComponent} from "./workout-logger/modals/workout-exercise-overview.modal.component";
import {ExerciseModalComponent} from "./workout-logger/modals/exercise.modal.component";
import { NgSelectModule } from '@ng-select/ng-select';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExerciseListComponent,
    ExerciseListDetailComponent,
    WorkoutLoggerComponent,
    navbarComponent,
    WorkoutModalComponent,
    WorkoutExerciseOverviewModalComponent,
    ExerciseModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    FormsModule,
    NgSelectModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately'
    }),

  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
