import {action, decorate} from "mobx";
import {firebase, querySnapToDataArray} from "../Firebase";
import {Assignment as AssignmentModel} from "../models/assignment";
import {firestore} from "firebase";

export class AssignmentRepo {
  collectionName = 'assignments';

  create(data) {
    return firebase.firestore
      .collection(this.collectionName)
      .doc()
      .set(data);
  }

  delete(assignmentId) {
    return firebase.firestore
      .collection(this.collectionName)
      .doc(assignmentId)
      .delete();
  }

  update(assignmentId, changes) {
    return firebase.firestore
      .collection(this.collectionName)
      .doc(assignmentId)
      .update(changes);
  }

  async getAll() {
    return querySnapToDataArray(
      await firebase.firestore
        .collection(this.collectionName)
        .get()
    );
  }

  async getByUser(userId) {
    return querySnapToDataArray(
      await firebase.firestore
        .collection(this.collectionName)
        .where('users', '==', userId)
        .get()
    );
  }

  async getById(id) {
    const doc = await firebase.firestore
      .collection(this.collectionName)
      .doc(id)
      .get();
    return AssignmentModel.fromPlainObject({...doc.data(), id});
  }

  async getByAuthor(authorId) {
    return querySnapToDataArray(
      await firebase.firestore
        .collection(this.collectionName)
        .where('author', '==', authorId)
        .get()
    );
  }

  async getByLesson(lesson) {
    if ((lesson.assignments || []).length === 0) return Promise.resolve([]);

    return querySnapToDataArray(
      await firebase.firestore
        .collection(this.collectionName)
        .where(firestore.FieldPath.documentId(), 'in', lesson.assignments)
        .get()
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
