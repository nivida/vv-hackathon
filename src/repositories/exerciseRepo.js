import {action, decorate} from "mobx";
import {firebase, querySnapToDataArray} from "../Firebase";
import {firestore} from "firebase";
import {Exercise} from "../models/exercise";

export class ExerciseRepo {
  collectionName = 'exercises';

  create(data) {
    return firebase.firestore
      .collection(this.collectionName)
      .doc()
      .set(data);
  }

  delete(exerciseId) {
    return firebase.firestore
      .collection(this.collectionName)
      .doc(exerciseId)
      .delete();
  }

  update(exerciseId, changes) {
    return firebase.firestore
      .collection(this.collectionName)
      .doc(exerciseId)
      .update(changes);
  }

  async getAll() {
    return querySnapToDataArray(
      await firebase.firestore
        .collection(this.collectionName)
        .get(),
      Exercise
    );
  }

  async getById(id) {
    const doc = await firebase.firestore
      .collection(this.collectionName)
      .doc(id)
      .get();
    return Exercise.fromPlainObject({...doc.data(), id});
  }

  async getByAssignment(assignment) {
    if ((assignment.exercises || []).length === 0) return Promise.resolve([]);

    return querySnapToDataArray(
      await firebase.firestore
        .collection(this.collectionName)
        .where(firestore.FieldPath.documentId(), 'in', assignment.exercises || [])
        .get(),
      Exercise
    );
  }
}

decorate(ExerciseRepo, {
  create: action,
  update: action,
  delete: action,
  getAll: action,
  getById: action,
  getByAssignment: action
});
