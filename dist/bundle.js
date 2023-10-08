/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   showModal: () => (/* binding */ showModal)
/* harmony export */ });
const closeModalBtn = document.querySelectorAll('.close-modal');
const content = document.getElementById('content');

function showModal(e) {
  let target = e.target;
  let openModalBtns = target.classList.contains('open-modal-btn');
  if (openModalBtns) {
    //get the modal associated with the click and open it
    let modalName = target.dataset.modal;
    let modal = document.getElementById(modalName);
    modal.showModal();
  }
}

function closeModal() {
  //get all modal and close it
  let modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => modal.close());
}

/* events */
content.addEventListener('click', showModal);
closeModalBtn.forEach((btn) => btn.addEventListener('click', closeModal));




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./src/todoFunc.js":
/*!*************************!*\
  !*** ./src/todoFunc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoFunc: () => (/* binding */ todoFunc)
/* harmony export */ });
//create new todo
function createTodo(title, desc, dueDate, piority) {
  return {
    title,
    desc,
    dueDate,
    piority,
  };
}

//todofunc is responsible for all the todo responsibility
const todoList = [];

const todoFunc = (() => {
  const addTodo = (e) => {
    let target = e.target;
    let addTodoBtn = target.id == 'add-to-btn';

    //check if the button click has and id of add-to-btn
    if (addTodoBtn) {
      e.preventDefault();

      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const dueDate = document.getElementById('duedate').value;
      const piority = document.querySelectorAll("[data-add='piority']");
      //check if form is filled
      //and warn user
      if (title == '' || dueDate == '') {
        alert('title and due date must be filled!!');
        return;
      }
      console.log(
        createTodo(
          title,
          description,
          dueDate,
          getCheckedRadioInputValue(piority)
        )
      );

      //reset form when modal close
      document.getElementById('add-todo-form').reset();

      //close modal
      document.getElementById('add-task-modal').close();
    }
  };

  return {
    addTodo,
  };
})();

//get value of radio input checkeed
function getCheckedRadioInputValue(inputs) {
  let value;
  inputs.forEach((input) => {
    if (input.checked) {
      value = input.value;
    }
  });
  return value;
}




/***/ }),

/***/ "./src/toggle_nav.js":
/*!***************************!*\
  !*** ./src/toggle_nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sidebar = document.getElementById('aside');
const menu = document.getElementById('menu');

const toggleNavigation = (button, nav) => {
  button.addEventListener('click', function () {
    changeButtonIcon(this);
    //toggle navigation
    nav.classList.toggle('show');
  });
};

const changeButtonIcon = (button) => {
  //change btn icon
  if (button.classList.contains('fa-bars')) {
    button.classList.remove('fa-bars');
    button.classList.add('fa-times');
  } else {
    button.classList.remove('fa-times');
    button.classList.add('fa-bars');
  }
};

toggleNavigation(menu, sidebar);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleNavigation);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _toggle_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle_nav */ "./src/toggle_nav.js");
/* harmony import */ var _todoFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoFunc */ "./src/todoFunc.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_project__WEBPACK_IMPORTED_MODULE_3__);





// todo are object we can use factories to create them..
// chose todo props
// the todoList should have seperate list of todos inside projects
// When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put
// Users should be able to create new projects and choose which project their todos go into

const events = (() => {
  const content = document.getElementById('content');
  content.addEventListener('click', _todoFunc__WEBPACK_IMPORTED_MODULE_2__.todoFunc.addTodo);
})();

