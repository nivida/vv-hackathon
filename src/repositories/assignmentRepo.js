import {action, decorate} from "mobx";
import {firebase} from "../Firebase";

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
    const snapshot = await firebase.firestore.collection(this.collectionName).get();
    
    return snapshot.docs[0].data();
  }

  getByUser(userId) {
    return firebase.firestore.collection(this.collectionName).where('user', '==', userId).get();
  }

  getByAuthor(authorId) {
    return firebase.firestore.collection(this.collectionName).where('author', '==', authorId).get();
  }

  getByLesson(lessonId) {
    return firebase.firestore.collection(this.collectionName).where('lesson', '==', lessonId).get();
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
