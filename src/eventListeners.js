import UI from "./ui";
import Task from "./task";
import Utils from "./utils";

export default class EventListeners {
  constructor(storage) {
    this.storage = storage; // Store the storage instance
    this.ui = new UI(this.storage);
    this.utils = new Utils(this.storage);
  }

  initToggleButtons() {
    this.handlePriorityInput();
    this.handleAddTaskForm();
    this.handleAddTaskButton();

    this.toggleSideBar();
    this.toggleDropDownMenu();
    this.toggleAddListForm();
    this.handleActiveNav();
    this.toggleDeleteModal();
    this.toggleInputDate();
    this.toggleUserNameModal();
  }

  handleAddTaskButton() {
    const form = document.querySelector(".add-task-form");
    const addTask = document.querySelector(".add-task");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = document.querySelector("#inputTitle").value;
      const description = document.querySelector("#inputDescription").value;
      const dueDate = document.querySelector("#inputDuedate").value;

      //Get priority

      const priority = this.utils.getPriority();

      //Get parent (Schedule,  Your Lists, Completed)
      const parent = this.utils.getActiveParent();

      //Get active
      const activeElement = document.querySelector(".nav-list.active");
      const index = activeElement.getAttribute("data-index");

      //Add task on list
      const list = JSON.parse(localStorage.getItem(parent));

      const task = new Task(title, description, dueDate, priority);

      list[index]._tasks.push(task);
      localStorage.setItem(parent, JSON.stringify(list));

      //Display tasks after submit
      this.ui.displayTasks(index, parent);
      this.ui.displaySideBar();
      this.handleActiveNav();

      // Close form after submit
      form.classList.add("toggle");
      addTask.classList.add("toggle");
      this.utils.setActiveNav(parent, index);
      form.reset();
    });
  }

  handleActiveNav() {
    const navLists = document.querySelectorAll(".nav-list");

    navLists.forEach((navList) => {
      navList.addEventListener("click", () => {
        //Remove nav that has active list
        this.utils.resetActive(navLists);
        navList.classList.add("active");

        const parent = this.utils.getActiveParent();
        const index = parseInt(navList.getAttribute("data-index"));

        const listName = JSON.parse(localStorage.getItem(parent))[index]._name;

        this.ui.displayHeader(listName);
        this.ui.displayTasks(index, parent);
        this.toggleDropDownMenu();
      });
    });
  }

  handlePriorityInput() {
    const priorityButtons = document.querySelectorAll(".priority-btn");

    priorityButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove "active" class from all priority buttons
        this.utils.resetActive(priorityButtons);

        // Add "active" class to the clicked button
        button.classList.add("active");
      });
    });
  }

  handleAddTaskForm() {
    const addTask = document.querySelector(".add-task");
    const addTaskCircle = document.querySelector(".add-task-btn-circle");
    const cancelBtn = document.querySelector(".cancel-btn");
    const inputTitle = document.getElementById("inputTitle");

    addTask.addEventListener("click", () => {
      this.toggleForm();
      //remove "add task" when click
      addTask.classList.remove("toggle");
      this.utils.inputFocus(inputTitle);
    });

    addTaskCircle.addEventListener("click", () => {
      this.toggleForm();
      addTask.classList.toggle("toggle");
      this.utils.inputFocus(inputTitle);
    });

    cancelBtn.addEventListener("click", () => {
      this.toggleForm();
      //add "add task" when click
      addTask.classList.add("toggle");
      this.utils.inputFocus(inputTitle);
    });
  }

  toggleForm() {
    const addTaskForm = document.querySelector(".add-task-form");
    addTaskForm.classList.toggle("toggle");
  }

  toggleInputDate() {
    const dueDateInputContainer = document.querySelector(
      ".input-duedate-container"
    );
    const dueDateInput =
      dueDateInputContainer.querySelector("input[type='date']");

    dueDateInputContainer.addEventListener("click", () => {});
  }

  toggleUserNameModal() {
    const editUserButton = document.querySelector(".edit-user-icon");
    const modalUserName = document.querySelector(".modal-user-name");
    const modalInput = document.querySelector(".modal-user-input");
    const submitOption = document.querySelector(".submit__option");

    let userNameEl = document.querySelector(".header-user-name");

    //Remove exclamation mark
    let userName = userNameEl.textContent.replace(/!/g, "");

    let isPopUpVisible = false;

    editUserButton.addEventListener("click", (event) => {
      event.stopPropagation();
      modalUserName.classList.toggle("toggle");
      modalInput.value = userName;
      modalInput.select();

      isPopUpVisible = !isPopUpVisible;
    });

    submitOption.addEventListener("click", () => {
      userName = modalInput.value;

      userNameEl.textContent = `${userName}!`;
      localStorage.setItem("user", userName);

      modalUserName.classList.remove("toggle");
      isPopUpVisible = false;
    });

    const cancelOption = document.querySelector(".cancel__user");
    cancelOption.addEventListener("click", () => {
      modalUserName.classList.remove("toggle");
      isPopUpVisible = false;
    });
  }

  toggleDeleteModal() {
    const modal = document.querySelector(".modal-delete");
    const deleteListButton = document.querySelector(".delete-list-btn");
    const deleteConfirmButton = document.querySelector(
      ".modal-delete .yes__option"
    );

    let isPopUpVisible = false;

    deleteListButton.addEventListener("click", (event) => {
      event.stopPropagation();
      modal.classList.toggle("toggle");
      isPopUpVisible = !isPopUpVisible;
    });

    deleteConfirmButton.addEventListener("click", () => {
      const key = "yourLists";
      const index = this.utils.getActiveNav();
      const storedData = localStorage.getItem(key);

      if (yourLists) {
        const yourLists = JSON.parse(storedData);

        // Remove the specific index from the object
        yourLists.splice(index, 1);

        // Convert the updated object back to a string
        const updatedData = JSON.stringify(yourLists);

        // Store the updated string in local storage
        localStorage.setItem(key, updatedData);

        this.ui.displaySideBar();
        this.ui.displayTasks(0, "scheduleLists");
        this.ui.displayHeader("All Tasks");

        const scheduleListEl = document.querySelector(".schedule-tasks");
        const allTasksEl = scheduleListEl.querySelector(
          '.nav-list[data-index="0"]'
        );

        allTasksEl.classList.add("active");

        modal.classList.remove("toggle");
        isPopUpVisible = false;
      }
    });

    const cancelOption = document.querySelector(".cancel__delete");
    cancelOption.addEventListener("click", () => {
      modal.classList.remove("toggle");
      isPopUpVisible = false;
    });
  }

  toggleAddListForm() {
    const addListButton = document.querySelector(".add-list-nav");
    const addListForm = document.querySelector(".add-list-form");
    const listName = document.getElementById("listName");

    addListButton.addEventListener("click", () => {
      addListForm.classList.toggle("toggle");
      this.utils.inputFocus(listName);
    });
  }

  toggleSideBar() {
    const sideBarToggle = document.getElementById("sideBarToggle");
    const sideBarElement = document.getElementById("sideBar");
    const mainContainer = document.querySelector(".container");

    sideBarToggle.addEventListener("click", () => {
      sideBarElement.classList.toggle("side-bar-toggle");
      sideBarToggle.classList.toggle("fa-bars-toggle");
      mainContainer.classList.toggle("container-center");
    });
  }

  toggleDropDownMenu() {
    const menuButtons = document.querySelectorAll(".menu-btn");
    const dropDownElement = this.ui.createDropDownMenu();

    let isDropDownVisible = false;

    function toggleDropDown(task, event) {
      event.stopPropagation();

      if (isDropDownVisible) {
        dropDownElement.classList.add("hide-drop-down");
      } else {
        task.appendChild(dropDownElement);
        dropDownElement.classList.remove("hide-drop-down");
      }

      isDropDownVisible = !isDropDownVisible;
    }

    menuButtons.forEach((menuBtn) => {
      menuBtn.addEventListener("click", (event) => {
        const task = event.target.closest(".task");
        if (task) {
          toggleDropDown(task, event);
        }
      });
    });

    document.body.addEventListener("click", () => {
      dropDownElement.classList.add("hide-drop-down");
      isDropDownVisible = false;
    });
  }
}
