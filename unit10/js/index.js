function toggleMenu() {
    // alert("this works");
    var menu = document.querySelector("nav ul");
    subMenu = document.querySelector("nav ul li ul");
    subMenu.classList.add("closed");
    menu.classList.toggle("closed");
    if (!menu.classList.contains("closed")) {
        document.querySelector("#menuOpen").innerHTML = "&otimes;";
    } else {
        document.querySelector("#menuOpen").innerHTML = "&equiv;";
    }
}

function toggleSubMenu() {
    var subMenu = document.querySelector("nav ul li ul");
    subMenu.classList.toggle("closed");
    if (subMenu.classList.contains("closed")) {
        document.querySelector("#open").innerHTML = "Orders &RightTriangle;";
    } else {
        document.querySelector("#open").innerHTML = "Orders &triangledown;";
    }
}

function toggleSub() {
    var subMenu = document.querySelector(".js-mouseover > ul");
    subMenu.classList.toggle("closed");
    if (subMenu.classList.contains("closed")) {
        document.querySelector(".js-mouseover").innerHTML =
            "Orders &RightTriangle;";
    } else {
        document.querySelector(".js-mouseover").innerHTML =
            "Orders &triangledown;";
    }

    if (subMenu.classList.contains("closed")) {
        document.querySelector("#open").innerHTML = "Orders &RightTriangle;";
    }
}

document.querySelector("#menuOpen").addEventListener("click", toggleMenu);
document.querySelector("#open").addEventListener("click", toggleSubMenu);
document.querySelector("#open").addEventListener("mouseover", toggleSub);
