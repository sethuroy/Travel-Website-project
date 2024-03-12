let serachBtn = document.querySelector('#search-btn');
let serachBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar'); 
let navbar = document.querySelector('.navbar'); 
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    serachBtn.classList.remove('fa-times')
    serachBar.classList.remove('active')
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
    loginForm.classList.remove('active')
};

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
});

serachBtn.addEventListener('click', () => {
    serachBtn.classList.toggle('fa-times')
    serachBar.classList.toggle('active')
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active')
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active')
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', ()=> {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

// var swiper = new swiper(".review-slider", {
//     spaceBetween: 20,
//     loop: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         640: {
//             slidesPerview: 1,
//         },
//         768: {
//             slidesPerview: 2,
//         },  
//         1024: {
//             slidesPerview: 3,
//         },
//     },
// });

// var swiper = new swiper(".brand-container", {
//     spaceBetween: 20,
//     loop: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         450: {
//             slidesPerview: 1,
//         },
//         768: {
//             slidesPerview: 2,
//         },  
//         991: {
//             slidesPerview: 2,
//         }, 
//         1200: {
//             slidesPerview: 3,
//         },
//     },
// });