document.addEventListener("DOMContentLoaded", function () {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    let elements = document.querySelectorAll('.slide');
    window.addEventListener('touchmove', scrollfunc);
    window.addEventListener('wheel', scrollfunc);

    scrollfunc();

    function scrollfunc() {
        const height = (window.innerHeight / 5 * 4.5);

        elements.forEach((slide, index) => {
            slide.classList.add('notvis');
            const elementstop = slide.getBoundingClientRect().top;
            console.log(height)
            console.log(elementstop)
            if (elementstop < height) {
                setTimeout(() => {
                    slide.classList.add('show');
                    slide.classList.remove('notvis');
                }, index * 100);
            }
        });
    }
});
