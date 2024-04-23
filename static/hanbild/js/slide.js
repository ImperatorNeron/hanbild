function checkSVGAnimation() {
    var svgContainer = document.querySelector('.road-svg');
    var svgElement = document.getElementById('svg1');
    var an_stroke = document.getElementById('an_stroke');
    var svgElement2 = document.getElementById('svg2');
    var an_stroke2 = document.getElementById('an_stroke2');

    if (isElementInViewportPlus(svgElement, 10)) {
        an_stroke.beginElement();
        an_stroke2.beginElement();
        svgContainer.style.opacity = '1';
        window.removeEventListener('scroll', checkSVGAnimation);
    }
}

function isElementInViewportPlus(el, offset) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top - offset <= windowHeight &&
        rect.bottom >= 0
    );
}

window.addEventListener('scroll', checkSVGAnimation);

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleVisibility() {
    var points = document.querySelectorAll('.point');
    points.forEach(function (point) {
        if (isElementInViewport(point)) {
            point.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleVisibility);
window.addEventListener('load', handleVisibility);


new Swiper('.reviews-swiper-container', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    autoplay: {
        delay: 7000
    },
});