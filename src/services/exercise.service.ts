import {Injectable} from '@angular/core';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  setDoc,
  getDoc,
  where,
  query,
  startAfter,
  limit,
  orderBy,
  startAt
} from 'firebase/firestore/lite'
import {ConverterService} from "./converter.service";
import {Exercise} from "../models/exercise.model";
import db from "../firebase/firebaseconfig";
import {Workout} from "../models/workout.model";
import {WorkoutExercise} from "../models/workout-exercise.modal";
import {Page} from "../models/page.model";
import {AppDB} from "../app/dexie/db";

@Injectable({
  providedIn: 'root'
})

export class ExerciseService {

  constructor(private converterService: ConverterService, private dbService: AppDB) {
  }

  /*
  * Get all Exercises
  */
  async getExercises(page: Page): Promise<Array<Exercise>> {
    let exercises: Exercise[] = [];
    let q;
    console.log(page)
    if (page.offset != 0) {
      q = query(collection(db, "Exercises").withConverter(this.converterService.exerciseConverter), orderBy("index"),
        startAfter(page.offset * 10), limit(page.limit));
    } else {
      q = query(collection(db, "Exercises").withConverter(this.converterService.exerciseConverter), orderBy("index"),
        limit(page.limit)), startAt(page.offset * 10);
    }
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      exercises.push(doc.data());
    });
    return exercises;
  }

  async searchExercises(): Promise<Array<Exercise>>{
    let exercises: Exercise[] = [];
    const q = query(collection(db, "Exercises").withConverter(this.converterService.exerciseConverter));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      exercises.push(doc.data());
    });
    return exercises;
  }

  getOfflineExercises(page: Page): Promise<Array<Exercise>>{
    if (page.offset == 0){
      return this.dbService.table("exercises").where("index").between(page.offset, page.limit).toArray();
    } else {
      return this.dbService.table("exercises").where("index").above(page.offset * 10).limit(page.limit).toArray();
    }
  }

  async getWorkouts(): Promise<Array<Workout>> {
    let workoutList: Workout[] = []
    const querySnapshot = await getDocs(collection(db, "Workouts").withConverter(this.converterService.workoutConverter));
    querySnapshot.forEach((doc) => {
      workoutList.push(doc.data());
    });
    return workoutList;
  }

  async updateWorkout(workout: Workout): Promise<any> {
    const ref = doc(db, "Workouts", `${workout.id}`).withConverter(this.converterService.workoutConverter)
    return await setDoc(ref, workout)
  }

  async deleteWorkout(workoutId: string): Promise<any> {
    await deleteDoc(doc(db, "Workouts", workoutId));
  }

  async deleteWorkoutExercise(workoutExId: string): Promise<any> {
    await deleteDoc(doc(db, "WorkoutExercises", workoutExId));
  }

  async getAllWorkoutExercises(): Promise<Array<WorkoutExercise>> {
    let workoutExList: WorkoutExercise[] = []
    const querySnapshot = await getDocs(collection(db, "WorkoutExercises").withConverter(this.converterService.workoutExerciseConverter));
    querySnapshot.forEach((doc) => {
      workoutExList.push(doc.data());
    });
    return workoutExList;
  }

  async getWorkoutExercises(workoutId: string): Promise<Array<WorkoutExercise>> {
    let workoutExerciseList: WorkoutExercise[] = []
    const q = query(collection(db, "WorkoutExercises").withConverter(this.converterService.workoutExerciseConverter),
      where('workoutId', '==', workoutId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      workoutExerciseList.push(doc.data());
    });
    return workoutExerciseList;
  }

  async updateWorkoutExercise(workoutEx: WorkoutExercise): Promise<any> {
    console.log(workoutEx)
    const ref = doc(db, "WorkoutExercises", `${workoutEx.id}`).withConverter(this.converterService.workoutExerciseConverter)
    return await setDoc(ref, workoutEx)
  }

  async addWorkout(workout: Workout): Promise<any> {
    return await addDoc(collection(db, "Workouts").withConverter(this.converterService.workoutConverter),
      workout)
  }

  async addWorkoutExercise(we: WorkoutExercise): Promise<any> {
    return await addDoc(collection(db, "WorkoutExercises").withConverter(this.converterService.workoutExerciseConverter), we)
  }

  async getWorkoutExercise(id: string): Promise<WorkoutExercise> {
    let workoutExercise: any;
    const docRef = doc(db, "WorkoutExercises", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      workoutExercise = docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    return workoutExercise;
  }


  async getExercise(docRef: any): Promise<Exercise> {
    let exercise: any;
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      exercise = docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    return exercise;
  }
}
