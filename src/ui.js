import Utils from "./utils";
import EventListeners from "./eventListeners";
import { format } from "date-fns";
import { is } from "date-fns/locale";

export default class UI {
  constructor(storage) {
    this.storage = storage;
    this.utils = new Utils(storage);
  }

  initUI() {
    this.displaySideBar();
    this.displayAddListForm();
    this.displayTasks(0, "scheduleLists");
    this.displayHeader("All Tasks");
    this.initActiveNav();
  }

  addEventListeners() {
    const eventListeners = new EventListeners(this.storage);
    eventListeners.handleActiveNav();
    eventListeners.toggleDropDownMenu();
  }

  //DISPLAY METHODS
  displayTasks(index, parent) {
    const toDoList = JSON.parse(localStorage.getItem(parent));
    //Check if the toDoList exist
    if (!toDoList) return;

    const selectedToDoList = toDoList[index];

    let tasks;

    if (parent === "scheduleLists" && index === 0) {
      tasks = this.storage.getAllTasks();
      this.displayTasksFromArray(tasks);
      return;
    }

    if (parent === "scheduleLists" && index === 1) {
      tasks = this.storage.getTodayTasks();
      this.displayTasksFromArray(tasks);
      return;
    }

    if (parent === "scheduleLists" && index === 2) {
      tasks = this.storage.getThisWeekTasks();
      this.displayTasksFromArray(tasks);
      return;
    }

    tasks = selectedToDoList ? selectedToDoList._tasks : [];

    this.displayTasksFromArray(tasks);
  }

  reloadPage(index, parent) {
    this.displayTasks(index, parent);
    this.displaySideBar();
    this.addEventListeners();
  }

  displayTasksFromArray(tasks) {
    const tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.innerHTML = "";

    tasks.forEach((task, index) => {
      const formattedDate = this.utils.formatDate(task._dueDate);

      const taskElement = this.createTask(
        task._title,
        task._description,
        formattedDate,
        task._priority,
        task._isCheck,
        task._id,
        task._parent
      );
      tasksContainer.append(taskElement);
    });
  }

  displayHeader(listName) {
    const mainContainer = document.querySelector(".main-wrapper");
    const tasksContainer = document.querySelector(".tasks-container");
    const mainTitle = document.querySelector(".main-title");

    mainTitle.innerHTML = "";

    const userLocal = localStorage.getItem("user");

    let userName;

    if (userLocal) {
      userName = userLocal;
    } else {
      userName = "User";
    }

    const currentDate = new Date();
    const formattedMonth = format(currentDate, "MMM");
    const formattedDay = format(currentDate, "dd");

    const header = this.createMainHeader(
      userName,
      listName,
      formattedMonth,
      formattedDay
    );

    mainTitle.appendChild(header);
    mainContainer.insertBefore(mainTitle, tasksContainer);
  }

  displaySideBar() {
    const scheduleContainer = document.querySelector(".schedule-tasks");
    const yourListContainer = document.querySelector(".your-lists-tasks");
    const completedContainer = document.querySelector(".completed-lists");

    const scheduleList = this.createSectionNav("scheduleLists");
    const yourList = this.createSectionNav("yourLists");
    const completedList = this.createSectionNav("completed");

    this.updateContainerContent(scheduleContainer, scheduleList);
    this.updateContainerContent(yourListContainer, yourList);
    this.updateContainerContent(completedContainer, completedList);

    this.addEventListeners();
  }

  updateContainerContent(container, items) {
    if (items != null) {
      container.innerHTML = "";
      items.forEach((item) => {
        container.appendChild(item);
      });
    }
  }

  displayAddListForm() {
    const yourListSec = document.querySelector(".your-list");
    yourListSec.appendChild(new UI().createAddListForm());
  }

  initActiveNav() {
    const allTasksNav = document.querySelector(".nav-list"); //First nav-list which is "All Tasks"
    allTasksNav.classList.add("active");
  }

  //CREATE SECTIONS
  createMainHeader(userName, listTitle, month, day) {
    const mainTitleWrapper = document.createElement("div");
    mainTitleWrapper.classList.add("main-title-wrapper");

    const mainTitleLeft = document.createElement("div");
    mainTitleLeft.classList.add("main-title-left");

    const greetDiv = document.createElement("div");
    greetDiv.classList.add("greet");
    greetDiv.textContent = "Hello, ";

    const userNameSpan = document.createElement("span");
    userNameSpan.classList = "header-user-name";
    userNameSpan.textContent = `${userName}!`;

    const editIcon = document.createElement("span");
    editIcon.classList.add("edit-user-icon");

    editIcon.innerHTML = `<i class="fa-regular fa-pen-to-square edit-user-icon"></i>`;
    greetDiv.append(userNameSpan, editIcon);

    const mainTitleH1 = document.createElement("h1");
    mainTitleH1.id = "main-title";
    mainTitleH1.classList.add("main-title");
    mainTitleH1.textContent = listTitle;
    mainTitleLeft.appendChild(greetDiv);
    mainTitleLeft.appendChild(mainTitleH1);

    const currentDateDiv = document.createElement("div");
    currentDateDiv.classList.add("current-date");

    const currentMonthP = document.createElement("p");
    currentMonthP.id = "currentMonth";
    currentMonthP.classList.add("month-today");
    currentMonthP.textContent = month;

    const currentDayP = document.createElement("p");
    currentDayP.id = "currentDay";
    currentDayP.classList.add("day-today");
    currentDayP.textContent = day;

    currentDateDiv.appendChild(currentMonthP);
    currentDateDiv.appendChild(currentDayP);

    mainTitleWrapper.appendChild(mainTitleLeft);
    mainTitleWrapper.appendChild(currentDateDiv);

    return mainTitleWrapper;
  }

