const cardsContainer = document.createElement('div');
cardsContainer.className = 'grid-container';
cardsContainer.id = 'projects-wrapper';

function recurringCards(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const card = document.createElement('div');
    card.className = 'grid-item';
    const cardDetails = arr[i];
    card.innerHTML = `
    <img src=${cardDetails['Featured image'].mobile.src} alt=${cardDetails['Featured image'].alt} width class="project-cards-mobile">
    <img class='project-cards-desktop' src=${cardDetails['Featured image'].mobile.src} alt=${cardDetails['Featured image'].alt}>
    <div><button type="button" class="btn-type-b flex">See project</button></div>`;
    cardsContainer.appendChild(card);
  }
  return cardsContainer;
}

export { recurringCards, cardsContainer };