//note done finish on a future date

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ29COzs7Ozs7Ozs7Ozs7Ozs7O0FDakVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7VUN4QmhDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05pQjtBQUNLO0FBQ2dCO0FBQ25CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywrQ0FBUTtBQUM1QyxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0Z1bmMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZ2dsZV9uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLW1vZGFsJyk7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuZnVuY3Rpb24gc2hvd01vZGFsKGUpIHtcclxuICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgbGV0IG9wZW5Nb2RhbEJ0bnMgPSB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuLW1vZGFsLWJ0bicpO1xyXG4gIGlmIChvcGVuTW9kYWxCdG5zKSB7XHJcbiAgICAvL2dldCB0aGUgbW9kYWwgYXNzb2NpYXRlZCB3aXRoIHRoZSBjbGljayBhbmQgb3BlbiBpdFxyXG4gICAgbGV0IG1vZGFsTmFtZSA9IHRhcmdldC5kYXRhc2V0Lm1vZGFsO1xyXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxOYW1lKTtcclxuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAvL2dldCBhbGwgbW9kYWwgYW5kIGNsb3NlIGl0XHJcbiAgbGV0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpO1xyXG4gIG1vZGFscy5mb3JFYWNoKChtb2RhbCkgPT4gbW9kYWwuY2xvc2UoKSk7XHJcbn1cclxuXHJcbi8qIGV2ZW50cyAqL1xyXG5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01vZGFsKTtcclxuY2xvc2VNb2RhbEJ0bi5mb3JFYWNoKChidG4pID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpKTtcclxuXHJcbmV4cG9ydCB7IHNob3dNb2RhbCwgY2xvc2VNb2RhbCB9O1xyXG4iLCIvL2NyZWF0ZSBuZXcgdG9kb1xyXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwaW9yaXR5KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzYyxcclxuICAgIGR1ZURhdGUsXHJcbiAgICBwaW9yaXR5LFxyXG4gIH07XHJcbn1cclxuXHJcbi8vdG9kb2Z1bmMgaXMgcmVzcG9uc2libGUgZm9yIGFsbCB0aGUgdG9kbyByZXNwb25zaWJpbGl0eVxyXG5jb25zdCB0b2RvTGlzdCA9IFtdO1xyXG5cclxuY29uc3QgdG9kb0Z1bmMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFRvZG8gPSAoZSkgPT4ge1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgbGV0IGFkZFRvZG9CdG4gPSB0YXJnZXQuaWQgPT0gJ2FkZC10by1idG4nO1xyXG5cclxuICAgIC8vY2hlY2sgaWYgdGhlIGJ1dHRvbiBjbGljayBoYXMgYW5kIGlkIG9mIGFkZC10by1idG5cclxuICAgIGlmIChhZGRUb2RvQnRuKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlZGF0ZScpLnZhbHVlO1xyXG4gICAgICBjb25zdCBwaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFkZD0ncGlvcml0eSddXCIpO1xyXG4gICAgICAvL2NoZWNrIGlmIGZvcm0gaXMgZmlsbGVkXHJcbiAgICAgIC8vYW5kIHdhcm4gdXNlclxyXG4gICAgICBpZiAodGl0bGUgPT0gJycgfHwgZHVlRGF0ZSA9PSAnJykge1xyXG4gICAgICAgIGFsZXJ0KCd0aXRsZSBhbmQgZHVlIGRhdGUgbXVzdCBiZSBmaWxsZWQhIScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBjcmVhdGVUb2RvKFxyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgICBnZXRDaGVja2VkUmFkaW9JbnB1dFZhbHVlKHBpb3JpdHkpXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy9yZXNldCBmb3JtIHdoZW4gbW9kYWwgY2xvc2VcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvLWZvcm0nKS5yZXNldCgpO1xyXG5cclxuICAgICAgLy9jbG9zZSBtb2RhbFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stbW9kYWwnKS5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRUb2RvLFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG4vL2dldCB2YWx1ZSBvZiByYWRpbyBpbnB1dCBjaGVja2VlZFxyXG5mdW5jdGlvbiBnZXRDaGVja2VkUmFkaW9JbnB1dFZhbHVlKGlucHV0cykge1xyXG4gIGxldCB2YWx1ZTtcclxuICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XHJcbiAgICAgIHZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgeyB0b2RvRnVuYyB9O1xyXG4iLCJjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FzaWRlJyk7XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xyXG5cclxuY29uc3QgdG9nZ2xlTmF2aWdhdGlvbiA9IChidXR0b24sIG5hdikgPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNoYW5nZUJ1dHRvbkljb24odGhpcyk7XHJcbiAgICAvL3RvZ2dsZSBuYXZpZ2F0aW9uXHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlQnV0dG9uSWNvbiA9IChidXR0b24pID0+IHtcclxuICAvL2NoYW5nZSBidG4gaWNvblxyXG4gIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1iYXJzJykpIHtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzJyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtdGltZXMnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXRpbWVzJyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xyXG4gIH1cclxufTtcclxuXHJcbnRvZ2dsZU5hdmlnYXRpb24obWVudSwgc2lkZWJhcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2dnbGVOYXZpZ2F0aW9uO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL21vZGFsJztcclxuaW1wb3J0ICcuL3RvZ2dsZV9uYXYnO1xyXG5pbXBvcnQgeyB0b2RvRnVuYyB9IGZyb20gJy4vdG9kb0Z1bmMnO1xyXG5pbXBvcnQgJy4vcHJvamVjdCc7XHJcblxyXG4vLyB0b2RvIGFyZSBvYmplY3Qgd2UgY2FuIHVzZSBmYWN0b3JpZXMgdG8gY3JlYXRlIHRoZW0uLlxyXG4vLyBjaG9zZSB0b2RvIHByb3BzXHJcbi8vIHRoZSB0b2RvTGlzdCBzaG91bGQgaGF2ZSBzZXBlcmF0ZSBsaXN0IG9mIHRvZG9zIGluc2lkZSBwcm9qZWN0c1xyXG4vLyBXaGVuIGEgdXNlciBmaXJzdCBvcGVucyB0aGUgYXBwLCB0aGVyZSBzaG91bGQgYmUgc29tZSBzb3J0IG9mIOKAmGRlZmF1bHTigJkgcHJvamVjdCB0byB3aGljaCBhbGwgb2YgdGhlaXIgdG9kb3MgYXJlIHB1dFxyXG4vLyBVc2VycyBzaG91bGQgYmUgYWJsZSB0byBjcmVhdGUgbmV3IHByb2plY3RzIGFuZCBjaG9vc2Ugd2hpY2ggcHJvamVjdCB0aGVpciB0b2RvcyBnbyBpbnRvXHJcblxyXG5jb25zdCBldmVudHMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2RvRnVuYy5hZGRUb2RvKTtcclxufSkoKTtcclxuXHJcbi8vbm90ZSBkb25lIGZpbmlzaCBvbiBhIGZ1dHVyZSBkYXRlXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==