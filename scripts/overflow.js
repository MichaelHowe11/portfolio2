document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll('.projects section h3');

    headings.forEach(heading => {
        let fontSize = parseInt(window.getComputedStyle(heading).fontSize);
        while (heading.scrollWidth > heading.clientWidth && fontSize > 0) {
            print("e")
            fontSize -= 1;
            heading.style.fontSize = fontSize + 'px';
        }
    });
});