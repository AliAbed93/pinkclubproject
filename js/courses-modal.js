document.addEventListener("DOMContentLoaded", () => {
    const courseModal = document.querySelector('#modal');
    const openProductModal = document.querySelectorAll('.course-button');
    const overlay = document.querySelector("#overlay-modal");
    const exitBtn = document.querySelector("#close-modal-btn");

    // Attach event listener to each .course-button
    openProductModal.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            // Check if the parent container has the "unavailable" class
            const parentCard = button.closest('.card');
            if (parentCard && parentCard.querySelector('.course-img-box.unavailable')) {
                return; // Exit if the parent contains the "unavailable" class
            }

            // Open modal if parent doesn't have the "unavailable" class
            courseModal.classList.add("open");
            overlay.classList.add("open");
        });
    });

    overlay.addEventListener("click", closeModal);
    exitBtn.addEventListener("click", closeModal);

    function closeModal(e) {
        e.preventDefault();
        courseModal.classList.remove("open");
        overlay.classList.remove("open");
    }
});
