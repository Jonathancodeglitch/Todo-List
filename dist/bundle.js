/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DomStuff.js":
/*!*************************!*\
  !*** ./src/DomStuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domController: () => (/* binding */ domController)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");


const domController = (() => {
  const todoList = _todoList__WEBPACK_IMPORTED_MODULE_0__.todos.getTodoList();

  const createTodoHtml = (task, index) => {
    return `<div class="todo" data-id=${index}>
                  <span class="title">${task.title}</span>
                  <span class="date">${task.dueDate}</span>
                  <i class="fas fa-eye open-modal-btn view-task-btn" data-modal="view-task-modal"></i>
                  <i class="fas fa-edit open-modal-btn edit-task-btn" data-modal="edit-task-modal"></i>
                  <i class="fas fa-trash-alt del-task-btn"></i>
              </div>`;
  };

  const renderTodo = () => {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = todoList
      .map((task, index) => {
        return createTodoHtml(task, index);
      })
      .join('');
  };

  const createViewTaskHtml = (index) => {
    return `<div class="detail">Project:<span>${todoList[index].project}</span></div>
            <div class="detail">Title:<span>${todoList[index].title}</span></div>
            <div class="detail" >
                Description: 
                <span>
                ${todoList[index].description}
                </span>
            </div>
            <div class="detail">Due-date:<span>${todoList[index].dueDate}</span></div>
            <div class="detail">Piority:<span>${todoList[index].piority}</span></div>
         `;
  };

  const renderViewTask = (index) => {
    const viewTaskContainer = document.getElementById('view-task');
    viewTaskContainer.innerHTML = createViewTaskHtml(index);
  };

  const createEditTaskHtml = (index) => {
    return `
            <input type="text" placeholder="Title" id="edit-title" value="${
              todoList[index].title
            }">
            <textarea placeholder="Description" id="edit-description">${
              todoList[index].description
            }</textarea>
            <label>
                Due Date:
                <input type="date"  id="edit-dueDate" value="${
                  todoList[index].dueDate
                }">
            </label>
            <div class="flex piority">
                <legend>Piority:</legend>
                <label>
                    <input type="radio" name="piority"  value="high" class="high" data-edit="piority" ${
                      todoList[index].piority == 'high' ? 'checked' : ''
                    }>
                    High
                </label>
                <label>
                    <input type="radio" name="piority" class="medium" value="medium" data-edit="piority" ${
                      todoList[index].piority == 'medium' ? 'checked' : ''
                    } >
                    Medium
                </label>
                <label>
                    <input type="radio" name="piority" class="low" value="low" data-edit="piority"  ${
                      todoList[index].piority == 'low' ? 'checked' : ''
                    }>
                    Low
                </label>
            </div>
            <div class="modal-btn">
                <button class="btn save-edit-btn" data-id=${index}>Save Edit</button>
            </div>
      `;
  };

  const renderEditTaskHtml = (index) => {
    const editTaskContainer = document.getElementById('edit-task-content');
    editTaskContainer.innerHTML = createEditTaskHtml(index);
  };

  renderViewTask;
  return {
    renderTodo,
    renderViewTask,
    renderEditTaskHtml,
  };
})();




/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   showModal: () => (/* binding */ showModal)
/* harmony export */ });
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

//add task modal
const closeModalBtn = document.querySelectorAll('.close-modal');
const main = document.getElementById('main');
/* events */
main.addEventListener('click', showModal);
closeModalBtn.forEach((btn) => btn.addEventListener('click', closeModal));




/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todos: () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _DomStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomStuff */ "./src/DomStuff.js");
//import { showModal, closeModal } from './modal';


class TodoListObj {
  constructor(title, description, dueDate, piority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.piority = piority;
    this.project = project;
  }
}

