(()=>{"use strict";class t{constructor(t,e,n,a){this._title=t,this._description=e,this._dueDate=n,this._priority=a}get title(){return this._title}get description(){return this._description}get dueDate(){return this._dueDate}get priority(){return this._priority}set title(t){this._title=t}set description(t){this._description=t}set dueDate(t){this._dueDate=t}set priority(t){this._priority=t}}class e{constructor(t){this.storage=t,this.ui=new rt(this.storage),this.utils=new a(this.storage)}initToggleButtons(){this.handlePriorityInput(),this.handleAddTaskForm(),this.handleAddTaskButton(),this.toggleSideBar(),this.toggleDropDownMenu(),this.toggleAddListForm(),this.handleActiveNav(),this.toggleDeleteModal(),this.toggleInputDate(),this.toggleUserNameModal()}handleAddTaskButton(){const e=document.querySelector(".add-task-form"),n=document.querySelector(".add-task");e.addEventListener("submit",(a=>{a.preventDefault();const r=document.querySelector("#inputTitle").value,i=document.querySelector("#inputDescription").value,o=document.querySelector("#inputDuedate").value,s=this.utils.getPriority(),d=this.utils.getActiveParent(),u=document.querySelector(".nav-list.active").getAttribute("data-index"),l=JSON.parse(localStorage.getItem(d)),c=new t(r,i,o,s);l[u]._tasks.push(c),localStorage.setItem(d,JSON.stringify(l)),this.ui.displayTasks(u,d),this.ui.displaySideBar(),this.handleActiveNav(),e.classList.add("toggle"),n.classList.add("toggle"),this.utils.setActiveNav(d,u),e.reset()}))}handleActiveNav(){const t=document.querySelectorAll(".nav-list");t.forEach((e=>{e.addEventListener("click",(()=>{this.utils.resetActive(t),e.classList.add("active");const n=this.utils.getActiveParent(),a=parseInt(e.getAttribute("data-index")),r=JSON.parse(localStorage.getItem(n))[a]._name;this.ui.displayHeader(r),this.ui.displayTasks(a,n),this.toggleDropDownMenu()}))}))}handlePriorityInput(){const t=document.querySelectorAll(".priority-btn");t.forEach((e=>{e.addEventListener("click",(()=>{this.utils.resetActive(t),e.classList.add("active")}))}))}handleAddTaskForm(){const t=document.querySelector(".add-task"),e=document.querySelector(".add-task-btn-circle"),n=document.querySelector(".cancel-btn"),a=document.getElementById("inputTitle");t.addEventListener("click",(()=>{this.toggleForm(),t.classList.remove("toggle"),this.utils.inputFocus(a)})),e.addEventListener("click",(()=>{this.toggleForm(),t.classList.toggle("toggle"),this.utils.inputFocus(a)})),n.addEventListener("click",(()=>{this.toggleForm(),t.classList.add("toggle"),this.utils.inputFocus(a)}))}toggleForm(){document.querySelector(".add-task-form").classList.toggle("toggle")}toggleInputDate(){const t=document.querySelector(".input-duedate-container");t.querySelector("input[type='date']"),t.addEventListener("click",(()=>{}))}toggleUserNameModal(){const t=document.querySelector(".edit-user-icon"),e=document.querySelector(".modal-user-name"),n=document.querySelector(".modal-user-input"),a=document.querySelector(".submit__option");let r=document.querySelector(".header-user-name"),i=r.textContent.replace(/!/g,""),o=!1;t.addEventListener("click",(t=>{t.stopPropagation(),e.classList.toggle("toggle"),n.value=i,n.select(),o=!o})),a.addEventListener("click",(()=>{i=n.value,r.textContent=`${i}!`,localStorage.setItem("user",i),e.classList.remove("toggle"),o=!1})),document.querySelector(".cancel__user").addEventListener("click",(()=>{e.classList.remove("toggle"),o=!1}))}toggleDeleteModal(){const t=document.querySelector(".modal-delete"),e=document.querySelector(".delete-list-btn"),n=document.querySelector(".modal-delete .yes__option");let a=!1;e.addEventListener("click",(e=>{e.stopPropagation(),t.classList.toggle("toggle"),a=!a})),n.addEventListener("click",(()=>{const e="yourLists",n=this.utils.getActiveNav(),r=localStorage.getItem(e);if(yourLists){const i=JSON.parse(r);i.splice(n,1);const o=JSON.stringify(i);localStorage.setItem(e,o),this.ui.displaySideBar(),this.ui.displayTasks(0,"scheduleLists"),this.ui.displayHeader("All Tasks"),document.querySelector(".schedule-tasks").querySelector('.nav-list[data-index="0"]').classList.add("active"),t.classList.remove("toggle"),a=!1}})),document.querySelector(".cancel__delete").addEventListener("click",(()=>{t.classList.remove("toggle"),a=!1}))}toggleAddListForm(){const t=document.querySelector(".add-list-nav"),e=document.querySelector(".add-list-form"),n=document.getElementById("listName");t.addEventListener("click",(()=>{e.classList.toggle("toggle"),this.utils.inputFocus(n)}))}toggleSideBar(){const t=document.getElementById("sideBarToggle"),e=document.getElementById("sideBar"),n=document.querySelector(".container");t.addEventListener("click",(()=>{e.classList.toggle("side-bar-toggle"),t.classList.toggle("fa-bars-toggle"),n.classList.toggle("container-center")}))}toggleDropDownMenu(){const t=document.querySelectorAll(".menu-btn"),e=this.ui.createDropDownMenu();let n=!1;t.forEach((t=>{t.addEventListener("click",(t=>{const a=t.target.closest(".task");a&&function(t,a){a.stopPropagation(),n?e.classList.add("hide-drop-down"):(t.appendChild(e),e.classList.remove("hide-drop-down")),n=!n}(a,t)}))})),document.body.addEventListener("click",(()=>{e.classList.add("hide-drop-down"),n=!1}))}}class n{constructor(t){this._name=t,this._tasks=[]}get name(){return this._name}get tasks(){return this._tasks}addTask(t){this._tasks.push(t)}getSize(){return this._tasks.length}}class a{constructor(t){this.storage=t}initUtils(){this.addList(new rt(this.storage))}addList(t){const n=document.getElementById("add-list-btn"),a=document.querySelector(".add-list-form");n.addEventListener("click",(()=>{this.getListInput(t),a.classList.add("toggle"),new e(this.storage).handleActiveNav()}))}getListInput(t){const e=document.getElementById("listName"),a=e.value;a&&(this.storage.addToYourLists(new n(a)),e.value="",t.displaySideBar())}resetActive(t){t.forEach((t=>t.classList.remove("active")))}getActiveParent(){return document.getElementById("sideBar").querySelector(".nav-list.active").parentNode.id}getActiveNav(){return document.querySelector(".nav-list.active").getAttribute("data-index")}getPriority(){return`${document.querySelector(".priority-btn.active").textContent.toLowerCase()}-priority`}inputFocus(t){t.focus()}setActiveNav(t,e){const n=document.getElementById(t);if(n){const t=n.querySelectorAll("li");e>=0&&e<t.length&&(t[e].classList.add("active"),console.log(t[e]))}}}Math.pow(10,8);var r=36e5;function i(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function o(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var s={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},d=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,u=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,l=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(t){return t?parseInt(t):1}function m(t){return t&&parseFloat(t.replace(",","."))||0}var h=[31,null,31,30,31,30,31,31,30,31,30,31];function g(t){return t%400==0||t%4==0&&t%100!=0}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function v(t){i(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===f(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function p(t){i(1,arguments);var e=v(t),n=e.getUTCDay(),a=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function y(t){i(1,arguments);var e=v(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=p(a),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=p(o);return e.getTime()>=r.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}var w={};function b(){return w}function S(t,e){var n,a,r,s,d,u,l,c;i(1,arguments);var m=b(),h=o(null!==(n=null!==(a=null!==(r=null!==(s=null==e?void 0:e.weekStartsOn)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(u=d.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==r?r:m.weekStartsOn)&&void 0!==a?a:null===(l=m.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=v(t),f=g.getUTCDay(),p=(f<h?7:0)+f-h;return g.setUTCDate(g.getUTCDate()-p),g.setUTCHours(0,0,0,0),g}function T(t,e){var n,a,r,s,d,u,l,c;i(1,arguments);var m=v(t),h=m.getUTCFullYear(),g=b(),f=o(null!==(n=null!==(a=null!==(r=null!==(s=null==e?void 0:e.firstWeekContainsDate)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(u=d.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==r?r:g.firstWeekContainsDate)&&void 0!==a?a:null===(l=g.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setUTCFullYear(h+1,0,f),p.setUTCHours(0,0,0,0);var y=S(p,e),w=new Date(0);w.setUTCFullYear(h,0,f),w.setUTCHours(0,0,0,0);var T=S(w,e);return m.getTime()>=y.getTime()?h+1:m.getTime()>=T.getTime()?h:h-1}function C(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const L=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return C("yy"===e?a%100:a,e.length)},k=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):C(n+1,2)},D=function(t,e){return C(t.getUTCDate(),e.length)},E=function(t,e){return C(t.getUTCHours()%12||12,e.length)},M=function(t,e){return C(t.getUTCHours(),e.length)},N=function(t,e){return C(t.getUTCMinutes(),e.length)},x=function(t,e){return C(t.getUTCSeconds(),e.length)},q=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return C(Math.floor(a*Math.pow(10,n-3)),e.length)};var U={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return L(t,e)},Y:function(t,e,n,a){var r=T(t,a),i=r>0?r:1-r;return"YY"===e?C(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):C(i,e.length)},R:function(t,e){return C(y(t),e.length)},u:function(t,e){return C(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return C(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return C(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return k(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return C(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var r=function(t,e){i(1,arguments);var n=v(t),a=S(n,e).getTime()-function(t,e){var n,a,r,s,d,u,l,c;i(1,arguments);var m=b(),h=o(null!==(n=null!==(a=null!==(r=null!==(s=null==e?void 0:e.firstWeekContainsDate)&&void 0!==s?s:null==e||null===(d=e.locale)||void 0===d||null===(u=d.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==r?r:m.firstWeekContainsDate)&&void 0!==a?a:null===(l=m.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),g=T(t,e),f=new Date(0);return f.setUTCFullYear(g,0,h),f.setUTCHours(0,0,0,0),S(f,e)}(n,e).getTime();return Math.round(a/6048e5)+1}(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):C(r,e.length)},I:function(t,e,n){var a=function(t){i(1,arguments);var e=v(t),n=p(e).getTime()-function(t){i(1,arguments);var e=y(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),p(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):C(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):D(t,e)},D:function(t,e,n){var a=function(t){i(1,arguments);var e=v(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=n-e.getTime();return Math.floor(a/864e5)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):C(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return C(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return C(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return C(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return E(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):M(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):C(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):C(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):N(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):x(t,e)},S:function(t,e){return q(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return P(r);case"XXXX":case"XX":return A(r);default:return A(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return P(r);case"xxxx":case"xx":return A(r);default:return A(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+_(r,":");default:return"GMT"+A(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+_(r,":");default:return"GMT"+A(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return C(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return C((a._originalDate||t).getTime(),e.length)}};function _(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+C(i,2)}function P(t,e){return t%60==0?(t>0?"-":"+")+C(Math.abs(t)/60,2):A(t,e)}function A(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+C(Math.floor(r/60),2)+n+C(r%60,2)}const F=U;var W=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},O=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Y={p:O,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return W(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",W(r,e)).replace("{{time}}",O(i,e))}};const I=Y;var B=["D","DD"],H=["YY","YYYY"];function z(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var j={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function J(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var Q,G={date:J({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:J({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:J({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},R={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function X(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):r;a=t.formattingValues[i]||t.formattingValues[r]}else{var o=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[s]||t.values[o]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function $(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,s=i[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(d);return o=t.valueCallback?t.valueCallback(u):u,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(s.length)}}}const Z={code:"en-US",formatDistance:function(t,e,n){var a,r=j[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:G,formatRelative:function(t,e,n,a){return R[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:X({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:X({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:X({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:X({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:X({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Q={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Q.matchPattern);if(!n)return null;var a=n[0],r=t.match(Q.parsePattern);if(!r)return null;var i=Q.valueCallback?Q.valueCallback(r[0]):r[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(a.length)}}),era:$({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:$({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:$({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:$({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:$({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var V=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tt=/^'([^]*?)'?$/,et=/''/g,nt=/[a-zA-Z]/;function at(t,e,n){var a,r,s,d,u,l,c,m,h,g,p,y,w,S,T,C,L,k;i(2,arguments);var D=String(e),E=b(),M=null!==(a=null!==(r=null==n?void 0:n.locale)&&void 0!==r?r:E.locale)&&void 0!==a?a:Z,N=o(null!==(s=null!==(d=null!==(u=null!==(l=null==n?void 0:n.firstWeekContainsDate)&&void 0!==l?l:null==n||null===(c=n.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==u?u:E.firstWeekContainsDate)&&void 0!==d?d:null===(h=E.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==s?s:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=o(null!==(p=null!==(y=null!==(w=null!==(S=null==n?void 0:n.weekStartsOn)&&void 0!==S?S:null==n||null===(T=n.locale)||void 0===T||null===(C=T.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==w?w:E.weekStartsOn)&&void 0!==y?y:null===(L=E.locale)||void 0===L||null===(k=L.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==p?p:0);if(!(x>=0&&x<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!M.localize)throw new RangeError("locale must contain localize property");if(!M.formatLong)throw new RangeError("locale must contain formatLong property");var q=v(t);if(!function(t){if(i(1,arguments),!function(t){return i(1,arguments),t instanceof Date||"object"===f(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=v(t);return!isNaN(Number(e))}(q))throw new RangeError("Invalid time value");var U=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(q),_=function(t,e){return i(2,arguments),function(t,e){i(2,arguments);var n=v(t).getTime(),a=o(e);return new Date(n+a)}(t,-o(e))}(q,U),P={firstWeekContainsDate:N,weekStartsOn:x,locale:M,_originalDate:q};return D.match(K).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,I[e])(t,M.formatLong):t})).join("").match(V).map((function(a){if("''"===a)return"'";var r,i,o=a[0];if("'"===o)return(i=(r=a).match(tt))?i[1].replace(et,"'"):r;var s,d=F[o];if(d)return null!=n&&n.useAdditionalWeekYearTokens||(s=a,-1===H.indexOf(s))||z(a,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==B.indexOf(t)}(a)||z(a,e,String(t)),d(_,a,M.localize,P);if(o.match(nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return a})).join("")}class rt{constructor(t){this.storage=t,this.utils=new a(t)}initUI(){this.displaySideBar(),this.displayAddListForm(),this.displayTasks(0,"scheduleLists"),this.displayHeader("All Tasks"),this.initActiveNav()}displayTasks(t,e){const n=JSON.parse(localStorage.getItem(e));if(!n)return;const a=n[t];let r;if("scheduleLists"===e&&0===t)return r=this.storage.getAllTasks(),void this.displayTasksFromArray(r);r=a?a._tasks:[],this.displayTasksFromArray(r)}displayTasksFromArray(t){const e=document.querySelector(".tasks-container");e.innerHTML="",t.forEach((t=>{const n=at(function(t,e){var n;i(1,arguments);var a=o(null!==(n=null==e?void 0:e.additionalDigits)&&void 0!==n?n:2);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var f,v=function(t){var e,n={},a=t.split(s.dateTimeDelimiter);if(a.length>2)return n;if(/:/.test(a[0])?e=a[0]:(n.date=a[0],e=a[1],s.timeZoneDelimiter.test(n.date)&&(n.date=t.split(s.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var r=s.timezone.exec(e);r?(n.time=e.replace(r[1],""),n.timezone=r[1]):n.time=e}return n}(t);if(v.date){var p=function(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),a=t.match(n);if(!a)return{year:NaN,restDateString:""};var r=a[1]?parseInt(a[1]):null,i=a[2]?parseInt(a[2]):null;return{year:null===i?r:100*i,restDateString:t.slice((a[1]||a[2]).length)}}(v.date,a);f=function(t,e){if(null===e)return new Date(NaN);var n=t.match(d);if(!n)return new Date(NaN);var a=!!n[4],r=c(n[1]),i=c(n[2])-1,o=c(n[3]),s=c(n[4]),u=c(n[5])-1;if(a)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,s,u)?function(t,e,n){var a=new Date(0);a.setUTCFullYear(t,0,4);var r=7*(e-1)+n+1-(a.getUTCDay()||7);return a.setUTCDate(a.getUTCDate()+r),a}(e,s,u):new Date(NaN);var l=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(h[e]||(g(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(g(t)?366:365)}(e,r)?(l.setUTCFullYear(e,i,Math.max(r,o)),l):new Date(NaN)}(p.restDateString,p.year)}if(!f||isNaN(f.getTime()))return new Date(NaN);var y,w=f.getTime(),b=0;if(v.time&&(b=function(t){var e=t.match(u);if(!e)return NaN;var n=m(e[1]),a=m(e[2]),i=m(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,a,i)?n*r+6e4*a+1e3*i:NaN}(v.time),isNaN(b)))return new Date(NaN);if(!v.timezone){var S=new Date(w+b),T=new Date(0);return T.setFullYear(S.getUTCFullYear(),S.getUTCMonth(),S.getUTCDate()),T.setHours(S.getUTCHours(),S.getUTCMinutes(),S.getUTCSeconds(),S.getUTCMilliseconds()),T}return y=function(t){if("Z"===t)return 0;var e=t.match(l);if(!e)return 0;var n="+"===e[1]?-1:1,a=parseInt(e[2]),i=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,i)?n*(a*r+6e4*i):NaN}(v.timezone),isNaN(y)?new Date(NaN):new Date(w+b+y)}(t._dueDate),"MMM dd"),a=this.createTask(t._title,t._description,n,t._priority);e.append(a)}))}displayHeader(t){const e=document.querySelector(".main-wrapper"),n=document.querySelector(".tasks-container"),a=document.querySelector(".main-title");a.innerHTML="";let r;r=localStorage.getItem("user")||"User";const i=new Date,o=at(i,"MMM"),s=at(i,"dd"),d=this.createMainHeader(r,t,o,s);a.appendChild(d),e.insertBefore(a,n)}displaySideBar(){const t=document.querySelector(".schedule-tasks"),n=document.querySelector(".your-lists-tasks"),a=document.querySelector(".completed-lists"),r=this.createSectionNav("scheduleLists"),i=this.createSectionNav("yourLists"),o=this.createSectionNav("completed");this.updateContainerContent(t,r),this.updateContainerContent(n,i),this.updateContainerContent(a,o),new e(this.storage).handleActiveNav()}updateContainerContent(t,e){null!=e&&(t.innerHTML="",e.forEach((e=>{t.appendChild(e)})))}displayAddListForm(){document.querySelector(".your-list").appendChild((new rt).createAddListForm())}initActiveNav(){document.querySelector(".nav-list").classList.add("active")}createMainHeader(t,e,n,a){const r=document.createElement("div");r.classList.add("main-title-wrapper");const i=document.createElement("div");i.classList.add("main-title-left");const o=document.createElement("div");o.classList.add("greet"),o.textContent="Hello, ";const s=document.createElement("span");s.classList="header-user-name",s.textContent=`${t}!`;const d=document.createElement("span");d.classList.add("edit-user-icon"),d.innerHTML='<i class="fa-regular fa-pen-to-square edit-user-icon"></i>',o.append(s,d);const u=document.createElement("h1");u.id="main-title",u.classList.add("main-title"),u.textContent=e,i.appendChild(o),i.appendChild(u);const l=document.createElement("div");l.classList.add("current-date");const c=document.createElement("p");c.id="currentMonth",c.classList.add("month-today"),c.textContent=n;const m=document.createElement("p");return m.id="currentDay",m.classList.add("day-today"),m.textContent=a,l.appendChild(c),l.appendChild(m),r.appendChild(i),r.appendChild(l),r}createTask(t,e,n,a){const r=document.createElement("div");r.classList.add("task",a);const i=document.createElement("div");i.classList.add("check-box-container");const o=document.createElement("div");o.classList.add("check-box","check"),i.appendChild(o);const s=document.createElement("div");s.classList.add("task__content");const d=document.createElement("div");d.classList.add("task__top");const u=document.createElement("div");u.classList.add("task__title"),u.textContent=t;const l=document.createElement("div");l.classList.add("task__duedate"),l.textContent=n,d.append(u,l);const c=document.createElement("div");c.classList.add("task__description"),c.textContent=e;const m=this.createTaskIcons();return s.append(d,c,m),r.append(i,s),r}createTaskIcons(){const t=document.createElement("div");t.classList.add("task__icons");const e=document.createElement("ul"),n=document.createElement("li"),a=document.createElement("i");a.classList.add("fa-regular","fa-pen-to-square"),n.appendChild(a);const r=document.createElement("li"),i=document.createElement("i");i.classList.add("fa-regular","fa-flag"),r.appendChild(i);const o=document.createElement("li"),s=document.createElement("i");s.classList.add("fa-regular","fa-trash-can"),o.appendChild(s);const d=document.createElement("li");d.classList.add("menu-btn");const u=document.createElement("i");return u.classList.add("fa-solid","fa-ellipsis-vertical"),d.appendChild(u),e.append(n,r,o,d),t.appendChild(e),t}createSectionNav(t){const e=JSON.parse(localStorage.getItem(t));if(null===e)return e;const n=[];return e.forEach(((t,e)=>{const a=this.createListNav(t._name,t._tasks.length,e);n.push(a)})),n}createListNav(t,e,n){const a=document.createElement("li");a.classList.add("nav-list"),a.setAttribute("data-index",n),e||(e=" ");const r=document.createElement("p");r.classList.add("tasks-name"),r.textContent=t;const i=document.createElement("div");i.classList.add("task-qty-container");const o=document.createElement("span");return o.classList.add("task-qty"),o.textContent=e,i.appendChild(o),a.append(r,i),a}createAddListForm(){const t=document.createElement("div");t.classList.add("add-list-form","toggle");const e=document.createElement("div");e.classList.add("list-name-wrapper");const n=document.createElement("label");n.setAttribute("for","listName"),n.textContent="List Name";const a=document.createElement("input");a.id="listName",a.maxLength=15,a.setAttribute("type","text"),e.appendChild(n),e.appendChild(a);const r=document.createElement("button");r.id="add-list-btn";const i=document.createElement("i");return i.classList.add("fa-solid","fa-plus"),r.appendChild(i),t.appendChild(e),t.appendChild(r),t}createDropDownMenu(){const t=document.createElement("div");t.classList="drop-down";const e=document.createElement("ul"),n=document.createElement("li");n.id="editDropDown",n.textContent="Edit";const a=document.createElement("li");a.id="moveDropDown",a.textContent="Move to other list";const r=document.createElement("li");return r.id="deletDropDown",r.textContent="Delete",r.classList="delete__drop-down",e.appendChild(n),e.appendChild(a),e.appendChild(r),t.appendChild(e),t}}const it=new class{constructor(){this._scheduleLists=this.setScheduleLists(),this._yourLists=this.loadFromLocalStorage("yourLists")||[],this._completed=this.loadFromLocalStorage("completed")||[]}get scheduleLists(){return this._scheduleLists}get yourLists(){return this._yourLists}get completed(){return this._completed}setScheduleLists(){const t=[new n("All Tasks"),new n("Today"),new n("This week")];localStorage.setItem("scheduleLists",JSON.stringify(t))}getScheduleLists(){const t=localStorage.getItem("scheduleLists");return t?JSON.parse(t):[]}loadFromLocalStorage(t){try{const e=localStorage.getItem(t);return JSON.parse(e)}catch(e){return console.error(`Error loading ${t} from local storage: ${e.message}`),null}}saveToLocalStorage(t,e){try{let n=JSON.parse(localStorage.getItem(t));Array.isArray(n)||(n=[]),e.forEach((t=>{n.includes(t)||n.push(t)})),localStorage.setItem(t,JSON.stringify(n))}catch(e){console.error(`Error saving ${t} to local storage: ${e.message}`)}}addToScheduleLists(t){this._scheduleLists.push(t)}addToYourLists(t){this._yourLists.includes(t)||(this._yourLists.push(t),this.saveToLocalStorage("yourLists",[t]))}getAllTasks(){const t=JSON.parse(localStorage.getItem("scheduleLists")),e=JSON.parse(localStorage.getItem("yourLists"));if(!t||!e)return[];const n=t.find((t=>"All Tasks"===t._name));if(!n)return[];const a=[...n._tasks];return e.forEach((t=>{t._tasks&&Array.isArray(t._tasks)&&a.push(...t._tasks)})),a}};new rt(it).initUI(),new e(it).initToggleButtons(),new a(it).initUtils()})();