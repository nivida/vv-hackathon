import {AuthRepo} from "./authRepo";
import * as React from "react";
import {LessonRepository} from "./lessonRepository";
import {AssignmentRepo} from "./assignmentRepo";
import {UserRepo} from "./userRepo";
import {ExerciseRepo} from "./exerciseRepo";
import {MaterialRepo} from "./materialRepo";

export class RootRepo {
  constructor() {
    this.authRepo = new AuthRepo();
    this.assignmentRepo = new AssignmentRepo();
    this.exerciseRepo = new ExerciseRepo();
    this.lessonRepository = new LessonRepository();
    this.materialRepo = new MaterialRepo();
    this.userRepo = new UserRepo();
  }
}

export const rootStoreInstance = new RootRepo();
export const StoreContext = React.createContext(rootStoreInstance);
