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
  } return '';
};

const projectsArray = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/img/cardMobile.png',
    imgDesktop: './assets/img/cardDesktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.${
        mediaQueryBr()
      }Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/img/cardMobile.png',
    imgDesktop: './assets/img/cardDesktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.${
        mediaQueryBr()
      }Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/img/cardMobile.png',
    imgDesktop: './assets/img/cardDesktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.${
        mediaQueryBr()
      }Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/img/cardMobile.png',
    imgDesktop: './assets/img/cardDesktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.${
        mediaQueryBr()
      }Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/img/cardMobile.png',
    imgDesktop: './assets/img/cardDesktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.${
        mediaQueryBr()
      }Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/img/cardMobile.png',
    imgDesktop: './assets/img/cardDesktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.${
        mediaQueryBr()
      }Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
  },
  {
    name: 'Keeping track of hundreds of components',
    imgMobile: './assets/img/cardMobile.png',
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
    description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.${
        mediaQueryBr()
      }Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
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
  /*-----------------*/
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

function createPopup() {
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
  popupSource.setAttribute('srcset', projectsArray[6].imgDesktop);
  popupPicture.appendChild(popupSource);

  // Generate popup image tag
  const popupImage = document.createElement('img');
  popupImage.setAttribute('src', projectsArray[6].imgMobile);
  popupImage.setAttribute('alt', 'Project Image');
  popupPicture.appendChild(popupImage);

  // Generate popup title
  const popupTitle = document.createElement('h3');
  popupTitle.classList.add('popup__title');
  popupTitle.innerHTML = projectsArray[6].name;
  popupContentWrapper.appendChild(popupTitle);

  // Generate popup card tags
  const popupCardTags = document.createElement('ul');
  popupCardTags.setAttribute('id', 'popup__card__tags');
  popupCardTags.classList.add('project__card__tags');
  popupContentWrapper.appendChild(popupCardTags);

  // generate popup card tags list
  for (let j = 0; j < projectsArray[6].techTags.length; j += 1) {
    const popupCardTag = document.createElement('li');
    if (viewportWidth > 600) {
      popupCardTag.innerHTML = projectsArray[6].techTags[j];
    } else {
      popupCardTag.innerHTML = projectsArray[0].techTags[j];
    }
    popupCardTags.appendChild(popupCardTag);
  }

  // Generate popup description
  const popupDescription = document.createElement('p');
  popupDescription.setAttribute('id', 'popup__description');
  popupDescription.classList.add('popup__description');
  popupDescription.innerHTML = projectsArray[6].description;
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
    window.open(projectsArray[6].liveLink);
  });

  // Add event listener to popup source link button
  popupSourceLinkButton.addEventListener('click', () => {
    window.open(projectsArray[6].sourceLink);
  });
}

/* ----------- ADD EVENT LISTENER TO PROJECT CARD BUTTONS----------*/
document.addEventListener('DOMContentLoaded', () => {
  const projectCardButtons = document.getElementsByClassName(
    'project__card__button',
  );
  for (let i = 0; i < projectCardButtons.length; i += 1) {
    projectCardButtons[i].addEventListener('click', () => {
      createPopup();
      const popupWindow = document.getElementById('popup__window');
      popupWindow.style.display = 'block';
    });
  }
});
