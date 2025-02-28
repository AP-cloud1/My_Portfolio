document.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    document.querySelector(".hero").style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});
