function startAnimation() {
    var pulseButton = document.querySelector('.pulsating-element');
    pulseButton.style.animation = 'pulse linear 1s infinite';
    setTimeout(function() {
        pulseButton.style.animation = 'none';
        setTimeout(startAnimation, 3000); 
    }, 1000);
}

startAnimation(); 



// Функція для відображення або приховування підменю
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

// Перевірка, чи маємо відкриті підпункти при завантаженні сторінки
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




