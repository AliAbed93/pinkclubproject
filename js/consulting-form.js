document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault(); // Prevent default form submission
    // function responseMessage(){
    //     const consultingSubmit = document.getElementById("consulting-submit-btn")
    //     consultingSubmit.addEventListener("click", () => {
    //         alert("ok")
    //     })
    // }
    // // responseMessage() //when form is send to my email this alert pop up

    const consultingModal = document.querySelector('#form-modal')
    const openConsultingModal = document.querySelector('#open-form-modal-btn')
    const overlay = document.querySelector("#overlay-modal")
    const exitBtn = document.querySelector("#close-modal-btn")

    openConsultingModal.addEventListener("click", (e) => {
        e.preventDefault()
        consultingModal.classList.add("open")
        overlay.classList.add("open")
    })

    overlay.addEventListener("click", closeModal)
    exitBtn.addEventListener("click", closeModal)

    function closeModal(e) {
        e.preventDefault()
        consultingModal.classList.remove("open")
        overlay.classList.remove("open")
        console.log("rrr")

    }
})