//responsible for todoList functionality
const todos = (() => {
  let todoList = [
    new TodoListObj('name 1', 'desc 1', '2023-10-04', 'medium', 'none'),
    new TodoListObj('name 2', 'desc 2', '2023-10-04', 'low', 'none'),
    new TodoListObj('name 3', 'desc 3', '2023-10-04', 'high', 'none'),
  ];

  const getTodoList = () => todoList;

  //look for the piority check among the options and return the value
  const getSelectedPiority = (piorities) => {
    let selectedPiority;
    piorities.forEach((piority) => {
      if (piority.checked) {
        selectedPiority = piority.value;
      }
    });
    return selectedPiority;
  };

  /* create and add new todo to array */
  const addTasks = (e) => {
    e.preventDefault();

    const addTaskmodal = document.getElementById('add-task-modal');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const dueDate = document.getElementById('duedate');
    const piority = document.querySelectorAll('[data-add="piority"]');

    //check if inputs are not empty
    if (title.value !== '' && dueDate.value !== '') {
      //push create obj to todoList
      todoList.push(
        new TodoListObj(
          title.value,
          description.value,
          dueDate.value,
          getSelectedPiority(piority),
          'none'
        )
      );

      //reset input field
      resetInputField([title, description, dueDate]);
      //close modal
      addTaskmodal.close();
      //render todoList
      _DomStuff__WEBPACK_IMPORTED_MODULE_0__.domController.renderTodo();
    }
  };

  /* delete task from todoList */
  const deleteTask = (e) => {
    let target = e.target;
    let detBtn = target.classList.contains('del-task-btn');
    if (detBtn) {
      let index = target.parentNode.dataset.id;
      todoList.splice(index, 1);
      _DomStuff__WEBPACK_IMPORTED_MODULE_0__.domController.renderTodo();
    }
  };

  /* view task */
  const viewTask = (e) => {
    let target = e.target;
    let viewTaskBtn = target.classList.contains('view-task-btn');
    if (viewTaskBtn) {
      let index = target.parentNode.dataset.id;
      _DomStuff__WEBPACK_IMPORTED_MODULE_0__.domController.renderViewTask(index);
    }
  };

  const editTask = (e) => {
    let target = e.target;
    let editTaskBtn = target.classList.contains('edit-task-btn');

    if (editTaskBtn) {
      let index = target.parentNode.dataset.id;
      _DomStuff__WEBPACK_IMPORTED_MODULE_0__.domController.renderEditTaskHtml(index);
    }
  };

  //save edit task to storage and render
  const saveEditedTask = (e) => {
    //get index
    let target = e.target;
    let saveEditBtn = target.classList.contains('save-edit-btn');

    if (saveEditBtn) {
      e.preventDefault();
      let index = target.dataset.id;

      const editTitle = document.getElementById('edit-title');
      const editDescription = document.getElementById('edit-description');
      const editDueDate = document.getElementById('edit-dueDate');
      const editPiority = document.querySelectorAll("[data-edit='piority']");
      const editModal = document.getElementById('edit-task-modal');

      if (editTitle.value !== '' && editDueDate.value !== '') {
        todoList[index].title = editTitle.value;
        todoList[index].description = editDescription.value;
        todoList[index].dueDate = editDueDate.value;
        todoList[index].piority = getSelectedPiority(editPiority);
        //render the new todo
        _DomStuff__WEBPACK_IMPORTED_MODULE_0__.domController.renderTodo();
        //close modal
        editModal.close();
      }
    }
  };

  /* events */
  const events = () => {
    const addTaskBtn = document.getElementById('task-btn');
    const content = document.getElementById('content');

    content.addEventListener('click', (e) => {
      viewTask(e);
      editTask(e);
      deleteTask(e);
      saveEditedTask(e);
    });

    //add task btn
    addTaskBtn.addEventListener('click', addTasks);
  };

  events();

  return {
    getTodoList,
  };
})();

//reset input fields
const resetInputField = (inputs) => {
  inputs.forEach((input) => {
    input.value = '';
  });
};




/***/ }),

/***/ "./src/toggle_nav.js":
/*!***************************!*\
  !*** ./src/toggle_nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toggleNavigation = (button, nav) => {
  button.addEventListener('click', function () {
    changeButtonIcon(this)
    //toggle navigation
    nav.classList.toggle('show');
  });
};

const changeButtonIcon=(button)=>{
    //change btn icon
    if (button.classList.contains('fa-bars')) {
        button.classList.remove('fa-bars');
        button.classList.add('fa-times');
      }else{
        button.classList.remove('fa-times');
        button.classList.add('fa-bars');
      }
}

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _toggle_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle_nav */ "./src/toggle_nav.js");
/* harmony import */ var _DomStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DomStuff */ "./src/DomStuff.js");
// when you click on add task btn open task modal and get task info
// render the task to the dom with the object collected from the task detail
//when you click del btn on the todo ,del that todo

//when the view is clicked on the todo ,display details of the todo
//when the edit is clicked display a modal and change that todo info to the new one

//when i click one home display all the todos
//when i click on today show me all todos (which date is equal to todays date)
//when i click on this week show me all todos  (which are in the range of 7 days)

//when i click on add project btn display a modal
//get project name and display it to the dom
//when project name is clicked show corresponding task





//hide and show sidebar on mobile device for responsiveness
const sidebar = document.getElementById('aside');
const menu = document.getElementById('menu');
(0,_toggle_nav__WEBPACK_IMPORTED_MODULE_1__["default"])(menu, sidebar);


document.addEventListener('DOMContentLoaded', () => {
  //render todoHtml to the dom from storage
  _DomStuff__WEBPACK_IMPORTED_MODULE_2__.domController.renderTodo();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7O1VDbkJoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0Q7QUFDSjtBQUNEO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBYTtBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRG9tU3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9nZ2xlX25hdi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9kb3MgfSBmcm9tICcuL3RvZG9MaXN0JztcclxuXHJcbmNvbnN0IGRvbUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IHRvZG9MaXN0ID0gdG9kb3MuZ2V0VG9kb0xpc3QoKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlVG9kb0h0bWwgPSAodGFzaywgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInRvZG9cIiBkYXRhLWlkPSR7aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlXCI+JHt0YXNrLmR1ZURhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1leWUgb3Blbi1tb2RhbC1idG4gdmlldy10YXNrLWJ0blwiIGRhdGEtbW9kYWw9XCJ2aWV3LXRhc2stbW9kYWxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVkaXQgb3Blbi1tb2RhbC1idG4gZWRpdC10YXNrLWJ0blwiIGRhdGEtbW9kYWw9XCJlZGl0LXRhc2stbW9kYWxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdCBkZWwtdGFzay1idG5cIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJUb2RvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWNvbnRhaW5lcicpO1xyXG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSB0b2RvTGlzdFxyXG4gICAgICAubWFwKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVUb2RvSHRtbCh0YXNrLCBpbmRleCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCcnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVWaWV3VGFza0h0bWwgPSAoaW5kZXgpID0+IHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImRldGFpbFwiPlByb2plY3Q6PHNwYW4+JHt0b2RvTGlzdFtpbmRleF0ucHJvamVjdH08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxcIj5UaXRsZTo8c3Bhbj4ke3RvZG9MaXN0W2luZGV4XS50aXRsZX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxcIiA+XHJcbiAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICR7dG9kb0xpc3RbaW5kZXhdLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkR1ZS1kYXRlOjxzcGFuPiR7dG9kb0xpc3RbaW5kZXhdLmR1ZURhdGV9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+UGlvcml0eTo8c3Bhbj4ke3RvZG9MaXN0W2luZGV4XS5waW9yaXR5fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgYDtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJWaWV3VGFzayA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3Qgdmlld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy10YXNrJyk7XHJcbiAgICB2aWV3VGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBjcmVhdGVWaWV3VGFza0h0bWwoaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUVkaXRUYXNrSHRtbCA9IChpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIGlkPVwiZWRpdC10aXRsZVwiIHZhbHVlPVwiJHtcclxuICAgICAgICAgICAgICB0b2RvTGlzdFtpbmRleF0udGl0bGVcclxuICAgICAgICAgICAgfVwiPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIGlkPVwiZWRpdC1kZXNjcmlwdGlvblwiPiR7XHJcbiAgICAgICAgICAgICAgdG9kb0xpc3RbaW5kZXhdLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIH08L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICBEdWUgRGF0ZTpcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiICBpZD1cImVkaXQtZHVlRGF0ZVwiIHZhbHVlPVwiJHtcclxuICAgICAgICAgICAgICAgICAgdG9kb0xpc3RbaW5kZXhdLmR1ZURhdGVcclxuICAgICAgICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcGlvcml0eVwiPlxyXG4gICAgICAgICAgICAgICAgPGxlZ2VuZD5QaW9yaXR5OjwvbGVnZW5kPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGlvcml0eVwiICB2YWx1ZT1cImhpZ2hcIiBjbGFzcz1cImhpZ2hcIiBkYXRhLWVkaXQ9XCJwaW9yaXR5XCIgJHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0W2luZGV4XS5waW9yaXR5ID09ICdoaWdoJyA/ICdjaGVja2VkJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICBIaWdoXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGlvcml0eVwiIGNsYXNzPVwibWVkaXVtXCIgdmFsdWU9XCJtZWRpdW1cIiBkYXRhLWVkaXQ9XCJwaW9yaXR5XCIgJHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0W2luZGV4XS5waW9yaXR5ID09ICdtZWRpdW0nID8gJ2NoZWNrZWQnIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9ID5cclxuICAgICAgICAgICAgICAgICAgICBNZWRpdW1cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwaW9yaXR5XCIgY2xhc3M9XCJsb3dcIiB2YWx1ZT1cImxvd1wiIGRhdGEtZWRpdD1cInBpb3JpdHlcIiAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0W2luZGV4XS5waW9yaXR5ID09ICdsb3cnID8gJ2NoZWNrZWQnIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgIExvd1xyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1idG5cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gc2F2ZS1lZGl0LWJ0blwiIGRhdGEtaWQ9JHtpbmRleH0+U2F2ZSBFZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckVkaXRUYXNrSHRtbCA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgZWRpdFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10YXNrLWNvbnRlbnQnKTtcclxuICAgIGVkaXRUYXNrQ29udGFpbmVyLmlubmVySFRNTCA9IGNyZWF0ZUVkaXRUYXNrSHRtbChpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyVmlld1Rhc2s7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlbmRlclRvZG8sXHJcbiAgICByZW5kZXJWaWV3VGFzayxcclxuICAgIHJlbmRlckVkaXRUYXNrSHRtbCxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgZG9tQ29udHJvbGxlciB9O1xyXG4iLCJmdW5jdGlvbiBzaG93TW9kYWwoZSkge1xyXG4gIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICBsZXQgb3Blbk1vZGFsQnRucyA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4tbW9kYWwtYnRuJyk7XHJcbiAgaWYgKG9wZW5Nb2RhbEJ0bnMpIHtcclxuICAgIC8vZ2V0IHRoZSBtb2RhbCBhc3NvY2lhdGVkIHdpdGggdGhlIGNsaWNrIGFuZCBvcGVuIGl0XHJcbiAgICBsZXQgbW9kYWxOYW1lID0gdGFyZ2V0LmRhdGFzZXQubW9kYWw7XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbE5hbWUpO1xyXG4gICAgbW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gIC8vZ2V0IGFsbCBtb2RhbCBhbmQgY2xvc2UgaXRcclxuICBsZXQgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJyk7XHJcbiAgbW9kYWxzLmZvckVhY2goKG1vZGFsKSA9PiBtb2RhbC5jbG9zZSgpKTtcclxufVxyXG5cclxuLy9hZGQgdGFzayBtb2RhbFxyXG5jb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLW1vZGFsJyk7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4vKiBldmVudHMgKi9cclxubWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb2RhbCk7XHJcbmNsb3NlTW9kYWxCdG4uZm9yRWFjaCgoYnRuKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKSk7XHJcblxyXG5leHBvcnQgeyBzaG93TW9kYWwsIGNsb3NlTW9kYWwgfTtcclxuIiwiLy9pbXBvcnQgeyBzaG93TW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tICcuL21vZGFsJztcclxuaW1wb3J0IHsgZG9tQ29udHJvbGxlciB9IGZyb20gJy4vRG9tU3R1ZmYnO1xyXG5cclxuY2xhc3MgVG9kb0xpc3RPYmoge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcGlvcml0eSwgcHJvamVjdCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucGlvcml0eSA9IHBpb3JpdHk7XHJcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gIH1cclxufVxyXG5cclxuLy9yZXNwb25zaWJsZSBmb3IgdG9kb0xpc3QgZnVuY3Rpb25hbGl0eVxyXG5jb25zdCB0b2RvcyA9ICgoKSA9PiB7XHJcbiAgbGV0IHRvZG9MaXN0ID0gW1xyXG4gICAgbmV3IFRvZG9MaXN0T2JqKCduYW1lIDEnLCAnZGVzYyAxJywgJzIwMjMtMTAtMDQnLCAnbWVkaXVtJywgJ25vbmUnKSxcclxuICAgIG5ldyBUb2RvTGlzdE9iaignbmFtZSAyJywgJ2Rlc2MgMicsICcyMDIzLTEwLTA0JywgJ2xvdycsICdub25lJyksXHJcbiAgICBuZXcgVG9kb0xpc3RPYmooJ25hbWUgMycsICdkZXNjIDMnLCAnMjAyMy0xMC0wNCcsICdoaWdoJywgJ25vbmUnKSxcclxuICBdO1xyXG5cclxuICBjb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHRvZG9MaXN0O1xyXG5cclxuICAvL2xvb2sgZm9yIHRoZSBwaW9yaXR5IGNoZWNrIGFtb25nIHRoZSBvcHRpb25zIGFuZCByZXR1cm4gdGhlIHZhbHVlXHJcbiAgY29uc3QgZ2V0U2VsZWN0ZWRQaW9yaXR5ID0gKHBpb3JpdGllcykgPT4ge1xyXG4gICAgbGV0IHNlbGVjdGVkUGlvcml0eTtcclxuICAgIHBpb3JpdGllcy5mb3JFYWNoKChwaW9yaXR5KSA9PiB7XHJcbiAgICAgIGlmIChwaW9yaXR5LmNoZWNrZWQpIHtcclxuICAgICAgICBzZWxlY3RlZFBpb3JpdHkgPSBwaW9yaXR5LnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZWxlY3RlZFBpb3JpdHk7XHJcbiAgfTtcclxuXHJcbiAgLyogY3JlYXRlIGFuZCBhZGQgbmV3IHRvZG8gdG8gYXJyYXkgKi9cclxuICBjb25zdCBhZGRUYXNrcyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYWRkVGFza21vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLW1vZGFsJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlZGF0ZScpO1xyXG4gICAgY29uc3QgcGlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFkZD1cInBpb3JpdHlcIl0nKTtcclxuXHJcbiAgICAvL2NoZWNrIGlmIGlucHV0cyBhcmUgbm90IGVtcHR5XHJcbiAgICBpZiAodGl0bGUudmFsdWUgIT09ICcnICYmIGR1ZURhdGUudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIC8vcHVzaCBjcmVhdGUgb2JqIHRvIHRvZG9MaXN0XHJcbiAgICAgIHRvZG9MaXN0LnB1c2goXHJcbiAgICAgICAgbmV3IFRvZG9MaXN0T2JqKFxyXG4gICAgICAgICAgdGl0bGUudmFsdWUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgICAgICAgIGR1ZURhdGUudmFsdWUsXHJcbiAgICAgICAgICBnZXRTZWxlY3RlZFBpb3JpdHkocGlvcml0eSksXHJcbiAgICAgICAgICAnbm9uZSdcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvL3Jlc2V0IGlucHV0IGZpZWxkXHJcbiAgICAgIHJlc2V0SW5wdXRGaWVsZChbdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlXSk7XHJcbiAgICAgIC8vY2xvc2UgbW9kYWxcclxuICAgICAgYWRkVGFza21vZGFsLmNsb3NlKCk7XHJcbiAgICAgIC8vcmVuZGVyIHRvZG9MaXN0XHJcbiAgICAgIGRvbUNvbnRyb2xsZXIucmVuZGVyVG9kbygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8qIGRlbGV0ZSB0YXNrIGZyb20gdG9kb0xpc3QgKi9cclxuICBjb25zdCBkZWxldGVUYXNrID0gKGUpID0+IHtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIGxldCBkZXRCdG4gPSB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWwtdGFzay1idG4nKTtcclxuICAgIGlmIChkZXRCdG4pIHtcclxuICAgICAgbGV0IGluZGV4ID0gdGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pZDtcclxuICAgICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgZG9tQ29udHJvbGxlci5yZW5kZXJUb2RvKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyogdmlldyB0YXNrICovXHJcbiAgY29uc3Qgdmlld1Rhc2sgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgbGV0IHZpZXdUYXNrQnRuID0gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndmlldy10YXNrLWJ0bicpO1xyXG4gICAgaWYgKHZpZXdUYXNrQnRuKSB7XHJcbiAgICAgIGxldCBpbmRleCA9IHRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XHJcbiAgICAgIGRvbUNvbnRyb2xsZXIucmVuZGVyVmlld1Rhc2soaW5kZXgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVkaXRUYXNrID0gKGUpID0+IHtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIGxldCBlZGl0VGFza0J0biA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtdGFzay1idG4nKTtcclxuXHJcbiAgICBpZiAoZWRpdFRhc2tCdG4pIHtcclxuICAgICAgbGV0IGluZGV4ID0gdGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pZDtcclxuICAgICAgZG9tQ29udHJvbGxlci5yZW5kZXJFZGl0VGFza0h0bWwoaW5kZXgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vc2F2ZSBlZGl0IHRhc2sgdG8gc3RvcmFnZSBhbmQgcmVuZGVyXHJcbiAgY29uc3Qgc2F2ZUVkaXRlZFRhc2sgPSAoZSkgPT4ge1xyXG4gICAgLy9nZXQgaW5kZXhcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIGxldCBzYXZlRWRpdEJ0biA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NhdmUtZWRpdC1idG4nKTtcclxuXHJcbiAgICBpZiAoc2F2ZUVkaXRCdG4pIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgaW5kZXggPSB0YXJnZXQuZGF0YXNldC5pZDtcclxuXHJcbiAgICAgIGNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlJyk7XHJcbiAgICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2NyaXB0aW9uJyk7XHJcbiAgICAgIGNvbnN0IGVkaXREdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZHVlRGF0ZScpO1xyXG4gICAgICBjb25zdCBlZGl0UGlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1lZGl0PSdwaW9yaXR5J11cIik7XHJcbiAgICAgIGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRhc2stbW9kYWwnKTtcclxuXHJcbiAgICAgIGlmIChlZGl0VGl0bGUudmFsdWUgIT09ICcnICYmIGVkaXREdWVEYXRlLnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgIHRvZG9MaXN0W2luZGV4XS50aXRsZSA9IGVkaXRUaXRsZS52YWx1ZTtcclxuICAgICAgICB0b2RvTGlzdFtpbmRleF0uZGVzY3JpcHRpb24gPSBlZGl0RGVzY3JpcHRpb24udmFsdWU7XHJcbiAgICAgICAgdG9kb0xpc3RbaW5kZXhdLmR1ZURhdGUgPSBlZGl0RHVlRGF0ZS52YWx1ZTtcclxuICAgICAgICB0b2RvTGlzdFtpbmRleF0ucGlvcml0eSA9IGdldFNlbGVjdGVkUGlvcml0eShlZGl0UGlvcml0eSk7XHJcbiAgICAgICAgLy9yZW5kZXIgdGhlIG5ldyB0b2RvXHJcbiAgICAgICAgZG9tQ29udHJvbGxlci5yZW5kZXJUb2RvKCk7XHJcbiAgICAgICAgLy9jbG9zZSBtb2RhbFxyXG4gICAgICAgIGVkaXRNb2RhbC5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyogZXZlbnRzICovXHJcbiAgY29uc3QgZXZlbnRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ0bicpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHZpZXdUYXNrKGUpO1xyXG4gICAgICBlZGl0VGFzayhlKTtcclxuICAgICAgZGVsZXRlVGFzayhlKTtcclxuICAgICAgc2F2ZUVkaXRlZFRhc2soZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2FkZCB0YXNrIGJ0blxyXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2tzKTtcclxuICB9O1xyXG5cclxuICBldmVudHMoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldFRvZG9MaXN0LFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG4vL3Jlc2V0IGlucHV0IGZpZWxkc1xyXG5jb25zdCByZXNldElucHV0RmllbGQgPSAoaW5wdXRzKSA9PiB7XHJcbiAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdG9kb3MgfTtcclxuIiwiY29uc3QgdG9nZ2xlTmF2aWdhdGlvbiA9IChidXR0b24sIG5hdikgPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNoYW5nZUJ1dHRvbkljb24odGhpcylcclxuICAgIC8vdG9nZ2xlIG5hdmlnYXRpb25cclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VCdXR0b25JY29uPShidXR0b24pPT57XHJcbiAgICAvL2NoYW5nZSBidG4gaWNvblxyXG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWJhcnMnKSkge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLXRpbWVzJyk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS10aW1lcycpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XHJcbiAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlTmF2aWdhdGlvbjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyB3aGVuIHlvdSBjbGljayBvbiBhZGQgdGFzayBidG4gb3BlbiB0YXNrIG1vZGFsIGFuZCBnZXQgdGFzayBpbmZvXHJcbi8vIHJlbmRlciB0aGUgdGFzayB0byB0aGUgZG9tIHdpdGggdGhlIG9iamVjdCBjb2xsZWN0ZWQgZnJvbSB0aGUgdGFzayBkZXRhaWxcclxuLy93aGVuIHlvdSBjbGljayBkZWwgYnRuIG9uIHRoZSB0b2RvICxkZWwgdGhhdCB0b2RvXHJcblxyXG4vL3doZW4gdGhlIHZpZXcgaXMgY2xpY2tlZCBvbiB0aGUgdG9kbyAsZGlzcGxheSBkZXRhaWxzIG9mIHRoZSB0b2RvXHJcbi8vd2hlbiB0aGUgZWRpdCBpcyBjbGlja2VkIGRpc3BsYXkgYSBtb2RhbCBhbmQgY2hhbmdlIHRoYXQgdG9kbyBpbmZvIHRvIHRoZSBuZXcgb25lXHJcblxyXG4vL3doZW4gaSBjbGljayBvbmUgaG9tZSBkaXNwbGF5IGFsbCB0aGUgdG9kb3NcclxuLy93aGVuIGkgY2xpY2sgb24gdG9kYXkgc2hvdyBtZSBhbGwgdG9kb3MgKHdoaWNoIGRhdGUgaXMgZXF1YWwgdG8gdG9kYXlzIGRhdGUpXHJcbi8vd2hlbiBpIGNsaWNrIG9uIHRoaXMgd2VlayBzaG93IG1lIGFsbCB0b2RvcyAgKHdoaWNoIGFyZSBpbiB0aGUgcmFuZ2Ugb2YgNyBkYXlzKVxyXG5cclxuLy93aGVuIGkgY2xpY2sgb24gYWRkIHByb2plY3QgYnRuIGRpc3BsYXkgYSBtb2RhbFxyXG4vL2dldCBwcm9qZWN0IG5hbWUgYW5kIGRpc3BsYXkgaXQgdG8gdGhlIGRvbVxyXG4vL3doZW4gcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQgc2hvdyBjb3JyZXNwb25kaW5nIHRhc2tcclxuXHJcbmltcG9ydCB7IHNob3dNb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xyXG5pbXBvcnQgdG9nZ2xlTmF2aWdhdGlvbiBmcm9tICcuL3RvZ2dsZV9uYXYnO1xyXG5pbXBvcnQgeyBkb21Db250cm9sbGVyIH0gZnJvbSAnLi9Eb21TdHVmZic7XHJcblxyXG4vL2hpZGUgYW5kIHNob3cgc2lkZWJhciBvbiBtb2JpbGUgZGV2aWNlIGZvciByZXNwb25zaXZlbmVzc1xyXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FzaWRlJyk7XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xyXG50b2dnbGVOYXZpZ2F0aW9uKG1lbnUsIHNpZGViYXIpO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgLy9yZW5kZXIgdG9kb0h0bWwgdG8gdGhlIGRvbSBmcm9tIHN0b3JhZ2VcclxuICBkb21Db250cm9sbGVyLnJlbmRlclRvZG8oKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==