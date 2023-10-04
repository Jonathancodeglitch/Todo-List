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

import { showModal, closeModal } from './modal';
import toggleNavigation from './toggle_nav';
import { domController } from './DomStuff';

//hide and show sidebar on mobile device for responsiveness
const sidebar = document.getElementById('aside');
const menu = document.getElementById('menu');
toggleNavigation(menu, sidebar);


document.addEventListener('DOMContentLoaded', () => {
  //render todoHtml to the dom from storage
  domController.renderTodo();
});
