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

const openPopUp = document.querySelector('.pulsating-element');
const closePopUp = document.querySelector('.close-button');
const popUp = document.querySelector('.popup-contact-form');
const additionalElements = document.querySelector('.additional-elements');

openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
    additionalElements.style.display = 'none';
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    additionalElements.style.display = '';
})

document.getElementById("id_goods_quantity").addEventListener("change", function () {
    var url = new URL(window.location.href);
    url.searchParams.set('quantity', this.value);
    window.location.href = url;
});
