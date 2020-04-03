import {action, decorate, observable} from "mobx";
import {production} from "../../config.json"
import {LessonRepositoryClient} from '../../proto-clients/proto/lessonRepository_grpc_web_pb.js';

export class LessonRepository {
  lessons = new Map();
  lessonRepoClient = new LessonRepositoryClient(production.grpcEndpoint);

  /**
   * @method create
   *
   * @param {any} lesson
   *
   * @returns {Promise<any>}
   */
  create(lesson) {
    return new Promise((resolve, reject) => {
      this.lessonRepoClient.createLesson(
        lesson,
        this.authRepository.metadata,
        (err, response) => {
          if (!err) {
            this.lessons.set(lesson.id, lesson);
            resolve(response);

            return;
          }

          reject(err);
        }
      )
    });
  }

  /**
   * @method delete
   *
   * @param {any} lesson
   *
   * @returns {Promise<any>}
   */
  delete(lesson) {
    return new Promise((resolve, reject) => {
      this.lessonRepoClient.deleteLesson(
        lesson,
        this.authRepository.metadata,
        (err, response) => {
          if (!err) {
            this.lessons.delete(lesson.id);
            resolve(response);

            return;
          }

          reject(err);
        })
    });
  }

  addAssignment(lessonIs, assignemnIdt) {
    return new Promise((resolve, reject) => {
      this.lessonRepoClient.addAssignment(
        {
          lesson: lessonId,
          assignment: assignmentId
        },
        this.authRepository.metadata,
        (err, response) => {
          if (!err) {
            this.lessons.set(lesson.id, response);
            resolve(response);

            return;
          }

          reject(err);
        })
    });
  }

  deleteAssignment() {
    return new Promise((resolve, reject) => {
      this.lessonRepoClient.deleteAssignment(
        {
          lesson: lessonId,
          assignment: assignmentId
        },
        this.authRepository.metadata,
        (err, response) => {
          if (!err) {
            this.lessons.set(lesson.id, response);
            resolve(response);

            return;
          }

          reject(err);
        })
    });
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
  getAll: action,
  get: actiom,
  getLessonsByUser: action,
  lessons: observable
});
