import {action, decorate, observable} from "mobx";
import {production} from "../config.json"
import {LessonRepositoryClient} from 'proto-clients/proto/lessonRepository_grpc_web_pb.js';

export class LessonRepository {
  lessons = new Map();
  lessonRepoClient = new LessonRepositoryClient(production.grpcEndpoint);

  /**
   * @method create
   *
   * @param {any} lesson
   *
   * @returns {Promise<Lesson>}
   */
  create(lesson) {
    return new Promise((resolve, reject) => {
      this.lessonRepoClient.createLesson(
        lesson,
        this.authRepository.metadata,
        (err, response) => {
          if (!err) {
            resolve(response);
            this.lessons.set(response.id, response);

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
   * @param {string} lessonId
   *
   * @returns {Promise<Boolean>}
   */
  delete(lessonId) {
    return new Promise((resolve, reject) => {
      this.lessonRepoClient.deleteLesson(
        lessonId,
        this.authRepository.metadata,
        (err, response) => {
          if (!err) {
            this.lessons.delete(lessonId);
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
   * @param assignmentId
   *
   * @returns {Promise<Boolean>}
   */
  addAssignment(lessonId, assignmentId) {
    return new Promise((resolve, reject) => {
      this.lessonRepoClient.addAssignment(
        {
          lesson: lessonId,
          assignment: assignmentId
        },
        this.authRepository.metadata,
        (err, response) => {
          if (!err) {
            this.lessons.set(lessonId, response);
            resolve(response);

            return;
          }

          reject(err);
        })
    });
  }

  /**
   * @param assignmentId
   * @returns {Promise<Boolean>}
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
   * @returns {Promise<Lesson[]>}
   */
  getLessons(filter) {
    return new Promise((resolve, reject) => {
      this.lessonRepoClient.deleteAssignment(
        filter,
        this.authRepository.metadata,
        (err, response) => {
          if (!err) {
            resolve(response);

            response.forEach(lesson => {
              this.lessons.set(lesson.id, lesson);
            });

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
  get: action,
  getLessonsByUser: action,
  lessons: observable
});
