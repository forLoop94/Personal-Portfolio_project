const mobileVersionContainer = document.querySelector('[data-main]');
const menuButton = document.querySelector('[data-menu]');

const deleteButton = document.createElement('div');
deleteButton.textContent = 'X';
deleteButton.id = 'modal-delete';
modal.appendChild(deleteButton);

const menuList = document.createElement('ul');
menuList.id = 'menu-list';