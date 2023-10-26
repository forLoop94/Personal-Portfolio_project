const mobileVersionContainer = document.querySelector('[data-main]');

const menuDisplay = () => {
  const modal = document.createElement('section');
  modal.id = 'custom-modal';

  const deleteButton = document.createElement('div');
  deleteButton.textContent = 'X';
  deleteButton.id = 'modal-delete';
  modal.appendChild(deleteButton);

  const menuList = document.createElement('ul');
  menuList.id = 'menu-list';

  const item0 = document.createElement('li');
  const home = document.createElement('a');
  home.href = '#headline-section';
  home.className = 'menu-content';
  home.textContent = 'Home';
  item0.appendChild(home);
  home.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });

  const item1 = document.createElement('li');
  const portfolio = document.createElement('a');
  portfolio.href = '#projects-wrapper';
  portfolio.className = 'menu-content';
  portfolio.textContent = 'Portfolio';
  item1.appendChild(portfolio);
  portfolio.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });

  const item1b = document.createElement('li');
  const article = document.createElement('a');
  article.href = '#works-section';
  article.className = 'menu-content';
  article.textContent = 'Recent Article';
  item1b.appendChild(article);
  article.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });

  const item2 = document.createElement('li');
  const about = document.createElement('a');
  about.href = '#about-section';
  about.className = 'menu-content';
  about.textContent = 'About';
  item2.appendChild(about);
  about.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });

  const item3 = document.createElement('li');
  const contact = document.createElement('a');
  contact.href = '#contact-section';
  contact.className = 'menu-content';
  contact.textContent = 'Contact';
  item3.appendChild(contact);
  contact.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });

  menuList.appendChild(item0);
  menuList.appendChild(item1);
  menuList.appendChild(item1b);
  menuList.appendChild(item2);
  menuList.appendChild(item3);
  modal.appendChild(menuList);
  mobileVersionContainer.appendChild(modal);

  const removeModal = () => {
    modal.style.visibility = 'hidden';
  };

  deleteButton.addEventListener('click', removeModal);
};

export default menuDisplay;