//import { showModal, closeModal } from './modal';
import { domController } from './DomStuff';

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
      domController.renderTodo();
    }
  };

  /* delete task from todoList */
  const deleteTask = (e) => {
    let target = e.target;
    let detBtn = target.classList.contains('del-task-btn');
    if (detBtn) {
      let index = target.parentNode.dataset.id;
      todoList.splice(index, 1);
      domController.renderTodo();
    }
  };

  /* view task */
  const viewTask = (e) => {
    let target = e.target;
    let viewTaskBtn = target.classList.contains('view-task-btn');
    if (viewTaskBtn) {
      let index = target.parentNode.dataset.id;
      domController.renderViewTask(index);
    }
  };

  const editTask = (e) => {
    let target = e.target;
    let editTaskBtn = target.classList.contains('edit-task-btn');

    if (editTaskBtn) {
      let index = target.parentNode.dataset.id;
      domController.renderEditTaskHtml(index);
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
        domController.renderTodo();
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

export { todos };
