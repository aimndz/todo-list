import UI from "./ui";
import Utils from "./utils";
import EventListeners from "./eventListeners";
import Storage from "./storage";
import Task from "./task";

// const task1 = new Task(
//   "Organize",
//   "This is a sample description. nyenyenye",
//   "Sep 30",
//   "high-priority"
// );

// const task2 = new Task(
//   "Organize",
//   "This is a sample description. nyenyenye",
//   "Sep 30",
//   "high-priority"
// );

// const task3 = new Task(
//   "Organiza",
//   "This is a sample description. nyenyenye",
//   "Sep 30",
//   "high-priority"
// );

// const task4 = new Task(
//   "OREGANO",
//   "This is a sample description. nyenyenye",
//   "Sep 30",
//   "high-priority"
// );

// const task5 = new Task(
//   "OREGANO",
//   "This is a sample description. nyenyenye",
//   "Sep 30",
//   "high-priority"
// );

// const task1 = new Task(
//   "OREGANO",
//   "This is a sample description. nyenyenye",
//   "Sep 30",
//   "high-priority"
// );

// const task2 = new Task(
//   "Hellooo",
//   "This is a sample description. nyenyenye",
//   "Sep 30",
//   "high-priority"
// );

// const tasks = [task1, task2, task3];
// const tasks2 = [task4, task5, task6];

// tasks.forEach((task) => {
//   storage.scheduleLists[0].addTask(task);
// });

// tasks2.forEach((task) => {
//   storage.scheduleLists[1].addTask(task);
// });

const storage = new Storage();
// storage.scheduleLists[0].addTask(task1);
// storage.scheduleLists[0].addTask(task2);

const ui = new UI(storage);
ui.initUI();

const eventListeners = new EventListeners(storage);
eventListeners.initToggleButtons();

const utils = new Utils(storage);
utils.initUtils();
