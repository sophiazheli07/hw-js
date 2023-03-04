const rateButtonOne = document.querySelector("#rate-one");
const rateButtonTwo = document.querySelector("#rate-two");
const rateButtonThree = document.querySelector("#rate-three");
const rateButtonFour = document.querySelector("#rate-four");
const rateButtonFive = document.querySelector("#rate-five");
const mainButton = document.querySelector("#main-btn");
const openModalButton = document.querySelectorAll("[data-modal-target]");
const closeModalButton = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")
const Rates = [];

// mainButton.onclick = () => {
//     window.location = "index.html"
// }

rateButtonOne.onclick = () => {
    const rate = rateButtonOne.value;

    const UserRate = {rate};
    Rates.push(UserRate)
}

rateButtonTwo.onclick = () => {
    const rate = rateButtonTwo.value;

    const UserRate = {rate};
    Rates.push(UserRate)
}

rateButtonThree.onclick = () => {
    const rate = rateButtonThree.value;

    const UserRate = {rate};
    Rates.push(UserRate)
}

rateButtonFour.onclick = () => {
    const rate = rateButtonFour.value;

    const UserRate = {rate};
    Rates.push(UserRate)
}

rateButtonFive.onclick = () => {
    const rate = rateButtonFive.value;

    const UserRate = {rate};
    Rates.push(UserRate)
}


openModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const Modals = document.querySelectorAll(".modal.active")
    Modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


// closeModalButton.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const modal = document.querySelector('.popup')
//         closeModal(modal)
//     })

// })


console.log(Rates)

