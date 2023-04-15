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

const uniqueCard = () => {
  const workSectionTitle = document.createElement('div');
  workSectionTitle.className = 'works-title-block';
  workSectionTitle.innerHTML = `
    <h3 class="title flex">My Recent Works</h3>
    <div class="divider-desktop">
      <img class="desktop-divider" src="images/desktop-divider.png" alt="">
    </div>
  </div>
  <div class="crossline"><img src="images/Vector (2).png" alt=""></div>
  `;
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
    <button type="button" class="btn-type-a flex">See project</button>`;
  workSection.appendChild(worksCard);
};
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
  </div>`;
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
      },
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    'Link to live version': '#',
    'Link to source': '#',
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
      },
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    'Link to live version': '#',
    'Link to source': '#',
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
      },
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    'Link to live version': '#',
    'Link to source': '#',
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
      },
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    'Link to live version': '#',
    'Link to source': '#',
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
      },
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    'Link to live version': '#',
    'Link to source': '#',
  },
  {
    name: 'Project Six',
    description: 'You need to update the main page so that the projects section is created dynamically using the information stored in that JavaScript object. Remember, all of the HTML in that section is created when the page loads.',
    'Featured image': {
      mobile: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      },
      desktop: {
        src: 'images/Img-Placeholder(4).png',
        alt: '',
      },
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    'Link to live version': '#',
    'Link to source': '#',
  },
];

function recurringCards(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const card = document.createElement('div');
    card.className = 'grid-item';
    const cardDetails = arr[i];
    card.innerHTML = `
    <img src=${cardDetails['Featured image'].mobile.src} alt=${cardDetails['Featured image'].alt} width class="project-cards-mobile">
    <img class='project-cards-desktop' src=${cardDetails['Featured image'].desktop.src} alt=${cardDetails['Featured image'].alt}>
    <div class="image-text flex">
      <div>
        <h3 class="bold-text flex">${cardDetails.name}</h3>
      </div>
      <p class="works-description">${cardDetails.description}</p>
      <ul class="competencies flex">
        <li>${cardDetails.technologies.tech1}</li>
        <li>${cardDetails.technologies.tech2}</li>
        <li>${cardDetails.technologies.tech3}</li>
      </ul>
    </div>
    <div><button type="button" class="btn-type-b flex">See project</button></div>`;
    cardsContainer.appendChild(card);
  }
  return cardsContainer;
}
recurringCards(projectData);
workSection.appendChild(cardsContainer);

const cardButton = document.querySelectorAll('.btn-type-b');

function loopButton(arr, brr) {
  for (let i = 0; i < arr.length; i += 1) {
    const popupBtn = arr[i];
    popupBtn.addEventListener('click', () => {
      for (let j = 0; j < brr.length; j += 1) {
        if (j === i) {
          const details = brr[j];
          const detailsPopup = document.createElement('section');
          detailsPopup.id = 'details-popup';
          detailsPopup.innerHTML = `
            <div class="popup-header flex">
            <h3 class="bold-text">${details.name}</h3>
            <button id="popup-close">X</button></div>
            <ul class="competencies flex popup-technologies">
              <li>${details.technologies.tech1}</li>
              <li>${details.technologies.tech2}</li>
              <li>${details.technologies.tech2}</li>
            </ul>
            <div class="popup-body flex">
              <img src="images/Snapshoot Portfolio.png" alt="" class="popup-image">
              <div class="side-text">
                <div class="works-description popup-text">${details.description}</div>
                <div class="demoButtons flex">
                  <a href=${details['Link to live version']} class="btn-type-a">See live <img src="images/export-icon.png" alt="" width='13'></a>
                  <a href=${details['Link to live version']} class="btn-type-a">See source <img src="images/github-icon.png" alt="" width='13'></a>
                </div>
              </div>
            </div>`;
          mobileVersionContainer.appendChild(detailsPopup);

          const popupClose = document.querySelector('#popup-close');
          const popHeader = document.querySelector('.popup-header');
          popupClose.addEventListener('click', () => {
            popHeader.parentNode.remove();
          });
        }
      }
    });
  }
}

loopButton(cardButton, projectData);

// ...Email validation...

const email = document.querySelector('#e-mail');
const emailMob = document.querySelector('#e-mail-mob');
const messageMob = document.querySelector('.message-mob');
const messageDesk = document.querySelector('.message-desk');
const formDesktop = document.querySelector('.main-form');
const formMobile = document.querySelector('.form-mobile');
const mobileName = document.querySelector('.form-mobile input');
const desktopName = document.querySelector('.main-form input');
const mobileText = document.querySelector('.form-mobile textarea');
const desktopText = document.querySelector('.main-form textarea');

function isValid(str) {
  if (str.toLowerCase() !== str) {
    return false;
  }
  return true;
}

// ...Additional requirements - if email is in uppercase, change it in the email to lower case so the user can use at once...

function emailToLowercsae(str) {
  return str.toLowerCase();
}

formDesktop.addEventListener('submit', (event) => {
  if (!isValid(email.value)) {
    messageDesk.textContent = 'Email must be in lowercase!';
    email.value = emailToLowercsae(email.value);
    event.preventDefault();
  } else {
    messageDesk.textContent = '';
  }
});

formMobile.addEventListener('submit', (event) => {
  if (!isValid(emailMob.value)) {
    messageMob.textContent = 'Email must be in lowercase!';
    emailMob.value = emailToLowercsae(emailMob.value);
    event.preventDefault();
  } else {
    messageMob.textContent = '';
  }
});

// ...portfolio-Preserve data in the browser...

formMobile.addEventListener('change', () => {
  const formDataMobile = {
    name: mobileName.value,
    email: emailMob.value,
    text: mobileText.value,
  };
  const stringifyFormDataMobile = JSON.stringify(formDataMobile);
  localStorage.setItem('mobileData', stringifyFormDataMobile);
});

formDesktop.addEventListener('change', () => {
  const formDataDesktop = {
    name: desktopName.value,
    email: email.value,
    text: desktopText.value,
  };
  const stringifyFormDataDesktop = JSON.stringify(formDataDesktop);
  localStorage.setItem('desktopData', stringifyFormDataDesktop);
});

const storedMobileData = JSON.parse(localStorage.getItem('mobileData'));
const storedDesktopData = JSON.parse(localStorage.getItem('desktopData'));

window.addEventListener('load', () => {
  mobileName.value = storedMobileData.name;
  emailMob.value = storedMobileData.email;
  mobileText.value = storedMobileData.text;
  desktopName.value = storedDesktopData.name;
  email.value = storedDesktopData.email;
  desktopText.value = storedDesktopData.text;
});
