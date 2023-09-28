import Task from "./task";

export default class TodoList {
  constructor(name) {
    this._name = name;
    this._tasks = [];
  }

  get name() {
    return this._name;
  }

  get tasks() {
    return this._tasks;
  }

  addTask(task) {
    this._tasks.push(task);
  }

  getSize() {
    return this._tasks.length;
  }
}
