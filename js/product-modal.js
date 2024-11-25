document.addEventListener("DOMContentLoaded", (doc) => {

    if(doc.type = "services.html"){
        console.log("ok")
    }
    const productModal = document.querySelector('#modal');
    const openProductModal = document.querySelector('#open-modal-btn');
    const overlay = document.querySelector("#overlay-modal");
    const exitBtn = document.querySelector("#close-modal-btn");

    openProductModal.addEventListener("click", (e) => {
        e.preventDefault()
        // Check if the parent container has the "unavailable" class
        const parentCard = button.closest('.card');
        if (parentCard && parentCard.querySelector('.unavailable')) {
            return; // Exit if the parent contains the "unavailable" class
        }

        productModal.classList.add("open");
        overlay.classList.add("open");
    })

    overlay.addEventListener("click", closeModal);
    exitBtn.addEventListener("click", closeModal);

    function closeModal(e) {
        e.preventDefault();
        productModal.classList.remove("open");
        overlay.classList.remove("open");
    }
})