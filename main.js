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



