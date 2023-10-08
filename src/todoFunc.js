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

export { todoFunc };
