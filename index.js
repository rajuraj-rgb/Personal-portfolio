navbar = document.querySelector(".nav-bar").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
    element.addEventListener("click", function () {
        navbar.forEach(nav => nav.classList.remove("active"))

        this.classList.add("active");
    })
});

const scrollDownButton = document.getElementById("scroll-down");

scrollDownButton.addEventListener("click", () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        scrollDownButton.style.opacity = '0';
    } else {
        scrollDownButton.style.opacity = '0.5';
    }
});

// window.addEventListener('resize', function() {
//     location.reload();
//   });

// const myElement = document.getElementById("about");
// const elementHeight = myElement.offsetHeight;
// console.log("Element height:", elementHeight);




