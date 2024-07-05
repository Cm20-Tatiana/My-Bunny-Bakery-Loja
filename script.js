let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const numSlides = slides.length;

    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = numSlides - 1;
    } else if (slideIndex >= numSlides) {
        slideIndex = 0;
    }

    const slideWidth = slides[0].clientWidth;
    document.querySelector('.gallery-container').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

document.addEventListener('DOMContentLoaded', function() {
    var scrollBtn = document.querySelector('.scroll-to-top-btn');
    var scrollDiv = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollDiv.style.display = 'block';
        } else {
            scrollDiv.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.getElementById('hamburger-menu').addEventListener('click', function() {
    var mobileNavLinks = document.getElementById('mobile-nav-links');
    if (mobileNavLinks.style.display === 'flex') {
        mobileNavLinks.style.display = 'none';
    } else {
        mobileNavLinks.style.display = 'flex';
    }
});
