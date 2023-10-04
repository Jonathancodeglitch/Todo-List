import { todos } from './todoList';

const domController = (() => {
  const todoList = todos.getTodoList();

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

export { domController };
