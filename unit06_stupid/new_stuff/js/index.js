var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    load_delay: 300,
    threshold: 0

    // ... more custom settings?
});

if (lazyLoadInstance) {
    lazyLoadInstance.update();
}
