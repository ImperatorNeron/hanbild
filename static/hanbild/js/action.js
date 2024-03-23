function setupLanguageSelection() {
    document.querySelectorAll('.language-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault()
            var languageCode = this.getAttribute('data-lang-code')
            document.querySelector('#languageForm input[name="language"]').value = languageCode
            document.getElementById('languageForm').submit()
        })
    })
}

window.addEventListener('DOMContentLoaded', setupLanguageSelection);


function startAnimation() {
    var pulseButton = document.querySelector('.pulsating-element');
    pulseButton.style.animation = 'pulse linear 1s infinite';
    setTimeout(function () {
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

document.addEventListener("DOMContentLoaded", function () {
    var submenus = document.querySelectorAll('.filtermenu');
    submenus.forEach(function (submenu) {
        var id = submenu.id;
        var state = localStorage.getItem(id);
        if (state === "open") {
            submenu.style.display = "flex";
        } else if (state === "closed") {
            submenu.style.display = "none";
        }
    });
});

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

autoFillBtn.addEventListener('click', function () {
    const gridColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
    const cardFlexDirection = 'column';
    const imgWidth = '100%';
    const imgHeight = '230px';

    applyStyles(gridColumns, cardFlexDirection, imgWidth, imgHeight);
    saveStateToLocalStorage(gridColumns, cardFlexDirection, imgWidth, imgHeight);
});

customBtn.addEventListener('click', function () {
    const gridColumns = '1fr';
    const cardFlexDirection = 'row';
    const imgWidth = '87%';
    const imgHeight = '340px';

    applyStyles(gridColumns, cardFlexDirection, imgWidth, imgHeight);
    saveStateToLocalStorage(gridColumns, cardFlexDirection, imgWidth, imgHeight);
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

document.getElementById("scrollToTopBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.getElementById("id_goods_quantity").addEventListener("change", function () {
    var url = new URL(window.location.href);
    url.searchParams.set('quantity', this.value);
    window.location.href = url;
});