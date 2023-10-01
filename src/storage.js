import Task from "./task";
import TodoList from "./todolist";
import Utils from "./utils";

export default class Storage {
  constructor() {
    // Initialize the properties by loading data from local storage or using defaults
    this._scheduleLists = this.setScheduleLists();
    this._yourLists = this.loadFromLocalStorage("yourLists") || [];
    this._completed = this.loadFromLocalStorage("completed") || [];
  }

  get scheduleLists() {
    return this._scheduleLists;
  }

  get yourLists() {
    return this._yourLists;
  }

  get completed() {
    return this._completed;
  }

  setScheduleLists() {
    const scheduleLists = [
      new TodoList("All Tasks"),
      new TodoList("Today"),
      new TodoList("This week"),
    ];

    localStorage.setItem("scheduleLists", JSON.stringify(scheduleLists));
  }

  getScheduleLists() {
    const storedScheduleLists = localStorage.getItem("scheduleLists");
    if (storedScheduleLists) {
      return JSON.parse(storedScheduleLists);
    } else {
      return [];
    }
  }

  loadFromLocalStorage(key) {
    try {
      const data = localStorage.getItem(key);
      return JSON.parse(data);
    } catch (error) {
      console.error(
        `Error loading ${key} from local storage: ${error.message}`
      );
      return null;
    }
  }

  saveToLocalStorage(key, data) {
    try {
      let existingData = JSON.parse(localStorage.getItem(key));

      if (!Array.isArray(existingData)) {
        existingData = [];
      }

      // Check for duplicates and only add unique items
      data.forEach((item) => {
        if (!existingData.includes(item)) {
          existingData.push(item);
        }
      });

      localStorage.setItem(key, JSON.stringify(existingData));
    } catch (error) {
      console.error(`Error saving ${key} to local storage: ${error.message}`);
    }
  }

  addToScheduleLists(list) {
    this._scheduleLists.push(list);
  }

  addToYourLists(list) {
    if (!this._yourLists.includes(list)) {
      this._yourLists.push(list);
      this.saveToLocalStorage("yourLists", [list]); // Wrap list in an array before saving
    }
  }

  getAllTasks() {
    const scheduleLists = JSON.parse(localStorage.getItem("scheduleLists"));
    const yourLists = JSON.parse(localStorage.getItem("yourLists"));

    if (!scheduleLists || !yourLists) {
      return [];
    }

    const allTasksList = scheduleLists.find(
      (list) => list._name === "All Tasks"
    );

    if (!allTasksList) {
      return [];
    }

    const combinedTasks = [...allTasksList._tasks]; // Start with tasks from "All Tasks" list

    yourLists.forEach((list) => {
      if (list._tasks && Array.isArray(list._tasks)) {
        combinedTasks.push(...list._tasks);
      }
    });

    return combinedTasks;
  }

  getTodayTasks() {
    const allTasks = this.getAllTasks();
    if (!allTasks || allTasks.length === 0) {
      return [];
    }

    const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format

    const todayTasks = allTasks.filter((task) => {
      return task._dueDate === today;
    });

    return todayTasks;
  }

  getThisWeekTasks() {
    const allTasks = this.getAllTasks();
    if (!allTasks || allTasks.length === 0) {
      return [];
    }

    const today = new Date();

    // Calculate the start date of the current week (Sunday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    // Calculate the end date of the current week (Saturday)
    const endOfWeek = new Date(today);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    // Convert start and end dates to ISO date strings in YYYY-MM-DD format
    const startDateString = startOfWeek.toISOString().slice(0, 10);
    const endDateString = endOfWeek.toISOString().slice(0, 10);

    // Filter tasks that have due dates within the current week
    const thisWeekTasks = allTasks.filter((task) => {
      const taskDueDate = task._dueDate;
      return taskDueDate >= startDateString && taskDueDate <= endDateString;
    });

    return thisWeekTasks;
  }
}
