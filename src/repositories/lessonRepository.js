import {action, decorate} from "mobx";
import {useFirestore, useFirestoreCollectionData, useFirestoreDocDataOnce} from "reactfire";

export class LessonRepository {
  collectionName = 'lessons';

  /**
   *
   * @param data
   * @returns {*}
   */
  create(data) {
    return useFirestore().collection(this.collectionName).set(data);
  }

  /**
   *
   * @param lessonId
   * @returns {Promise<void>}
   */
  delete(lessonId) {
    return useFirestore().collection(this.collectionName).doc(lessonId).delete();
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
    return useFirestore().collection(this.collectionName).doc(lessonId).update({assignments: assignmentId})
  }

  /**
   *
   * @param lessonId
   * @param assignmentId
   * @returns {Promise<void>}
   */
  deleteAssignment(lessonId, assignmentId) {
    // TODO: Little bit more logic required to update Array
    return useFirestore().collection(this.collectionName).doc(lessonId).set({assignments: 0})
  }

  /**
   *
   * @param lessonId
   * @returns {any}
   */
  getLessonById(lessonId) {
    return useFirestoreDocDataOnce(
      useFirestore().collection(this.collectionName).doc(lessonId)
    );
  }

  /**
   *
   * @param userId
   * @returns {any | {[p: string]: any}[]}
   */
  getLessonsByUser(userId) {
    return useFirestoreCollectionData(
      useFirestore()
        .collection(this.collectionName)
        .where('users', 'array-contains', userId)
    );
  }

  /**
   *
   * @param userId
   * @returns {any | {[p: string]: any}[]}
   */
  getLessonsByTeacher(userId) {
    return useFirestoreCollectionData(
      useFirestore()
        .collection(this.collectionName)
        .where('teacher', '==', userId)
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
