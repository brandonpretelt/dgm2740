var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});

if (lazyLoadInstance) {
    lazyLoadInstance.update();
}

window.lazyLoadOptions = {
    threshold: 0
};
