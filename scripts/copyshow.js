let isFading = false;

function fadein() {
    if (isFading) return; 
    navigator.clipboard.writeText("jimmy@record7.com");

    isFading = true;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function waitfade() {
        let copyPopup = document.getElementById("copy");
        copyPopup.style.display = "flex";
        copyPopup.offsetHeight;
        copyPopup.style.opacity = "1";
        await sleep(4000);
        copyPopup.style.opacity = "0";
        await sleep(400);
        copyPopup.style.display = "none";
        isFading = false;
    }

    waitfade();
}
