const mobileVersionContainer = document.querySelector('[data-main]');
const menuButton = document.querySelector('[data-menu]');

const deleteButton = document.createElement('div');
deleteButton.textContent = 'X';
deleteButton.id = 'modal-delete';
modal.appendChild(deleteButton);

const menuList = document.createElement('ul');
menuList.id = 'menu-list';

const item1 = document.createElement('li');
  const portfolio = document.createElement('a');
  portfolio.href = '#works-section';
  portfolio.className = 'menu-content';
  portfolio.textContent = 'Portfolio';
  item1.appendChild(portfolio);
  portfolio.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });