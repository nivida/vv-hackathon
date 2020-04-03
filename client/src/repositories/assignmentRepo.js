import {action, decorate, observable} from "mobx";
import {AssignmentRepositoryClient} from "../../proto-clients/proto/assignmentRepository_grpc_web_pb";
import {production} from "../../config";

export class AssignmentRepo {
  constructor() {
    this.assignmentRepoClient = new AssignmentRepositoryClient(production.grpcEndpoint);
  }

  create() {
    // TODO implement
  }

  delete() {
    // TODO implement
  }

  update() {
    // TODO implement
  }

  getAll() {
    // TODO implement
  }

  getByUser() {
    // TODO implement
  }

  getByAuthor() {
    // TODO implement
  }

  getByLesson() {
    // TODO implement
  }
}

decorate(AssignmentRepo, {
  create: action,
  update: action,
  delete: action,
  getAll: observable,
  getByUser: observable,
  getByLesson: observable
});
