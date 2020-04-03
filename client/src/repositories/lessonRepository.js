import {action, decorate, observable} from "mobx";

export class LessonRepository {
  create() {
    // TODO implement
  }

  delete() {
    // TODO implement
  }

  addAssignment() {
    // TODO implement
  }

  deleteAssignment() {
    // TODO implement
  }

  get() {

  }

  getAll() {
    // TODO implement
  }

  getLessonsByUser() {
    // TODO implement
  }

  getLessonsByAuthor() {
    // TODO implement
  }

}

decorate(LessonRepository, {
  create: action,
  addAssignment: action,
  deleteAssignment: action,
  delete: action,
  getAll: observable,
  get: observable,
  getLessonsByUser: observable
});
