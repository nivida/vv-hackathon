import {action, decorate} from "mobx";
import {firebase, querySnapToDataArray} from "../Firebase";
import {Lesson} from "../models/lesson";

export class LessonRepository {
  collectionName = 'lessons';

  /**
   *
   * @param data
   * @returns {*}
   */
  create(data) {
    return firebase.firestore
      .collection(this.collectionName)
      .doc()
      .set(data);
  }

  /**
   *
   * @param lessonId
   * @returns {Promise<void>}
   */
  delete(lessonId) {
    return firebase.firestore
      .collection(this.collectionName)
      .doc(lessonId)
      .delete();
  }

  /**
   * @method update
   *
   * @param lessonId
   * @param data
   *
   * @returns {Promise<Boolean>}
   */
  update(lessonId, data) {
    return firebase.firestore
      .collection(this.collectionName)
      .doc(lessonId)
      .update(data)
  }

  /**
   *
   * @param lessonId
   * @returns {any}
   */
  async getLessonById(lessonId) {
    const doc = await firebase.firestore
        .collection(this.collectionName)
        .doc(lessonId)
        .get();

    return doc.data();
  }

  /**
   *
   * @param userId
   * @returns {any | {[p: string]: any}[]}
   */
  async getLessonsByUser(userId) {
    return querySnapToDataArray(
      await firebase.firestore
        .collection(this.collectionName)
        .where('users', 'array-contains', userId)
        .get(),
      Lesson
    );
  }

  /**
   *
   * @param teacherId
   * @returns {any | {[p: string]: any}[]}
   */
  async getLessonsByTeacher(teacherId) {
    return querySnapToDataArray(
      await firebase.firestore
        .collection(this.collectionName)
        .where('teacher', '==', teacherId)
        .get(),
      Lesson
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
