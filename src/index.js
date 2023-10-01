import UI from "./ui";
import Utils from "./utils";
import EventListeners from "./eventListeners";
import Storage from "./storage";

const storage = new Storage();

const ui = new UI(storage);
ui.initUI();

const eventListeners = new EventListeners(storage);
eventListeners.initToggleButtons();

const utils = new Utils(storage);
utils.initUtils();
