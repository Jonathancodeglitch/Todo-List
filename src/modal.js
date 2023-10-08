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

export { showModal, closeModal };
