const carouselImages = document.querySelectorAll(".carousel-item img");
const imageModalBody = document.querySelector("#imageModalBody");
const imageModal = document.querySelector("#image-modal");
const topNavbar = document.querySelector("#top-navbar");
const dots = document.querySelectorAll(".dot");
const projectContainers = document.querySelectorAll(".project-container");
const skills = document.getElementById("skills");
const skillsWrapper = document.getElementById("skills-wrapper");
const skillsLogos = document.getElementById("skills-logos-wrapper");
const projects = document.getElementById("projects");
const aboutParagraphs = document.querySelectorAll("#about p");

// carousel
carouselImages.forEach(imgElement => {
    let id = imgElement.alt;
    imgElement.onclick = () => {
        const image = new Image();
        image.src = imgElement.src;
        image.alt = id + "modal";
        image.style.height = "90%";
        image.style.width = "90%";
        imageModalBody.querySelector("img").remove();
        imageModalBody.append(image);
        const imageModal = new bootstrap.Modal("#image-modal", {});
        imageModal.toggle();
    };
});

// scroll
document.onscroll = () => {
    window.scrollY > 50
        ? topNavbar.classList.add("fixed-top")
        : topNavbar.classList.remove("fixed-top");

    const containerHeight = document.querySelectorAll(".project-container")[0].clientHeight;
    const projectsHeight = projects.offsetHeight - 400;

    for (let i = 0; i < projectContainers.length; i++) {
        window.scrollY > projectsHeight + containerHeight * i
            ? projectContainers[i].classList.add("slide")
            : projectContainers[i].classList.remove("slide");
    }
};

// skills.addEventListener("mouseover", () => {
//     skillsWrapper.style.width = 0;
//     skillsLogos.style.width = "100%";
// });

let flag = false;
setInterval(() => {
    if (!flag) {
        skillsWrapper.style.transitionDelay = "0s";
        skillsLogos.style.transitionDelay = "1s";
        skillsWrapper.style.width = 0;
        skillsLogos.style.width = "100%";
        flag = true;
    } else {
        skillsWrapper.style.transitionDelay = "1s";
        skillsLogos.style.transitionDelay = "0s";
        skillsWrapper.style.width = "100%";
        skillsLogos.style.width = 0;
        flag = false;
    }
}, 4000);
