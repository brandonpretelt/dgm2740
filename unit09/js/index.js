/*var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});

if (lazyLoadInstance) {
    lazyLoadInstance.update();
} */
function toggleMenu() {
    var menu = document.querySelector("nav ul");
    menu.classList.toggle("closed");
}

document.querySelector("#menuOpen").addEventListener("click", toggleMenu);
