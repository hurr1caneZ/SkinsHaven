let isPageLoaded = false;

window.addEventListener("DOMContentLoaded", function () {

    if (!isPageLoaded) {
        let navbar = document.querySelector('.nav-bar').children;
        for (let i = 0; i < navbar.length; i++) {
            if (document.location["href"] === navbar[i].children[0].href) {
                navbar[i].children[0].classList.add('active-state');
            }
        }
        isPageLoaded = true;
    }
});


function measurePageLoadTime() {
    const loadTime = performance.now();
    const loadingInfo = document.querySelector(".loading-info");
    if (loadingInfo) {
        loadingInfo.textContent += ` ms (server) +  ${loadTime.toFixed(2)} ms (client)`;
        loadingInfo.style.color = "#fff";
    } else {
        console.error("Элемент с id 'loading-info' не найден");
    }
}

window.addEventListener("load", measurePageLoadTime);


