function toggleMenu() {
    //alert("this works");
    var menu = document.querySelector("nav ul");
    menu.classList.toggle("closed");
}

var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});

document.querySelector(".hamburger").addEventListener("click", toggleMenu);

if (lazyLoadInstance) {
    lazyLoadInstance.update();
}
