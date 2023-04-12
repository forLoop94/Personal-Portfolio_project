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

  const worksCard = document.createElement('div');
  worksCard.className = 'works-card';
  worksCard.innerHTML = `
    <div class="yoga-placeholder"><img src="images/Img Placeholder.png" alt=""></div>
    <h3 id="bold-text" class="flex">Multi-Post Stories</h3>
    <p id="works-description">A daily selection of privately personalized reads; no    accounts or sign-ups required.
      has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard
      dummy text.</p>
    <ul id="competencies" class="flex">
      <li>CSS</li>
      <li>HTML</li>
      <li>JAVASCRIPT</li>
    </ul>
    <button type="button" class="btn-type-a flex">See project</button>`
  workSection.appendChild(worksCard);
}
uniqueCard();

function worksDesktop() {
  const worksCardDesktop = document.createElement('div');
  worksCardDesktop.className = 'works-card-desktop';
  worksCardDesktop.innerHTML = `
  <img src="images/Img Placeholder.png" alt="" class="project-cards flex">
  <div class="extras side-text">
    <h3 id="bold-text">Multi-Post Stories</h3>
    <p id="works-description">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
    <ul id="competencies" class="flex">
      <li>CSS</li>
      <li>HTML</li>
      <li>Bootstrap</li>
      <li>Ruby</li>
    </ul>
    <button type="button" class="btn-type-a">See project</button>
  </div>`
  workSection.appendChild(worksCardDesktop);
}

worksDesktop();

// ...Create recurring cards...

const cardsContainer = document.createElement('div');
cardsContainer.className = 'grid-container';


const projectData = [
  {
    name: 'Project One',
    description: 'You need to update the main page so that the projects section is created dynamically using the information stored in that JavaScript object. Remember, all of the HTML in that section is created when the page loads.',
    'Featured image': {
      mobile: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      },
      desktop: {
        src: 'images/Img-Placeholder(2).png',
        alt: '',
      }
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript'
    },
    'Link to live version': '#',
    'Link to source': '#'
  },

  {
    name: 'Project Two',
    description: 'You need to update the main page so that the projects section is created dynamically using the information stored in that JavaScript object. Remember, all of the HTML in that section is created when the page loads.',
    'Featured image': {
      mobile: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      },
      desktop: {
        src: 'images/Img-Placeholder(3).png',
        alt: '',
      }
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript'
    },
    'Link to live version': '#',
    'Link to source': '#'
  },
  {
    name: 'Project Three',
    description: 'You need to update the main page so that the projects section is created dynamically using the information stored in that JavaScript object. Remember, all of the HTML in that section is created when the page loads.',
    'Featured image': {
      mobile: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      },
      desktop: {
        src: 'images/Img-Placeholder(4).png',
        alt: '',
      }
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript'
    },
    'Link to live version': '#',
    'Link to source': '#'
  },
  {
    name: 'Project Four',
    description: 'You need to update the main page so that the projects section is created dynamically using the information stored in that JavaScript object. Remember, all of the HTML in that section is created when the page loads.',
    'Featured image': {
      mobile: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      },
      desktop: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      }
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript'
    },
    'Link to live version': '#',
    'Link to source': '#'
  },
  {
    name: 'Project Five',
    description: 'You need to update the main page so that the projects section is created dynamically using the information stored in that JavaScript object. Remember, all of the HTML in that section is created when the page loads.',
    'Featured image': {
      mobile: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      },
      desktop: {
        src: 'images/Img-Placeholder(3).png',
        alt: '',
      }
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript'
    },
    'Link to live version': '#',
    'Link to source': '#'
  }
]

