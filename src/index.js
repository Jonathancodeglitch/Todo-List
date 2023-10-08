import './modal';
import './toggle_nav';
import { todoFunc } from './todoFunc';
import './project';

// todo are object we can use factories to create them..
// chose todo props
// the todoList should have seperate list of todos inside projects
// When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put
// Users should be able to create new projects and choose which project their todos go into

const events = (() => {
  const content = document.getElementById('content');
  content.addEventListener('click', todoFunc.addTodo);
})();

//note done finish on a future date
