const btnsOpenModal = document.querySelectorAll('.show-modal') as NodeList;
const modal = document.querySelector('.modal') as HTMLDivElement;
const overlay = document.querySelector('.overlay') as HTMLDivElement;
const btnCloseModal = document.querySelector(
  '.close-modal'
) as HTMLButtonElement;

const openModal = function (): void {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (): void {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((button) => {
  button.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
