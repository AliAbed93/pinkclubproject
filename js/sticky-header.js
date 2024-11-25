
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("message", (event) => {
        if (event.data === "closeMenu") {
            console.log('Hide');
            hideMenu();
        }
    });

    const nav = document.getElementById('nav');
    
    window.addEventListener('scroll', () => {
        if(nav){
            const stickyOffset = nav.offsetTop;
            if (window.pageYOffset > stickyOffset) {
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        }
    });

    // document.querySelectorAll('a').forEach(link => {
    //     link.setAttribute('target', '_top');
    // })
});
let scrollPosition = 0; // To store the scroll position

function showMenu() {

    // document.querySelector(".test-menu").style.display = "block";
    const element = document.getElementById("iframe-main-page");
    scrollPosition = window.pageYOffset; // Save the current scroll position
    element.style.display = "block";
    document.body.style.position = "fixed"; // Prevent background scrolling
    document.body.style.top = `-${scrollPosition}px`; // Set body to the saved position
}
function hideMenu() {
    const element = document.getElementById("iframe-main-page");
    element.style.display = "none";
    document.body.style.position = ""; // Reset body position
    document.body.style.top = ""; // Clear the top position
    window.scrollTo(0, scrollPosition); // Restore scroll position
    console.log('none');
}


// menu page
// let lastScrollPosition = 0;
// let element = document.getElementById("iframe-main-page");
//
// function showMenu() {
//     element.style.display = "block";
//
// }
//
// function hideMenu(){
//     element.style.display = "none";
//     lastScrollPosition = window.pageYOffset; // ذخیره موقعیت فعلی اسکرول
//     window.scrollTo(0, lastScrollPosition);
// }

// const showMenuButton = document.getElementById("test");
// const closeMenuButton = document.getElementById("close-test");

// showMenuButton.addEventListener("click", () => {
//     const element = document.getElementById("iframe-main-page");
//     element.classList.add("open-btn")
// })
// closeMenuButton.addEventListener("click", () => {
//     element.classList.remove("open-btn")
// })

