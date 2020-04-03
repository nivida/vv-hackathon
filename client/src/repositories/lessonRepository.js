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

  /**
   * @method addAssignment
   *
   * @param lessonId
   * @param assignemnId
   *
   * @returns {Promise<any>}
   */
  addAssignment(lessonId, assignemnId) {
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

  /**
   * @param assignmentId
   * @returns {Promise<any>}
   */
  deleteAssignment(assignmentId) {
    return new Promise((resolve, reject) => {
      this.lessonRepoClient.deleteAssignment(
        {
          assignment: assignmentId
        },
        this.authRepository.metadata,
        (err, response) => {
          if (!err) {
            // TODO: update lessons

            resolve(response);

            return;
          }

          reject(err);
        })
    });
  }

  /**
   * @param filter
   * @returns {Promise<any>}
   */
  getLessons(filter) {
    return new Promise((resolve, reject) => {
      this.lessonRepoClient.deleteAssignment(
        filter,
        this.authRepository.metadata,
        (err, response) => {
          if (!err) {
            resolve(response);

            response.forEach((lesson => {
              this.lessons.set(lesson.id, lesson);
            }));

            return;
          }

          reject(err);
        })
    });
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