  createTask(title, description, dueDate, priority, isCheck, id, parent) {
    //Task Container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task", priority);
    taskContainer.setAttribute("data-index", id);
    taskContainer.setAttribute("data-parent", parent);

    //CheckBox Container
    const checkBoxContainer = document.createElement("div");
    checkBoxContainer.classList.add("check-box-container");

    //CheckBox Content
    const checkBox = document.createElement("div");

    if (isCheck) {
      checkBox.classList.add("check-box", "check");
    } else {
      checkBox.classList.add("check-box");
    }

    checkBoxContainer.appendChild(checkBox);

    //Task content container
    const taskContent = document.createElement("div");
    taskContent.classList.add("task__content");

    //Task top container
    const taskTop = document.createElement("div");
    taskTop.classList.add("task__top");

    //Task Title
    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task__title");
    taskTitle.textContent = title;

    //Task DueDate
    const taskDueDate = document.createElement("div");
    taskDueDate.classList.add("task__duedate");
    taskDueDate.textContent = dueDate;

    taskTop.append(taskTitle, taskDueDate);

    //Task Description
    const taskDescription = document.createElement("div");
    taskDescription.classList.add("task__description");
    taskDescription.textContent = description;

    const taskIcons = this.createTaskIcons();

    taskContent.append(taskTop, taskDescription, taskIcons);

    taskContainer.append(checkBoxContainer, taskContent);

    return taskContainer;
  }

  createTaskIcons() {
    const taskIconsDiv = document.createElement("div");
    taskIconsDiv.classList.add("task__icons");

    const ulElement = document.createElement("ul");

    const li1 = document.createElement("li");
    const i1 = document.createElement("i");
    i1.classList.add("fa-regular", "fa-pen-to-square");
    li1.appendChild(i1);

    const li2 = document.createElement("li");
    const i2 = document.createElement("i");
    i2.classList.add("fa-regular", "fa-flag");
    li2.appendChild(i2);

    const li3 = document.createElement("li");
    const i3 = document.createElement("i");
    i3.classList.add("fa-regular", "fa-trash-can");
    li3.appendChild(i3);

    const li4 = document.createElement("li");
    li4.classList.add("menu-btn");
    const i4 = document.createElement("i");
    i4.classList.add("fa-solid", "fa-ellipsis-vertical");
    li4.appendChild(i4);

    ulElement.append(li1, li2, li3, li4);

    taskIconsDiv.appendChild(ulElement);

    return taskIconsDiv;
  }

  createSectionNav(parent) {
    const parentLists = JSON.parse(localStorage.getItem(parent));

    if (parentLists === null) return parentLists;

    const listElements = [];

    parentLists.forEach((list, index) => {
      const listElement = this.createListNav(
        list._name,
        list._tasks.length,
        index
      );
      listElements.push(listElement);
    });

    return listElements;
  }

  createListNav(name, quantity, index) {
    const taskNav = document.createElement("li");
    taskNav.classList.add("nav-list");
    taskNav.setAttribute("data-index", index);

    //If quantity is zero don't display
    if (!quantity) {
      quantity = " ";
    }

    const pElement = document.createElement("p");
    pElement.classList.add("tasks-name");
    pElement.textContent = name;

    const taskQuantityContainer = document.createElement("div");
    taskQuantityContainer.classList.add("task-qty-container");

    const spanElement = document.createElement("span");
    spanElement.classList.add("task-qty");
    spanElement.textContent = quantity;

    taskQuantityContainer.appendChild(spanElement);

    taskNav.append(pElement, taskQuantityContainer);

    return taskNav;
  }

  createAddListForm() {
    const listFormContainer = document.createElement("div");
    listFormContainer.classList.add("add-list-form", "toggle");

    const listNameWrapper = document.createElement("div");
    listNameWrapper.classList.add("list-name-wrapper");

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "listName");
    nameLabel.textContent = "List Name";

    const inputEl = document.createElement("input");
    inputEl.id = "listName";
    const maxLength = 15;
    inputEl.maxLength = maxLength;
    inputEl.setAttribute("type", "text");

    listNameWrapper.appendChild(nameLabel);
    listNameWrapper.appendChild(inputEl);

    const addButton = document.createElement("button");
    addButton.id = "add-list-btn";
    const iElement = document.createElement("i");
    iElement.classList.add("fa-solid", "fa-plus");

    addButton.appendChild(iElement);

    listFormContainer.appendChild(listNameWrapper);
    listFormContainer.appendChild(addButton);

    return listFormContainer;
  }

  createDropDownMenu() {
    const dropDownContainer = document.createElement("div");
    dropDownContainer.classList = "drop-down";

    const ulElement = document.createElement("ul");

    const list1 = document.createElement("li");
    list1.id = "editDropDown";
    list1.textContent = "Edit";

    const list2 = document.createElement("li");
    list2.id = "moveDropDown";
    list2.textContent = "Move to other list";

    const list3 = document.createElement("li");
    list3.id = "deletDropDown";
    list3.textContent = "Delete";
    list3.classList = "delete__drop-down";

    ulElement.appendChild(list1);
    ulElement.appendChild(list2);
    ulElement.appendChild(list3);

    dropDownContainer.appendChild(ulElement);

    return dropDownContainer;
  }
}
