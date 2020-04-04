import {action, decorate} from "mobx";
import {useFirestore, useFirestoreCollectionData} from "reactfire";

export class AssignmentRepo {
  collectionName = 'assignments';

  create(data) {
    return useFirestore().collection(this.collectionName).set(data);
  }

  delete(assignmentId) {
    return useFirestore().collection(this.collectionName).doc(assignmentId).delete();
  }

  update(assignmentId, changes) {
    return useFirestore().collection(this.collectionName).doc(assignmentId).update(changes);
  }

  getAll() {
    return useFirestoreCollectionData(
      useFirestore().collection(this.collectionName)
    );
  }

  getByUser(userId) {
    return useFirestoreCollectionData(
      useFirestore()
        .collection(this.collectionName)
        .where('user', '==', userId)
    );
  }

  getByAuthor(authorId) {
    return useFirestoreCollectionData(
      useFirestore()
        .collection(this.collectionName)
        .where('author', '==', authorId)
    );
  }

  getByLesson() {
    return useFirestoreCollectionData(
      useFirestore()
        .collection(this.collectionName)
        .where('lesson', '==', lessId)
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
