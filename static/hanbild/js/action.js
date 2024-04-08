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

document.getElementById('languageSelect').onchange = function () {
    document.getElementById('languageFormFooter').submit();
};

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

const catalogMessageButtons = document.querySelectorAll('.catalog-message');
const openPopUp = document.querySelector('.pulsating-element');
const closePopUp = document.querySelector('.close-button');
const popUp = document.querySelector('.popup-contact-form');
const additionalElements = document.querySelector('.additional-elements');

function handlePopUpFormClick(event) {
    event.preventDefault();
    popUp.classList.add('active');
    additionalElements.style.display = 'none';
}

catalogMessageButtons.forEach(button => {
    button.addEventListener('click', handlePopUpFormClick);
});

openPopUp.addEventListener('click', handlePopUpFormClick);

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    additionalElements.style.display = '';
})

function setupSubmitButton(agreementCheckboxId, submitButtonClass, submitButtonWrapperClass) {
    var agreementCheckbox = document.getElementById(agreementCheckboxId);
    var submitButton = document.querySelector(submitButtonClass);
    var submitButtonWrapper = document.querySelector(submitButtonWrapperClass);

    function toggleSubmitButton() {
        if (agreementCheckbox.checked) {
            changeStyle(false, "#f0500a", "black");
        } else {
            changeStyle(true, "#fc9a79", "#666666");
        }
    }

    function changeStyle(is_active, bg_color, color) {
        submitButton.disabled = is_active;
        submitButtonWrapper.style.backgroundColor = bg_color;
        submitButtonWrapper.style.color = color;
    }

    if (agreementCheckbox) agreementCheckbox.addEventListener('change', toggleSubmitButton);
}

document.addEventListener('DOMContentLoaded', function () {
    setupSubmitButton('feedback-agreement', '.feedback-submit-button', '.feedback-submit-button-wrapper');
    setupSubmitButton('contact-agreement', '.contact-submit-button', '.contact-submit-button-wrapper');
});

var goodsQuantityInput = document.getElementById("id_goods_quantity");

if (goodsQuantityInput) {
    goodsQuantityInput.addEventListener("change", function () {
        var url = new URL(window.location.href);
        url.searchParams.set('quantity', this.value);
        window.location.href = url;
    });
}

confirmOrderButton = document.getElementById('id-confirm-order-button');

if (confirmOrderButton) {
    confirmOrderButton.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById('id-order-form').submit();
    });
}