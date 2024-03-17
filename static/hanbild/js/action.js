function startAnimation() {
    var pulseButton = document.querySelector('.pulsating-element');
    pulseButton.style.animation = 'pulse linear 1s infinite';
    setTimeout(function() {
        pulseButton.style.animation = 'none';
        setTimeout(startAnimation, 3000); 
    }, 1000);
}

startAnimation(); 

function toggleSubmenu(id) {
    var submenu = document.getElementById(id);
    if (submenu.style.display === "none") {
        submenu.style.display = "flex";
        localStorage.setItem(id, "open");
    } else {
        submenu.style.display = "none";
        localStorage.setItem(id, "closed");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var submenus = document.querySelectorAll('.filtermenu');
    submenus.forEach(function(submenu) {
        var id = submenu.id;
        var state = localStorage.getItem(id);
        if (state === "open") {
            submenu.style.display = "flex";
        } else if (state === "closed") {
            submenu.style.display = "none";
        }
    });
});

let sliders = document.querySelectorAll(".my-slider");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 60;
let sliderTrack = document.querySelector(".my-slider-track");
let sliderMaxValue = sliders[0].max;

sliders[0].addEventListener("input", slideOne);
sliders[1].addEventListener("input", slideTwo);

function slideOne() {
    if (parseInt(sliders[1].value) - parseInt(sliders[0].value) <= minGap) {
        sliders[0].value = parseInt(sliders[1].value) - minGap;
    }
    displayValOne.textContent = `${8 + sliders[0].value / 60}:00`;
    fillColor();
}

function slideTwo() {
    if (parseInt(sliders[1].value) - parseInt(sliders[0].value) <= minGap) {
        sliders[1].value = parseInt(sliders[0].value) + minGap;
    }
    displayValTwo.textContent = `${8 + sliders[1].value / 60}:00`;
    fillColor();
}

function fillColor() {
    percent1 = (sliders[0].value / sliderMaxValue) * 100;
    percent2 = (sliders[1].value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , black ${percent1}% , black ${percent2}%, #dadae5 ${percent2}%)`;
}

const autoFillBtn = document.getElementById('auto-fill-btn');
const customBtn = document.getElementById('custom-btn');
const cardsGrid = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');
const normalizationImgs = document.querySelectorAll('.normalization-img');

function applyStyles(gridColumns, cardFlexDirection, imgWidth, imgHeight) {
    cardsGrid.style.gridTemplateColumns = gridColumns;
    cards.forEach(card => {
        card.style.flexDirection = cardFlexDirection;
    });
    normalizationImgs.forEach(img => {
        img.style.width = imgWidth;
        img.style.height = imgHeight;
    });
}

function saveStateToLocalStorage(gridColumns, cardFlexDirection, imgWidth, imgHeight) {
    localStorage.setItem('gridColumns', gridColumns);
    localStorage.setItem('cardFlexDirection', cardFlexDirection);
    localStorage.setItem('imgWidth', imgWidth);
    localStorage.setItem('imgHeight', imgHeight);
}

function restoreStateFromLocalStorage() {
    const gridColumns = localStorage.getItem('gridColumns') || 'repeat(auto-fill, minmax(300px, 1fr))';
    const cardFlexDirection = localStorage.getItem('cardFlexDirection') || 'column';
    const imgWidth = localStorage.getItem('imgWidth') || '100%';
    const imgHeight = localStorage.getItem('imgHeight') || '230px';

    applyStyles(gridColumns, cardFlexDirection, imgWidth, imgHeight);
}

restoreStateFromLocalStorage();

autoFillBtn.addEventListener('click', function() {
    const gridColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
    const cardFlexDirection = 'column';
    const imgWidth = '100%';
    const imgHeight = '230px';

    applyStyles(gridColumns, cardFlexDirection, imgWidth, imgHeight);
    saveStateToLocalStorage(gridColumns, cardFlexDirection, imgWidth, imgHeight);
});

customBtn.addEventListener('click', function() {
    const gridColumns = '1fr';
    const cardFlexDirection = 'row';
    const imgWidth = '87%';
    const imgHeight = '340px';

    applyStyles(gridColumns, cardFlexDirection, imgWidth, imgHeight);
    saveStateToLocalStorage(gridColumns, cardFlexDirection, imgWidth, imgHeight);
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
                