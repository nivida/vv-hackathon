import {action, decorate, observable} from "mobx";
import {production} from "../../config.json"
import {LessonRepositoryClient} from '../../proto-clients/proto/lessonRepository_grpc_web_pb.js';

export class LessonRepository {

  constructor() {
    this.lessonRepoClient = new LessonRepositoryClient(production.grpcEndpoint);
  }


  create() {
    // TODO implement
  }

  delete() {
    // TODO implement
  }

  addAssignment() {
    // TODO implement
  }

  deleteAssignment() {
    // TODO implement
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
  getAll: observable,
  get: observable,
  getLessonsByUser: observable
});
