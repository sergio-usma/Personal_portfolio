// Dom  items
const header = document.querySelector('#header');
const burger = document.querySelector('#burger');

let showMenu = false;

function toggleMenu() {
  if (!showMenu && window.innerWidth < 600) {
    header.classList.remove('header');
    header.classList.add('header-active');
    burger.classList.remove('burger');
    burger.classList.add('burger-active');
    document.body.style.overflowY = 'hidden';

    // set  menu state
    showMenu = true;
  } else {
    header.classList.remove('header-active');
    header.classList.add('header');
    burger.classList.remove('burger-active');
    burger.classList.add('burger');
    document.body.style.overflowY = 'auto';

    // Set menu state
    showMenu = false;
  }
}
burger.addEventListener('click', toggleMenu);



const cards = document.querySelectorAll('.project__card');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const closeButton = document.getElementById('close-button');
const cardArray = [];

// Store card information in an array
cards.forEach((card, index) => {
  const cardInfo = {
    title: card.querySelector('.project__card__title').textContent,
    description: card.querySelector('.project__card__text').innerText,
  };
  cardArray.push(cardInfo);

  card.querySelector('.project__card__button').addEventListener('click', () => {
    openPopup(index);
  });
});

// Open the popup and display card information
function openPopup(index) {
  const cardInfo = cardArray[index];
  popupTitle.textContent = cardInfo.title;
  popupDescription.textContent = cardInfo.description;
  popup.style.display = 'block';
}

// Close the popup
function closePopup() {
  popup.style.display = 'none';
}

// Event listeners
closeButton.addEventListener('click', closePopup);
popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    closePopup();
  }
});
