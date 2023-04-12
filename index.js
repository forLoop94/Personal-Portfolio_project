const mobileVersionContainer = document.querySelector('[data-main]');
const menuButton = document.querySelector('[data-menu]');

const menuDisplay = () => {
  const modal = document.createElement('section');
  modal.id = 'custom-modal';

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

  menuList.appendChild(item1);
  menuList.appendChild(item2);
  menuList.appendChild(item3);
  modal.appendChild(menuList);
  mobileVersionContainer.appendChild(modal);

  const removeModal = () => {
    modal.style.visibility = 'hidden';
  };

  deleteButton.addEventListener('click', removeModal);
};
menuButton.addEventListener('click', menuDisplay);

// Portfolio details popup window

const workSection = document.querySelector('#works-section');

// ...Create the unique card...

let uniqueCard = () => {
  const workSectionTitle = document.createElement('div');
  workSectionTitle.className = 'works-title-block';
  workSectionTitle.innerHTML = `
    <h3 class="title flex">My Recent Works</h3>
    <div class="divider-desktop">
      <img class="desktop-divider" src="images/desktop-divider.png" alt="">
    </div>
  </div>
  <div class="crossline"><img src="images/Vector (2).png" alt=""></div>
  `
  workSection.appendChild(workSectionTitle);
