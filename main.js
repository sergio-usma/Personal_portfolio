// DOM  items
const viewportWidth = window.innerWidth;
const header = document.querySelector('#header');
const burger = document.querySelector('#burger');

let showMenu = false;

function toggleMenu() {
  if (!showMenu && viewportWidth < 600) {
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

/* --------------------  CARD POPUPs ----------------------*/
/*---------------------------------------------------------*/

const mediaQueryBr = () => {
  if (viewportWidth < 600) {
    return '<br><br>';
  }
  return '';
};

const projectsArray = [
  {
    name: 'The World Tourism Summit 2023',
    imgMobile: './assets/img/tourismSummit_mb.png',
    imgDesktop: './assets/img/tourismSummit_mb.png',
    techTags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://sergio-usma.github.io/First_capstone_project/',
    sourceLink: 'https://github.com/sergio-usma/First_capstone_project',
    description: 'The first capstone project for \'The Portal\' module in the Microverse curriculum is a dynamic website utilizing HTML, CSS, and basic JavaScript. The project showcases the comprehensive details of The World Tourism Summit 2023, scheduled to be held in Bogota, Colombia, from November 27th to 29th at CORFERIAS.',
  },
  {
    name: 'Awesome To-Do List',
    imgMobile: './assets/img/awesomeList_mb.png',
    imgDesktop: './assets/img/awesomeList_mb.png',
    techTags: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    liveLink: 'https://sergio-usma.github.io/To-Do-List/',
    sourceLink: 'https://github.com/sergio-usma/To-Do-List',
    description: 'This is a project for lightweight task management application using a To-Do List. It was built using HTML, CSS, and JavaScript. It allows users to add, delete, and mark tasks as complete, with data stored locally. It serves as an introduction to web development and DOM manipulation.',
  },
  {
    name: 'Wall of Wonder by Frontend Masters',
    imgMobile: './assets/img/flexProject_mb.png',
    imgDesktop: './assets/img/flexProject_mb.png',
    techTags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://sergio-usma.github.io/flexbox-test/',
    sourceLink: 'https://github.com/sergio-usma/flexbox-test',
    description: 'This repository features a personal project that demonstrates the application of CSS grid and flexbox techniques. Explore diverse layouts and responsive designs, showcasing the versatility and power of these CSS tools. Delve into the code to discover visually appealing and dynamic web layouts created using grid and flexbox.',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/img/cardMobile.jpg',
    imgDesktop: './assets/img/cardDesktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.${mediaQueryBr()}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/img/cardMobile.jpg',
    imgDesktop: './assets/img/cardDesktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.${mediaQueryBr()}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
  },
  {
    name: 'Keeping track of hundreds of components',
    imgMobile: './assets/img/cardMobile.jpg',
    imgDesktop: './assets/img/cardDesktop.png',
    techTags: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.${mediaQueryBr()}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
  },
];

/*---------------------------------------------------------*/
/* ---------------------- POST CREATION --------------------*/
/*---------------------------------------------------------*/

for (let i = 0; i < projectsArray.length; i += 1) {
  const projectsWrapper = document.getElementsByClassName('projects__wrapper')[0];

  const projectCard = document.createElement('article');
  projectCard.classList.add('project__card', `card${i}`);
  //     Space for image

  const projectCardImage = document.createElement('img');
  projectCardImage.classList.add('project__card__image');
  projectCardImage.setAttribute('src', projectsArray[i].imgMobile);
  projectCardImage.setAttribute('alt', projectsArray[i].name);
  projectCard.appendChild(projectCardImage);

  const projectCardWrapper = document.createElement('div');
  projectCardWrapper.classList.add('project__card__wrapper');
  projectCard.appendChild(projectCardWrapper);

  const projectCardTitle = document.createElement('h4');
  projectCardTitle.classList.add('project__card__title');
  projectCardTitle.innerHTML = projectsArray[i].name;
  projectCardWrapper.appendChild(projectCardTitle);

  const projectCardTags = document.createElement('ul');
  projectCardTags.classList.add('project__card__tags');
  projectCardWrapper.appendChild(projectCardTags);

  for (let j = 0; j < projectsArray[i].techTags.length; j += 1) {
    const projectCardTag = document.createElement('li');
    projectCardTag.innerHTML = projectsArray[i].techTags[j];
    projectCardTags.appendChild(projectCardTag);
  }
  const projectCardButton = document.createElement('button');
  projectCardButton.classList.add('project__card__button');
  projectCardButton.setAttribute('type', 'button');
  projectCardButton.innerHTML = 'See Project';

  projectCardWrapper.appendChild(projectCardButton);

  projectsWrapper.appendChild(projectCard);
}

/*---------------------------------------------------------*/
/* -------------------- POPUP CREATION ---------------------*/
/*---------------------------------------------------------*/

function createPopup(index) {
  const project = projectsArray[index];
  const projectsWrapper = document.getElementsByClassName('projects__wrapper')[0];

  // Create popup window
  const popupWindow = document.createElement('div');
  popupWindow.setAttribute('id', 'popup__window');
  popupWindow.classList.add('popup__window');

  // Create popup content
  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');
  popupWindow.appendChild(popupContent);

  // Create popup content wrapper
  const popupContentWrapper = document.createElement('div');
  popupContentWrapper.classList.add('popup-content__wrapper');
  popupContent.appendChild(popupContentWrapper);

  // Create popup close button
  const popupCloseButton = document.createElement('div');
  popupCloseButton.setAttribute('id', 'popup__close__button');
  popupContentWrapper.appendChild(popupCloseButton);

  // Create popup close button icon
  const popupCloseButtonBar1 = document.createElement('span');
  popupCloseButtonBar1.classList.add('bar');
  popupCloseButton.appendChild(popupCloseButtonBar1);

  const popupCloseButtonBar2 = document.createElement('span');
  popupCloseButtonBar2.classList.add('bar');
  popupCloseButton.appendChild(popupCloseButtonBar2);

  // Generate popup picture tag
  const popupPicture = document.createElement('picture');
  popupPicture.setAttribute('id', 'popup__picture');
  popupPicture.classList.add('popup__picture');
  popupContentWrapper.appendChild(popupPicture);

  // Generate popup source tag
  const popupSource = document.createElement('source');
  popupSource.setAttribute('media', '(min-width: 600px)');
  popupSource.setAttribute('srcset', project.imgDesktop);
  popupPicture.appendChild(popupSource);

  // Generate popup image tag
  const popupImage = document.createElement('img');
  popupImage.setAttribute('src', project.imgMobile);
  popupImage.setAttribute('alt', 'Project Image');
  popupPicture.appendChild(popupImage);

  // Generate popup title
  const popupTitle = document.createElement('h3');
  popupTitle.classList.add('popup__title');
  popupTitle.innerHTML = project.name;
  popupContentWrapper.appendChild(popupTitle);

  // Generate popup card tags
  const popupCardTags = document.createElement('ul');
  popupCardTags.setAttribute('id', 'popup__card__tags');
  popupCardTags.classList.add('project__card__tags');
  popupContentWrapper.appendChild(popupCardTags);

  // generate popup card tags list
  for (let j = 0; j < project.techTags.length; j += 1) {
    const popupCardTag = document.createElement('li');
    popupCardTag.innerHTML = project.techTags[j];
    popupCardTags.appendChild(popupCardTag);
  }

  // Generate popup description
  const popupDescription = document.createElement('p');
  popupDescription.setAttribute('id', 'popup__description');
  popupDescription.classList.add('popup__description');
  popupDescription.innerHTML = project.description;
  popupContentWrapper.appendChild(popupDescription);

  // Generate popup buttons container
  const popupButtonsContainer = document.createElement('div');
  popupButtonsContainer.classList.add('popup__buttons__container');
  popupContentWrapper.appendChild(popupButtonsContainer);

  // Generate popup live link button
  const popupLiveLinkButton = document.createElement('button');
  popupLiveLinkButton.setAttribute('id', 'popup__live__link__button');
  popupLiveLinkButton.setAttribute('type', 'button');
  popupLiveLinkButton.innerHTML = 'See Live';
  popupButtonsContainer.appendChild(popupLiveLinkButton);

  // Add popup live link button icon
  const popupLiveLinkButtonIcon = document.createElement('img');
  popupLiveLinkButtonIcon.setAttribute('src', './assets/ico/live_icon.png');
  popupLiveLinkButtonIcon.setAttribute('alt', 'Live Link Icon');
  popupLiveLinkButton.appendChild(popupLiveLinkButtonIcon);

  // Generate popup source link button
  const popupSourceLinkButton = document.createElement('button');
  popupSourceLinkButton.setAttribute('id', 'popup__source__link__button');
  popupSourceLinkButton.setAttribute('type', 'button');
  popupSourceLinkButton.innerHTML = 'See Source';
  popupButtonsContainer.appendChild(popupSourceLinkButton);

  // Add popup source link button icon
  const popupSourceLinkButtonIcon = document.createElement('img');
  popupSourceLinkButtonIcon.setAttribute(
    'src',
    './assets/ico/github_white.png',
  );
  popupSourceLinkButtonIcon.setAttribute('alt', 'Source Link Icon');
  popupSourceLinkButton.appendChild(popupSourceLinkButtonIcon);

  // Append popup window to projects wrapper
  projectsWrapper.appendChild(popupWindow);

  // Append popup window to body
  document.body.appendChild(popupWindow);

  // Add event listener to popup close button
  popupCloseButton.addEventListener('click', () => {
    popupWindow.style.display = 'none';
  });

  // Add event listener to popup live link button
  popupLiveLinkButton.addEventListener('click', () => {
    window.open(project.liveLink);
  });

  // Add event listener to popup source link button
  popupSourceLinkButton.addEventListener('click', () => {
    window.open(project.sourceLink);
  });
}

/* ----------- ADD EVENT LISTENER TO PROJECT CARD BUTTONS----------*/
document.addEventListener('DOMContentLoaded', () => {
  const projectCardButtons = document.querySelectorAll('.project__card__button');

  for (let i = 0; i < projectCardButtons.length; i += 1) {
    ((index) => {
      projectCardButtons[index].addEventListener('click', () => {
        createPopup(index);
        const popupWindow = document.getElementsByClassName('popup__window')[index];
        popupWindow.style.display = 'block';
      });
    })(i);
  }
});

/* ----------- FORM VALIDATION ----------*/
const fullName = document.getElementById('full-name');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');

if (viewportWidth < 600) {
  firstName.removeAttribute('required');
  lastName.removeAttribute('required');
} else {
  fullName.removeAttribute('required');
}

/* ------- ERROR MESSAGE ------*/
function errorMessage() {
  const errorWindow = document.createElement('div');
  errorWindow.setAttribute('id', 'error-window');
  const errorMsg = document.createElement('div');
  errorMsg.setAttribute('id', 'error-message');
  errorMsg.setAttribute('class', 'error-message');
  const errorMsgText = document.createTextNode(
    'Your email should have only lowercase letters',
  );
  errorMsg.appendChild(errorMsgText);
  errorWindow.appendChild(errorMsg);
  email.after(errorWindow);
}

/* ------- VALIDATE EMAIL FORMAT -------*/
email.addEventListener('input', () => {
  const emailValue = email.value;
  const contactForm = document.getElementsByClassName('contact__form')[0];
  const emailError = document.getElementById('error-message');
  if (emailValue !== emailValue.toLowerCase()) {
    if (contactForm.contains(emailError) === false) {
      errorMessage();
    }
  } else if (document.body.contains(emailError) === true) {
    emailError.remove();
  }
});

/* ------- PREVENT SUBMIT FORM WITH ERROR ----------*/
document
  .getElementsByClassName('contact__form')[0]
  .addEventListener('submit', (event) => {
    const emailValue = document.getElementById('email').value;
    if (emailValue !== emailValue.toLowerCase()) {
      event.preventDefault();
    }
  });

/* ------- SAVE INPUT VALUES TO LOCAL STORAGE -------*/
const contactForm = document.getElementsByClassName('contact__form')[0];
contactForm.addEventListener('submit', () => {
  const fullNameValue = document.getElementById('full-name').value;
  const firstNameValue = document.getElementById('firstname').value;
  const lastNameValue = document.getElementById('lastname').value;
  const emailValue = document.getElementById('email').value;
  const messageValue = document.getElementById('message').value;
  localStorage.setItem('fullName', fullNameValue);
  localStorage.setItem('firstName', firstNameValue);
  localStorage.setItem('lastName', lastNameValue);
  localStorage.setItem('email', emailValue);
  localStorage.setItem('message', messageValue);
});

/* ------- GET INPUT VALUES FROM LOCAL STORAGE -------*/
window.addEventListener('load', () => {
  const fullNameValue = localStorage.getItem('fullName');
  const firstNameValue = localStorage.getItem('firstName');
  const lastNameValue = localStorage.getItem('lastName');
  const emailValue = localStorage.getItem('email');
  const messageValue = localStorage.getItem('message');

  if (fullNameValue !== null) {
    document.getElementById('full-name').value = fullNameValue;
  } else {
    document.getElementById('full-name').value = '';
  }

  if (firstNameValue !== null) {
    document.getElementById('firstname').value = firstNameValue;
  } else {
    document.getElementById('firstname').value = '';
  }

  if (lastNameValue !== null) {
    document.getElementById('lastname').value = lastNameValue;
  } else {
    document.getElementById('lastname').value = '';
  }

  document.getElementById('email').value = emailValue;
  document.getElementById('message').value = messageValue;
});
