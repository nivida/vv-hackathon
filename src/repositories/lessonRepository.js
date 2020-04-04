import {action, decorate} from "mobx";
import {firebase, querySnapToDataArray} from "../Firebase";

export class LessonRepository {
  collectionName = 'lessons';

  /**
   *
   * @param data
   * @returns {*}
   */
  create(data) {
    return firebase.firestore.collection(this.collectionName).set(data);
  }

  /**
   *
   * @param lessonId
   * @returns {Promise<void>}
   */
  delete(lessonId) {
    return firebase.firestore.collection(this.collectionName).doc(lessonId).delete();
  }

  /**
   * @method addAssignment
   *
   * @param lessonId
   * @param assignmentId
   *
   * @returns {Promise<Boolean>}
   */
  addAssignment(lessonId, assignmentId) {
    // TODO: Little bit more logic required to update Array
    return firebase.firestore.collection(this.collectionName).doc(lessonId).update({assignments: assignmentId})
  }

  /**
   *
   * @param lessonId
   * @param assignmentId
   * @returns {Promise<void>}
   */
  deleteAssignment(lessonId, assignmentId) {
    // TODO: Little bit more logic required to update Array
    return firebase.firestore.collection(this.collectionName).doc(lessonId).set({assignments: 0})
  }

  /**
   *
   * @param lessonId
   * @returns {any}
   */
  async getLessonById(lessonId) {
    return querySnapToDataArray(await firebase.firestore.collection(this.collectionName).doc(lessonId).get())[0];
  }

  /**
   *
   * @param userId
   * @returns {any | {[p: string]: any}[]}
   */
  async getLessonsByUser(userId) {
    return querySnapToDataArray(
      await firebase.firestore.collection(this.collectionName).where('users', 'array-contains', userId).get()
    );
  }

  /**
   *
   * @param teacherId
   * @returns {any | {[p: string]: any}[]}
   */
  async getLessonsByTeacher(teacherId) {
    return querySnapToDataArray(
      await firebase.firestore.collection(this.collectionName).where('teacher', '==', teacherId).get()
    );
  }
}

decorate(LessonRepository, {
  create: action,
  addAssignment: action,
  deleteAssignment: action,
  delete: action,
  getAll: action,
  get: action,
  getLessonsByUser: action
});
