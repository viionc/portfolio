const carouselImages = document.querySelectorAll(".carousel-item img");
const imageModalBody = document.querySelector("#imageModalBody");
const imageModal = document.querySelector("#image-modal");
const topNavbar = document.querySelector("#top-navbar");
const dots = document.querySelectorAll(".dot");
const projectContainers = document.querySelectorAll(".project-container");
const skills = document.getElementById("skills");
const skillsWrapper = document.getElementById("skills-wrapper");
const skillsLogos = document.getElementById("skills-logos-wrapper");

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
        const myModalAlternative = new bootstrap.Modal("#image-modal", {});
        myModalAlternative.toggle();
    };
});

// scroll
document.onscroll = () => {
    if (window.scrollY > 50) {
        // !topNavbar.classList.contains("fixed-top") ? topNavbar.classList.add("fixed-top") : null;
        topNavbar.classList.add("fixed-top");
    } else {
        topNavbar.classList.remove("fixed-top");
    }

    if (window.scrollY > 400) {
        document.querySelectorAll(".project-container")[0].classList.add("slide");
    } else {
        document.querySelectorAll(".project-container")[0].classList.remove("slide");
    }
    if (window.scrollY > 900) {
        document.querySelectorAll(".project-container")[1].classList.add("slide");
    } else {
        document.querySelectorAll(".project-container")[1].classList.remove("slide");
    }
    if (window.scrollY > 1400) {
        document.querySelectorAll(".project-container")[2].classList.add("slide");
    } else {
        document.querySelectorAll(".project-container")[2].classList.remove("slide");
    }
    if (window.scrollY > 1800) {
        document.querySelectorAll(".project-container")[3].classList.add("slide");
    } else {
        document.querySelectorAll(".project-container")[3].classList.remove("slide");
    }
};

skillsWrapper.addEventListener("mouseover", () => {
    skillsWrapper.style.width = 0;
    skillsLogos.style.width = "100%";
});
