const nav = document.querySelector("nav");
window.addEventListener("scroll", function() {
    nav.classList.toggle ("sticky", window.scrollY > 5);
});

let hamburger = document.querySelector('#iconnav');
let navbar = document.querySelector('.navlist');

hamburger.onclick = () => {
    hamburger.classList.toggle('uil-times');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    hamburger.classList.remove('uil-times');
    navbar.classList.remove('open');
}

// home page
let slideIndex = 1;
showSlide(slideIndex);

function dotslide(n){
showSlide(slideIndex = n);
}

setInterval((n) => {
    showSlide(slideIndex += 1);
}, 4000);

function showSlide(n) {
let i;
let slides = document.getElementsByClassName("imageslide");
let dot = document.getElementsByClassName("dot");
            
if (n > slides.length) {
    slideIndex = 1;
}

if (n < 1) {
    slideIndex = slides.length;
}

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
}

// document.onkeydown = () => {
//     b = window.event;
//     if(b.key === 'ArrowRight'){
//         showSlide(slideIndex += 1);
//     }

//     if(b.key === 'ArrowLeft'){
//         showSlide(slideIndex -= 1);
//     }
// }

slides[slideIndex - 1].style.display = "block";

dot[slideIndex - 1].className += " active";

}
