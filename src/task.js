export default class Task {
  constructor(title, description, dueDate, priority, parent, id) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._isCheck = false;
    this._parent = parent;
    this._id = id;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get dueDate() {
    return this._dueDate;
  }

  get priority() {
    return this._priority;
  }

  set title(title) {
    this._title = title;
  }

  set description(description) {
    this._description = description;
  }

  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }

  set priority(priority) {
    this._priority = priority;
  }
}
