// Display current date
function showDate() {
    const dateElement = document.getElementById('currentDate');
    const today = new Date().toLocaleDateString();
    dateElement.innerText = `Date: ${today}`;
}

// Initialize Swiper.js
function initializeSwiper() {
    new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
}

// Run functions on page load
window.onload = function () {
    showDate();
    initializeSwiper();
};
