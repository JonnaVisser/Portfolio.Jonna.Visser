// Menu mobile device
var deButton = document.querySelector("header nav button");
var hetMenu = document.querySelector(".uitgeklapt_menu");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    hetMenu.classList.toggle('toonMenu');
}

// Hambruger button
var hamburgerBtn = document.querySelector('.hamburgericon');
var menuOpen = false;

hamburgerBtn.addEventListener('click', function () {
    if (!menuOpen) {
        hamburgerBtn.classList.add('openMenu');
        menuOpen = true;
    } else {
        hamburgerBtn.classList.remove('openMenu');
        menuOpen = false;
    }
});
