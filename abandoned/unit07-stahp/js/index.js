function toggleMenu() {
    //alert("this works");
    var menu = document.querySelector("nav ul");
    menu.classList.toggle("closed");
}

document.querySelector("#menuOpen").addEventListener("click", toggleMenu);
