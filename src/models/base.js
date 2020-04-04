export class BaseModel {

  id = null;

  static fromPlainObject(plainObject, {rootStore} = {}) {
    const model = new this();
    Object.assign(model, plainObject);
    if (rootStore) model.populateAttributesFromStore(rootStore);
    return model;
  }

  populateAttributesFromStore(rootStore) {
    return this;
  }
}
