anime({
    targets: [".grid__item", ".list__item"],
    scale: [
        { value: 1, duration: 800 },
        { value: 1.1, duration: 200 },
        { value: 1, duration: 800 },
    ],
    easing: "easeInOutSine",
    delay: function (el, i, l) {
        return i * 200;
    },
    loop: false,
});

