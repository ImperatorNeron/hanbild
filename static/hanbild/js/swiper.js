new Swiper('.image-slider', {
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    },
    spaceBetween: 5,
    loop: true,
    slidesPerView: 1,
    thumbs: {
        swiper: {
            el: '.image-mini-slider',
            slidesPerView: 5,
            spaceBetween: 5,
        }
    },
});

var miniSlides = document.querySelectorAll('.image-mini-slider__slide');

miniSlides.forEach(function (slide) {
    var content = slide.querySelector('.image-mini-slider__image').innerHTML;
    if (content.includes('<iframe')) {
        var imageSrc = slide.querySelector('iframe').getAttribute('src');
        var thumbnailSrc = getThumbnail(imageSrc);
        slide.querySelector('.image-mini-slider__image').innerHTML = '<img src="' + thumbnailSrc + '" alt="Відео">';
    }
});

function getThumbnail() {
    return 'img/play.svg';
}

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-slider__image img');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    images.forEach(img => {
        img.addEventListener('click', function () {
            const enlargedImg = img.cloneNode(true);
            enlargedImg.classList.add('image-slider__image--expanded');
            overlay.appendChild(enlargedImg);
            overlay.style.display = 'block';

            const closeBtn = document.querySelector('.close-btn');
            closeBtn.style.display = 'block';

            closeBtn.addEventListener('click', function () {
                overlay.style.display = 'none';
                overlay.innerHTML = '';
                closeBtn.style.display = 'none';
            });
        });
    });

    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
        overlay.innerHTML = '';
        document.querySelector('.close-btn').style.display = 'none';
    });
});