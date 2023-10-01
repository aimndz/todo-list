import UI from "./ui";
import EventListeners from "./eventListeners";
import TodoList from "./todolist";
import { parseISO, format, isToday } from "date-fns";

export default class Utils {
  constructor(storage) {
    this.storage = storage;
  }

  initUtils() {
    this.addList(new UI(this.storage));
  }

  addList(ui) {
    const addListButton = document.getElementById("add-list-btn");
    const addListForm = document.querySelector(".add-list-form");

    addListButton.addEventListener("click", () => {
      this.getListInput(ui);

      //Close Form when submit
      addListForm.classList.add("toggle");

      new EventListeners(this.storage).handleActiveNav();
    });
  }

  getListInput(ui) {
    const inputElement = document.getElementById("listName");
    const value = inputElement.value;

    if (value) {
      this.storage.addToYourLists(new TodoList(value));
      inputElement.value = "";

      ui.displaySideBar();
    }
  }

  resetActive(elements) {
    elements.forEach((element) => element.classList.remove("active"));
  }

  getActiveParent() {
    const sideBar = document.getElementById("sideBar");
    const navList = sideBar.querySelector(".nav-list.active");

    return navList.parentNode.id;
  }

  getActiveNav() {
    const active = document.querySelector(".nav-list.active");
    const dataIndex = active.getAttribute("data-index");

    return dataIndex;
  }

  getPriority() {
    //Get Priority (low, medium, high)
    const priorityElement = document.querySelector(
      ".priority-btn.active"
    ).textContent;

    //Format Priority (low-priority, medium-priority, high-priority)
    const priority = `${priorityElement.toLowerCase()}-priority`;

    return priority;
  }

  inputFocus(input) {
    input.focus();
  }

  setActiveNav(parent, index) {
    const parentEl = document.getElementById(parent);
    if (parentEl) {
      const listItems = parentEl.querySelectorAll("li");

      if (index >= 0 && index < listItems.length) {
        listItems[index].classList.add("active");
      }
    }
  }

  formatDate(date) {
    if (isToday(new Date(date))) {
      return "Today";
    } else {
      const parsedDate = parseISO(date);
      return format(parsedDate, "MMM dd");
    }
  }
}
