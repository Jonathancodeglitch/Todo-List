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

export default toggleNavigation;
