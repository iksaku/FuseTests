var Observable = require("FuseJS/Observable");
var isMenuOpen = new Observable(false);

function openMenu(){
    isMenuOpen.value = true;
}

function closeMenu(){
    isMenuOpen.value = false;
}

module.exports = {
    isMenuOpen,
    openMenu,
    closeMenu
};