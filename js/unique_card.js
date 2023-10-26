const workSection = document.querySelector('#works-section');

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

export { uniqueCard, worksDesktop, workSection };