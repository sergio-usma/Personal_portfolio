// DOM  items
const header = document.querySelector("#header");
const burger = document.querySelector("#burger");

let showMenu = false;

function toggleMenu() {
  if (!showMenu && window.innerWidth < 600) {
    header.classList.remove("header");
    header.classList.add("header-active");
    burger.classList.remove("burger");
    burger.classList.add("burger-active");
    document.body.style.overflowY = "hidden";

    // set  menu state
    showMenu = true;
  } else {
    header.classList.remove("header-active");
    header.classList.add("header");
    burger.classList.remove("burger-active");
    burger.classList.add("burger");
    document.body.style.overflowY = "auto";

    // Set menu state
    showMenu = false;
  }
}
burger.addEventListener("click", toggleMenu);

/* --------------------  CARD POPUPs ----------------------*/
/*---------------------------------------------------------*/

const projectsArray = [
  {
    name: "Multi-Post Stories Gain+Glory",
    imgMobile: "url('img/portfolioMobile1.png')",
    imgDesktop: "url('img/portfolioDesktop1.png')",
    techTags: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/user/project1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    imgMobile: "url('img/portfolioMobile1.png')",
    imgDesktop: "url('img/portfolioDesktop1.png')",
    techTags: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/user/project1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    imgMobile: "url('img/portfolioMobile1.png')",
    imgDesktop: "url('img/portfolioDesktop1.png')",
    techTags: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/user/project1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    imgMobile: "url('img/portfolioMobile1.png')",
    imgDesktop: "url('img/portfolioDesktop1.png')",
    techTags: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/user/project1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    imgMobile: "url('img/portfolioMobile1.png')",
    imgDesktop: "url('img/portfolioDesktop1.png')",
    techTags: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/user/project1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    imgMobile: "url('img/portfolioMobile1.png')",
    imgDesktop: "url('img/portfolioDesktop1.png')",
    techTags: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/user/project1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
];

/*---------------------------------------------------------*/
/*---------------------- POST CREATION --------------------*/
/*---------------------------------------------------------*/

for (let i = 0; i < projectsArray.length; i++) {
  const projectsWrapper =
    document.getElementsByClassName("projects__wrapper")[0];

  const projectCard = document.createElement("article");
  projectCard.classList.add("project__card", "card" + i);
  //     Space for image
  /*-----------------*/
  const projectCardWrapper = document.createElement("div");
  projectCardWrapper.classList.add("project__card__wrapper");
  projectCard.appendChild(projectCardWrapper);

  const projectCardTitle = document.createElement("h4");
  projectCardTitle.classList.add("project__card__title");
  projectCardTitle.innerHTML = projectsArray[i].name;
  projectCardWrapper.appendChild(projectCardTitle);

  const projectCardTags = document.createElement("ul");
  projectCardTags.classList.add("project__card__tags");
  projectCardWrapper.appendChild(projectCardTags);

  for (let j = 0; j < projectsArray[i].techTags.length; j++) {
    const projectCardTag = document.createElement("li");
    projectCardTag.innerHTML = projectsArray[i].techTags[j];
    projectCardTags.appendChild(projectCardTag);
  }
  const projectCardButton = document.createElement("button");
  projectCardButton.classList.add("project__card__button");
  projectCardButton.setAttribute("type", "button");
  projectCardButton.innerHTML = "See Project";
  projectCardWrapper.appendChild(projectCardButton);

  projectsWrapper.appendChild(projectCard);
}

/*---------------------------------------------------------*/
/*-------------------- POPUP CREATION ---------------------*/
/*---------------------------------------------------------*/

function popupWindows() {
  const projectsWrapper =
    document.getElementsByClassName("projects__wrapper")[0];

  const projectPopup = document.createElement("div");
  projectPopup.classList.add("project__popup");

  const projectPopupWrapper = document.createElement("div");
  projectPopupWrapper.classList.add("project__popup__wrapper");
  projectPopup.appendChild(projectPopupWrapper);

  const projectPopupImg = document.createElement("div");
  projectPopupImg.classList.add("project__popup__img");
  if (window.innerWidth < 600) {
    // Set background image for small screens
    projectPopupImg.style.backgroundImage = projectsArray[0].imgMobile;
  } else {
    // Set background image for larger screens
    projectPopupImg.style.backgroundImage = projectsArray[0].imgDesktop;
  }
  projectPopupWrapper.appendChild(projectPopupImg);

  const projectPopupClose = document.createElement("button");
  projectPopupClose.classList.add("project__popup__close");
  projectPopupClose.setAttribute("type", "button");
  projectPopupClose.innerHTML = "X";
  projectPopupImg.appendChild(projectPopupClose);

  //Space for personalize pop-up

  const projectPopupTitle = document.createElement("h3");
  projectPopupTitle.classList.add("project__popup__title");
  projectPopupTitle.innerHTML = projectsArray[0].name;
  projectPopupWrapper.appendChild(projectPopupTitle);

  const projectPopupTechTags = document.createElement("ul");
    projectPopupTechTags.classList.add("project__popup__techTags","project__card__tags");
    projectPopupWrapper.appendChild(projectPopupTechTags);

    const projectPopupDescription = document.createElement("p");
    projectPopupDescription.classList.add("project__popup__description");
    projectPopupDescription.innerHTML = projectsArray[0].description;
    projectPopupWrapper.appendChild(projectPopupDescription);

    const projectPopupButtons = document.createElement("div");
    projectPopupButtons.classList.add("project__popup__buttons");
    projectPopupWrapper.appendChild(projectPopupButtons);

    const projectPopupLiveLink = document.createElement("a");
    projectPopupLiveLink.classList.add("project__popup__liveLink");
    projectPopupLiveLink.setAttribute("href", projectsArray[0].liveLink);
    projectPopupLiveLink.setAttribute("target", "_blank");
    projectPopupLiveLink.innerHTML = "See Live";
    projectPopupButtons.appendChild(projectPopupLiveLink);

    const projectPopupSourceLink = document.createElement("a");
    projectPopupSourceLink.classList.add("project__popup__sourceLink");
    projectPopupSourceLink.setAttribute("href", projectsArray[0].sourceLink);
    projectPopupSourceLink.setAttribute("target", "_blank");
    projectPopupSourceLink.innerHTML = "See Source";
    projectPopupButtons.appendChild(projectPopupSourceLink);

    projectsWrapper.appendChild(projectPopup);


  const { body } = document;
  projectPopup.classList.toggle('popup-active');
  body.style.overflow = (body.style.overflow === 'hidden') ? 'auto' : 'hidden'; // Toggle body overflow

  document.getElementById('popup-close').addEventListener('click', () => {
    projectsWrapper.removeChild(projectPopup);
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
  });
  window.onresize = function (event) {
    projectsWrapper.removeChild(projectPopup);
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
    popupWindows();
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const gridButtons = document.querySelectorAll('.project__card__button');
  gridButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      popupWindows();
    });
  });
});


