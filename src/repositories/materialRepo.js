import {action, decorate} from "mobx";
import {firebase, querySnapToDataArray} from "../Firebase";
import {firestore} from "firebase";

export class MaterialRepo {
  collectionName = 'materials';

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
    );
  }

  async getById(id) {
    const doc = await firebase.firestore
      .collection(this.collectionName)
      .doc(id)
      .get();
    return {...doc.data(), id};
  }

  async getByAssignment(assignment) {
    if ((assignment.materials || []).length === 0) return Promise.resolve([]);

    return querySnapToDataArray(
      await firebase.firestore
        .collection(this.collectionName)
        .where(firestore.FieldPath.documentId(), 'in', assignment.materials || [])
        .get(),
    );
  }
}

decorate(MaterialRepo, {
  create: action,
  update: action,
  delete: action,
  getAll: action,
  getById: action,
  getByAssignment: action
});
