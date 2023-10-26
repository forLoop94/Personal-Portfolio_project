const workSection = document.querySelector('#works-section');

const uniqueCard = () => {
  const workSectionTitle = document.createElement('div');
  workSectionTitle.className = 'works-title-block';
  workSectionTitle.innerHTML = `
    <h3 class="title flex">My Recent Works</h3>
    <div class="divider-desktop">
      <img class="desktop-divider" src="images/desktop-divider.png" alt="">
    </div>
  <div class="crossline"><img src="images/Vector (2).png" alt=""></div>
  `;
  workSection.appendChild(workSectionTitle);

  const worksCard = document.createElement('div');
  worksCard.className = 'works-card';
  worksCard.innerHTML = `
    <div class="yoga-placeholder"><img src="images/Img Placeholder.png" alt=""></div>
    <h3 id="bold-text" class="flex">Multi-Post Stories</h3>
    <p id="works-description">Be it about career struggles, discoveries or achievements, I love taking time out to document my journey as a Software Developer on Medium. Click the button below to see the latest one about Imposter Syndrome and how I can overcame it</p>
    <a target="_blank" href="https://medium.com/@andrews_charles/the-biggest-non-technical-lesson-i-have-learned-in-my-journey-as-a-developer-f95c68b8788b" class="resume-link">
    <button type="button" class="btn-type-a flex">See Article</button></a>`;
  workSection.appendChild(worksCard);
};

function worksDesktop() {
  const worksCardDesktop = document.createElement('div');
  worksCardDesktop.className = 'works-card-desktop';
  worksCardDesktop.innerHTML = `
  <img src="images/Img Placeholder.png" alt="" class="project-cards flex">
  <div class="extras side-text">
    <h3 id="bold-text">Multi-Post Stories</h3>
    <p id="works-description">Be it about career struggles, discoveries or achievements, I love taking time out to document my journey as a Software Developer on Medium. Click the button below to see the latest one about Imposter Syndrome and how I overcame it.</p>
    <a target="_blank" href="https://medium.com/@andrews_charles/the-biggest-non-technical-lesson-i-have-learned-in-my-journey-as-a-developer-f95c68b8788b" class="resume-link">
    <button type="button" class="btn-type-a flex">See Article</button></a>
  </div>`;
  workSection.appendChild(worksCardDesktop);
}

export { uniqueCard, worksDesktop, workSection };