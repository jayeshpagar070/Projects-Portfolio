let dayNights = document.querySelector(".dayNights");
let banner = document.querySelector(".banner");
dayNights.addEventListener("click", () => {
    banner.classList.toggle("night");
})

let typingEffect = new Typed("#text", {
    strings: ["Jayesh Pagar", "Software Engineer", "Designer", "Coder"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
});