import {action, decorate} from "mobx";
import {firebase, querySnapToDataArray} from "../Firebase";

export class AssignmentRepo {
  collectionName = 'assignments';

  create(data) {
    return firebase.firestore.collection(this.collectionName).set(data);
  }

  delete(assignmentId) {
    return firebase.firestore.collection(this.collectionName).doc(assignmentId).delete();
  }

  update(assignmentId, changes) {
    return firebase.firestore.collection(this.collectionName).doc(assignmentId).update(changes);
  }

  async getAll() {
    return querySnapToDataArray(
      await firebase.firestore.collection(this.collectionName).get()
    );
  }

  async getByUser(userId) {
    return querySnapToDataArray(
      await firebase.firestore.collection(this.collectionName).where('user', '==', userId).get()
    );
  }

  async getByAuthor(authorId) {
    return querySnapToDataArray(
      await firebase.firestore.collection(this.collectionName).where('author', '==', authorId).get()
    );
  }

  async getByLesson(lessonId) {
    return querySnapToDataArray(
      await firebase.firestore.collection(this.collectionName).where('lesson', '==', lessonId).get()
    );
  }
}

decorate(AssignmentRepo, {
  create: action,
  update: action,
  delete: action,
  getAll: action,
  getByUser: action,
  getByLesson: action
});
