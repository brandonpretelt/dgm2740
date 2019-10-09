/*$(document).ready(function() {
    $(".myslider").slick({});
});*/

window.addEventListener("DOMContentLoaded", function() {
    var theSlide = document.querySelector(".myslider");
    theSlide.slick({
        autoplay: true,
        dots: true,
        arrows: false,
        cssEase: "ease-out",
        speed: 1000,
        autoplaySpeed: 5000
    });
});

var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});

if (lazyLoadInstance) {
    lazyLoadInstance.update();
}
