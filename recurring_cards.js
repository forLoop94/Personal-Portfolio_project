const cardsContainer = document.createElement('div');
cardsContainer.className = 'grid-container';

function recurringCards(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const card = document.createElement('div');
    card.className = 'grid-item';
    const cardDetails = arr[i];
    card.innerHTML = `
    <img src=${cardDetails['Featured image'].mobile.src} alt=${cardDetails['Featured image'].alt} width class="project-cards-mobile">
    <img class='project-cards-desktop' src=${cardDetails['Featured image'].mobile.src} alt=${cardDetails['Featured image'].alt}>
    <div class="image-text flex">
      <div>
        <h3 class="bold-text flex"></h3>
      </div>
      <p class="works-description"></p>
      <ul class="competencies flex">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div><button type="button" class="btn-type-b flex">See project</button></div>`;
    cardsContainer.appendChild(card);
  }
  return cardsContainer;
}

export { recurringCards, cardsContainer } ;