const mobileVersionContainer = document.querySelector('[data-main]');

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
              <li>${details.technologies.tech3}</li>
            </ul>
            <div class="popup-body flex">
              <img src=${details['Featured image'].mobile.src} alt="" class="popup-image popup-mobile">
              <img src=${details['Featured image'].desktop.src} alt="" class="popup-image popup-desktop">
              <div class="side-text">
                <div class="works-description popup-text">${details.description}</div>
                <div class="demoButtons flex">
                  <a target="_blank" href=${details['Link to live version']} class="btn-type-a">See live <img src="images/export-icon.png" alt="" width='13'></a>
                  <a target="_blank" href=${details['Link to source']} class="btn-type-a">See source <img src="images/github-icon.png" alt="" width='13'></a>
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

export default loopButton;