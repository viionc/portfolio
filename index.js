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
const about = document.querySelector("#about");

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
    const projectsHeight = projects.offsetHeight - 800;

    for (let i = 0; i < projectContainers.length; i++) {
        window.scrollY > projectsHeight + containerHeight * i
            ? projectContainers[i].classList.add("slide")
            : projectContainers[i].classList.remove("slide");
    }
};

about.querySelectorAll(".paragraph-wrapper").forEach(paragraph => {
    paragraph.addEventListener("mouseover", () => {
        paragraph.querySelector(".bar").style.minWidth = "5px";
    });
    paragraph.addEventListener("mouseout", () => {
        paragraph.querySelector(".bar").style.minWidth = "0px";
    });
});

let flag = false;
const skillsAnimation = () => {
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
    setTimeout(skillsAnimation, 4000);
};
setTimeout(skillsAnimation, 1000);
