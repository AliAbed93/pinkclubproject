document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector("#overlay-modal");

    instagramModal();
    gmailModal();

    function closeModal(modal) {
        modal.classList.remove("open");
        overlay.classList.remove("open");
    }

    function instagramModal() {
        const modal = document.querySelector('#instagram-modal');
        const openModalButton = document.querySelector("#open-instagram-modal-btn");

        openModalButton.addEventListener("click", () => {
            modal.classList.add("open");
            overlay.classList.add("open");
        });

        // Wrap closeModal in an anonymous function to pass the argument when clicked
        overlay.addEventListener("click", () => closeModal(modal));
    }

    function gmailModal() {
        const GmailModal = document.querySelector('#Gmail-modal');
        const openGmailModalBtn = document.querySelector("#open-Gmail-modal-btn");

        openGmailModalBtn.addEventListener("click", () => {
            GmailModal.classList.add("open");
            overlay.classList.add("open");
        });

        // Wrap closeModal in an anonymous function to pass the argument when clicked
        overlay.addEventListener("click", () => closeModal(GmailModal));
    }

});

